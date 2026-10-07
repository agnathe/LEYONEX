"use client";

import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import type { Line2, LineSegments2 } from "three-stdlib";
import type { HighlightKey } from "../content";
import { Anim, AnimProvider, type AnimItem } from "./anim";
import { clamp01, easeOut, evaluate, sequence, smoothstep } from "./director";
import { mat, palette } from "./materials";
import {
  CateringStation,
  Chair,
  Cylinder,
  Figure,
  GiftBoxes,
  HotelModule,
  Panel,
  ReportSheet,
  RollUp,
  RoundTable,
  Slab,
  Stool,
  Van,
  reportMarkerPoint,
} from "./parts";
import { sceneStore } from "./store";

type V3 = [number, number, number];
type FatLine = Line2 | LineSegments2;

// Maket yerleşimi (metre). Stant: x -3…3, z -2…2, ön yüz +z.
const COORD: V3 = [0, 0, 2.95];
const LINE_Y = 0.095;

const serviceAnchors: V3[] = [
  [-4.55, 0, -2.5], // konaklama
  [-4.2, 0, 3.95], // transfer
  [2.05, 0, 1.65], // karşılama
  [3.45, 0, -0.5], // ikram
  [3.6, 0, 2.3], // baskı / promosyon
];

const highlightAnchors: Record<
  HighlightKey,
  { p: [number, number]; r: number }
> = {
  display: { p: [-1.5, -1.45], r: 1.0 },
  meeting: { p: [0.75, -0.25], r: 1.1 },
  flow: { p: [0, 1.75], r: 0.75 },
  hotel: { p: [-5.0, -3.2], r: 1.2 },
  transfer: { p: [-4.9, 3.95], r: 1.0 },
  reception: { p: [2.05, 1.2], r: 0.95 },
  catering: { p: [4.05, -0.5], r: 0.85 },
  print: { p: [4.05, 2.45], r: 0.95 },
};
const serviceOrder: HighlightKey[] = [
  "hotel",
  "transfer",
  "reception",
  "catering",
  "print",
];

const goalPoints: V3[] = [
  [0, LINE_Y + 0.01, 1.75],
  [-1.45, LINE_Y + 0.01, -0.55],
  [1.25, LINE_Y + 0.01, 0.6],
];

const markerStarts = [
  new THREE.Vector3(2.05, 1.14, 1.3),
  new THREE.Vector3(0.75, 0.84, -0.25),
  new THREE.Vector3(4.05, 1.04, -0.5),
];
const reportSheets: V3[] = [
  [3.75, 0, -3.55],
  [4.8, 0, -3.55],
  [5.85, 0, -3.55],
];
const REPORT_ROTATION = 0.35;
const markerTargets = reportSheets.map((p) =>
  reportMarkerPoint(p, REPORT_ROTATION)
);

const people: { p: V3; h: number; c: string; r: number }[] = [
  { p: [-1.25, 0.08, -0.55], h: 1.74, c: "#2B2B2B", r: Math.PI },
  { p: [-0.55, 0.08, 1.25], h: 1.68, c: "#767676", r: -0.6 },
  { p: [1.35, 0.08, -0.8], h: 1.7, c: "#2B2B2B", r: -2.2 },
  { p: [0.2, 0.08, 0.35], h: 1.78, c: "#B3B3B3", r: 2.4 },
  { p: [1.0, 0, 2.55], h: 1.8, c: "#767676", r: 1.4 },
  { p: [-2.1, 0, 2.7], h: 1.7, c: "#2B2B2B", r: 1.6 },
  { p: [2.95, 0, 2.85], h: 1.72, c: "#B3B3B3", r: -1.5 },
  { p: [-3.55, 0, 0.9], h: 1.75, c: "#767676", r: 0.4 },
  { p: [0.05, 0.08, -0.85], h: 1.66, c: "#F4F4F2", r: 0.3 },
];

function curvePoints(points: V3[], samples: number) {
  const curve = new THREE.CatmullRomCurve3(
    points.map((p) => new THREE.Vector3(...p)),
    false,
    "centripetal"
  );
  return curve.getPoints(samples);
}

function arcPoints(from: V3, to: V3, lift: number, samples = 40) {
  const a = new THREE.Vector3(from[0], LINE_Y, from[2]);
  const b = new THREE.Vector3(to[0], LINE_Y, to[2]);
  const mid = a.clone().lerp(b, 0.5);
  mid.y += lift;
  return new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(samples);
}

function rect(x1: number, z1: number, x2: number, z2: number): V3[] {
  return [
    [x1, LINE_Y, z1],
    [x2, LINE_Y, z1],
    [x2, LINE_Y, z2],
    [x1, LINE_Y, z2],
    [x1, LINE_Y, z1],
  ];
}

function circle(cx: number, cz: number, r: number, n = 48): V3[] {
  return Array.from({ length: n + 1 }, (_, k) => {
    const a = (k / n) * Math.PI * 2;
    return [cx + Math.cos(a) * r, LINE_Y, cz + Math.sin(a) * r] as V3;
  });
}

function setDraw(line: FatLine | null, draw: number) {
  if (!line) return;
  const geometry = line.geometry as THREE.InstancedBufferGeometry;
  const total =
    (
      geometry.attributes.instanceStart as
        | THREE.InterleavedBufferAttribute
        | undefined
    )?.count ?? 0;
  const count = Math.round(total * clamp01(draw));
  geometry.instanceCount = count;
  line.visible = count > 0;
}

function applyItem(item: AnimItem, value: number) {
  const local = sequence(value, item.index, item.count, item.spread);
  const e = easeOut(local);
  const g = item.group;
  if (item.mode === "rise") {
    // Duvarlar plan görünümünde ayak izi olarak kalır.
    g.visible = value > 0.001;
    g.scale.set(1, Math.max(0.02, e), 1);
    return;
  }
  g.visible = local > 0.002;
  if (!g.visible) return;
  if (item.mode === "pop") {
    g.scale.setScalar(Math.max(0.002, e));
  } else if (item.mode === "settle") {
    g.position.y = item.baseY + (1 - e) * 0.7;
    g.scale.setScalar(0.88 + 0.12 * e);
  } else {
    for (const m of item.materials) {
      m.opacity = e;
      m.transparent = e < 0.999;
    }
  }
}

export default function Maquette({ quality }: { quality: "full" | "light" }) {
  const items = useRef<AnimItem[]>([]);
  const register = useCallback((item: AnimItem) => {
    items.current.push(item);
    return () => {
      items.current = items.current.filter((x) => x !== item);
    };
  }, []);

  const root = useRef<THREE.Group>(null);
  const hemi = useRef<THREE.HemisphereLight>(null);
  const key = useRef<THREE.DirectionalLight>(null);
  const spot = useRef<THREE.SpotLight>(null);
  const route = useRef<FatLine>(null);
  const transfer = useRef<FatLine>(null);
  const links = useRef<(FatLine | null)[]>([]);
  const planGroup = useRef<THREE.Group>(null);
  const planLines = useRef<(FatLine | null)[]>([]);
  const goals = useRef<(THREE.Group | null)[]>([]);
  const markers = useRef<(THREE.Group | null)[]>([]);
  const ring = useRef<THREE.Group>(null);
  const ringState = useRef({ x: 0, z: 0, r: 1, o: 0 });

  const geometry = useMemo(() => {
    const routePoints = curvePoints(
      [
        [COORD[0], LINE_Y, COORD[2]],
        [0, LINE_Y, 1.75],
        [-0.75, LINE_Y, 0.95],
        [-1.45, LINE_Y, -0.55],
        [-0.4, LINE_Y, -0.95],
        [0.1, LINE_Y, 0.25],
        [1.25, LINE_Y, 0.6],
      ],
      120
    );
    const linkPoints = serviceAnchors.map((a) => arcPoints(a, COORD, 0.45));
    const transferPoints = curvePoints(
      [
        [-4.55, 0.03, -2.55],
        [-3.65, 0.03, -1.5],
        [-3.6, 0.03, 1.9],
        [-4.25, 0.03, 3.7],
      ],
      60
    );
    const plan: {
      points: V3[];
      color: string;
      width: number;
      dashed?: boolean;
      opacity: number;
    }[] = [
      {
        points: rect(-3, -2, 3, 2),
        color: palette.dark,
        width: 1.6,
        opacity: 0.9,
      },
      {
        points: rect(-2.8, -1.85, -0.45, -0.95),
        color: palette.grey,
        width: 1.2,
        dashed: true,
        opacity: 0.8,
      },
      {
        points: circle(0.75, -0.25, 1.05),
        color: palette.grey,
        width: 1.2,
        dashed: true,
        opacity: 0.8,
      },
      {
        points: rect(1.25, 0.85, 2.85, 1.85),
        color: palette.grey,
        width: 1.2,
        dashed: true,
        opacity: 0.8,
      },
      {
        points: rect(1.6, -2, 3, -0.7),
        color: palette.grey,
        width: 1.2,
        dashed: true,
        opacity: 0.8,
      },
      {
        points: [
          [-3, LINE_Y, 2.4],
          [3, LINE_Y, 2.4],
        ],
        color: palette.grey,
        width: 1,
        opacity: 0.7,
      },
      {
        points: [
          [-3, LINE_Y, 2.25],
          [-3, LINE_Y, 2.55],
        ],
        color: palette.grey,
        width: 1,
        opacity: 0.7,
      },
      {
        points: [
          [3, LINE_Y, 2.25],
          [3, LINE_Y, 2.55],
        ],
        color: palette.grey,
        width: 1,
        opacity: 0.7,
      },
    ];
    return { routePoints, linkPoints, transferPoints, plan };
  }, []);

  useLayoutEffect(() => {
    const shadows = quality === "full";
    root.current?.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh || mesh.userData.noShadow) return;
      const material = mesh.material as THREE.Material;
      const lineLike = "isLineMaterial" in material;
      mesh.castShadow = shadows && !lineLike && !material.transparent;
      mesh.receiveShadow = shadows && !lineLike;
    });
    if (spot.current) {
      spot.current.target.position.set(0.2, 0.4, 0);
      spot.current.target.updateMatrixWorld();
    }
  }, [quality]);

  useFrame((state) => {
    const frame = evaluate(sceneStore.progress);
    const v = frame.values;

    for (const item of items.current) applyItem(item, v[item.track]);

    // Işık: saha sahnesinde ortam kısılır, stant ışıkları öne çıkar.
    const ambientScale = quality === "full" ? 0.85 : 1.25;
    if (hemi.current) hemi.current.intensity = ambientScale * v.ambient;
    if (key.current) key.current.intensity = 2.3 * (0.72 + 0.28 * v.ambient);
    if (spot.current)
      spot.current.intensity = smoothstep(0.45, 1, v.lights) * 55;
    mat.light.emissiveIntensity = 0.25 + 2.1 * v.lights;
    mat.screen.emissiveIntensity = 0.12 + 0.9 * v.lights;

    const highlight = sceneStore.highlight;

    // Kırmızı süreç hattı.
    setDraw(route.current, frame.route);
    if (route.current) {
      const m = route.current.material as THREE.Material & {
        linewidth: number;
      };
      m.linewidth = highlight === "flow" ? 5 : 3;
    }

    // Hizmet bağlantıları aynı koordinasyon noktasında birleşir.
    links.current.forEach((line, i) => {
      setDraw(line, sequence(v.links, i, 5, 0.6));
      if (!line) return;
      const m = line.material as THREE.Material & {
        linewidth: number;
        opacity: number;
      };
      const focused = highlight === serviceOrder[i];
      m.opacity = highlight && !focused ? 0.3 : 0.9;
      m.linewidth = focused ? 3.5 : 2;
    });
    setDraw(transfer.current, sequence(v.services, 1, 5, 0.52));

    // Plan katmanı.
    if (planGroup.current) planGroup.current.visible = v.plan > 0.01;
    planLines.current.forEach((line, i) => {
      if (!line) return;
      (line.material as THREE.Material).opacity =
        v.plan * geometry.plan[i].opacity;
    });

    goals.current.forEach((g, i) => {
      if (!g) return;
      const e = easeOut(sequence(v.goals, i, 3, 0.5));
      g.visible = e > 0.002;
      g.scale.setScalar(Math.max(0.002, e));
    });

    // Gözlem noktaları rapor sayfalarına taşınır.
    markers.current.forEach((g, i) => {
      if (!g) return;
      const e = easeOut(sequence(v.markers, i, 3, 0.5));
      g.visible = e > 0.002;
      if (!g.visible) return;
      g.scale.setScalar(Math.max(0.002, e));
      const t = smoothstep(0, 1, sequence(v.markerTravel, i, 3, 0.6));
      g.position.copy(markerStarts[i]).lerp(markerTargets[i], t);
      g.position.y += Math.sin(Math.PI * t) * 1.1;
    });

    // Seçili bölge için zemin halkası (HTML liste ile eşleşir).
    const rs = ringState.current;
    const target = highlight ? highlightAnchors[highlight] : null;
    const k = 0.18;
    if (target) {
      if (rs.o < 0.05) {
        rs.x = target.p[0];
        rs.z = target.p[1];
        rs.r = target.r;
      }
      rs.x += (target.p[0] - rs.x) * k;
      rs.z += (target.p[1] - rs.z) * k;
      rs.r += (target.r - rs.r) * k;
    }
    const opacityTarget = target ? 1 : 0;
    rs.o += (opacityTarget - rs.o) * k;
    if (ring.current) {
      ring.current.visible = rs.o > 0.01;
      ring.current.position.set(rs.x, LINE_Y + 0.012, rs.z);
      ring.current.scale.setScalar(rs.r);
      mat.highlight.opacity = 0.9 * rs.o;
      mat.highlightFill.opacity = 0.1 * rs.o;
    }
    const ringSettled =
      Math.abs(opacityTarget - rs.o) < 0.005 &&
      (!target || Math.abs(target.p[0] - rs.x) < 0.005);
    if (!ringSettled) state.invalidate();
  });

  return (
    <AnimProvider value={register}>
      <hemisphereLight ref={hemi} args={["#FFFFFF", "#8A9096", 1]} />
      <directionalLight
        ref={key}
        position={[-7, 13, 9]}
        intensity={2.3}
        castShadow={quality === "full"}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={1}
        shadow-camera-far={40}
        shadow-bias={-0.0004}
        shadow-normalBias={0.03}
      />
      <directionalLight position={[9, 6, -8]} intensity={0.7} color="#E8EEF3" />
      <spotLight
        ref={spot}
        position={[0.6, 7.5, 3.5]}
        angle={0.6}
        penumbra={0.85}
        decay={2}
        distance={22}
        intensity={0}
        color="#FFF1DC"
      />

      <group ref={root}>
        {/* Maket platformu */}
        <Panel
          size={[13.4, 0.22, 9.8]}
          position={[0, -0.11, 0]}
          material={mat.base}
          radius={0.04}
        />
        <Panel
          size={[13.1, 0.5, 9.5]}
          position={[0, -0.47, 0]}
          material={mat.plinth}
          radius={0.03}
        />
        <Slab
          size={[13.2, 0.006, 1.1]}
          position={[0, 0.003, COORD[2]]}
          material={mat.aisle}
        />
        <Slab
          size={[3.2, 0.008, 0.9]}
          position={[-4.85, 0.004, 3.98]}
          material={mat.road}
        />

        {/* Komşu stantlar: fuar alanı bağlamı */}
        <Anim track="neighbors" mode="rise" i={0} n={2} spread={0.8}>
          <Slab
            size={[4.4, 0.05, 1.7]}
            position={[0, 0.025, -3.75]}
            material={mat.neighbor}
          />
          <Slab
            size={[4.4, 0.95, 0.08]}
            position={[0, 0.475, -4.56]}
            material={mat.neighbor}
          />
          <Slab
            size={[0.08, 0.95, 1.6]}
            position={[-2.16, 0.475, -3.75]}
            material={mat.neighbor}
          />
        </Anim>
        <Anim track="neighbors" mode="rise" i={1} n={2} spread={0.8}>
          <Slab
            size={[2.0, 0.05, 2.6]}
            position={[-5.3, 0.025, 0.1]}
            material={mat.neighbor}
          />
          <Slab
            size={[0.08, 0.95, 2.6]}
            position={[-6.26, 0.475, 0.1]}
            material={mat.neighbor}
          />
        </Anim>

        {/* Stant zemini ve ön kenardaki kırmızı hat */}
        <Panel
          size={[6, 0.08, 4]}
          position={[0, 0.04, 0]}
          material={mat.floor}
          radius={0.015}
        />
        <Slab
          size={[6, 0.012, 0.05]}
          position={[0, 0.086, 1.975]}
          material={mat.red}
        />

        {/* Duvarlar / paneller: plan çizgilerinden yükselir */}
        <Anim
          track="walls"
          mode="rise"
          i={0}
          n={4}
          spread={0.7}
          position={[0, 0.08, 0]}
        >
          <Panel
            size={[4.6, 2.7, 0.14]}
            position={[-0.7, 1.35, -1.93]}
            material={mat.white}
          />
          <Panel
            size={[2.4, 1.3, 0.04]}
            position={[-0.2, 1.6, -1.84]}
            material={mat.dark}
            radius={0.01}
          />
          <Slab
            size={[1.05, 0.075, 0.012]}
            position={[-0.2, 1.6, -1.815]}
            rotation={[0, 0, 0.62]}
            material={mat.red}
          />
          <Slab
            size={[1.05, 0.075, 0.012]}
            position={[-0.2, 1.6, -1.813]}
            rotation={[0, 0, -0.62]}
            material={mat.red}
          />
          <Slab
            size={[0.06, 2.2, 0.02]}
            position={[-2.72, 1.25, -1.855]}
            material={mat.light}
          />
          <Slab
            size={[0.06, 2.2, 0.02]}
            position={[1.45, 1.25, -1.855]}
            material={mat.light}
          />
        </Anim>
        <Anim
          track="walls"
          mode="rise"
          i={1}
          n={4}
          spread={0.7}
          position={[0, 0.08, 0]}
        >
          <Panel
            size={[0.14, 2.7, 2.6]}
            position={[-2.93, 1.35, -0.7]}
            material={mat.white}
          />
          <Slab
            size={[0.03, 0.72, 1.28]}
            position={[-2.845, 1.55, -0.55]}
            material={mat.screen}
          />
        </Anim>
        <Anim
          track="walls"
          mode="rise"
          i={2}
          n={4}
          spread={0.7}
          position={[0, 0.08, 0]}
        >
          <Panel
            size={[1.4, 2.7, 1.3]}
            position={[2.3, 1.35, -1.35]}
            material={mat.white}
          />
          <Slab
            size={[0.72, 2.0, 0.012]}
            position={[2.3, 1.0, -0.696]}
            material={mat.dark}
          />
        </Anim>
        <Anim
          track="walls"
          mode="rise"
          i={3}
          n={4}
          spread={0.7}
          position={[-2.6, 0.08, 1.6]}
        >
          <Panel
            size={[0.55, 3.3, 0.55]}
            position={[0, 1.65, 0]}
            material={mat.white}
          />
          <Slab
            size={[0.07, 2.7, 0.012]}
            position={[0, 1.45, 0.281]}
            material={mat.red}
          />
          <Slab
            size={[0.36, 0.05, 0.012]}
            position={[0, 3.0, 0.281]}
            rotation={[0, 0, 0.785]}
            material={mat.red}
          />
          <Slab
            size={[0.36, 0.05, 0.012]}
            position={[0, 3.0, 0.283]}
            rotation={[0, 0, -0.785]}
            material={mat.red}
          />
        </Anim>

        {/* Ürün sunum alanı */}
        <Anim
          track="furniture"
          mode="rise"
          i={0}
          n={5}
          spread={0.45}
          position={[0, 0.08, 0]}
        >
          <Panel
            size={[0.5, 0.9, 0.5]}
            position={[-2.2, 0.45, -1.45]}
            material={mat.white}
          />
          <Panel
            size={[0.5, 1.12, 0.5]}
            position={[-1.5, 0.56, -1.45]}
            material={mat.white}
          />
          <Panel
            size={[0.5, 0.75, 0.5]}
            position={[-0.8, 0.375, -1.45]}
            material={mat.white}
          />
          <Panel
            size={[0.3, 0.22, 0.3]}
            position={[-2.2, 1.01, -1.45]}
            material={mat.dark}
            radius={0.03}
          />
          <Panel
            size={[0.42, 0.42, 0.42]}
            position={[-1.5, 1.33, -1.45]}
            material={mat.glass}
            radius={0.01}
          />
          <mesh position={[-1.5, 1.24, -1.45]} material={mat.metal}>
            <sphereGeometry args={[0.1, 24, 18]} />
          </mesh>
          <Cylinder
            radius={0.1}
            height={0.3}
            position={[-0.8, 0.9, -1.45]}
            material={mat.metal}
          />
        </Anim>

        {/* Görüşme alanı */}
        <Anim
          track="furniture"
          mode="pop"
          i={1}
          n={5}
          spread={0.45}
          position={[0.75, 0.08, -0.25]}
        >
          <RoundTable position={[0, 0, 0]} />
          <Chair position={[0, 0, -0.78]} rotation={0} />
          <Chair position={[0.68, 0, 0.4]} rotation={-2.1} />
          <Chair position={[-0.68, 0, 0.4]} rotation={2.1} />
        </Anim>

        {/* Karşılama bankosu */}
        <Anim
          track="furniture"
          mode="rise"
          i={2}
          n={5}
          spread={0.45}
          position={[2.05, 0.08, 1.3]}
        >
          <Panel
            size={[1.4, 1.0, 0.6]}
            position={[0, 0.5, 0]}
            material={mat.white}
            radius={0.03}
          />
          <Slab
            size={[1.46, 0.04, 0.66]}
            position={[0, 1.02, 0]}
            material={mat.dark}
          />
          <Slab
            size={[1.4, 0.05, 0.012]}
            position={[0, 0.84, 0.302]}
            material={mat.red}
          />
        </Anim>

        {/* Ayakta görüşme noktası */}
        <Anim
          track="furniture"
          mode="pop"
          i={3}
          n={5}
          spread={0.45}
          position={[-1.65, 0.08, 0.85]}
        >
          <RoundTable position={[0, 0, 0]} radius={0.32} height={1.05} />
          <Stool position={[0.5, 0, 0.1]} />
          <Stool position={[-0.48, 0, 0.18]} />
        </Anim>

        {/* Tavan konstrüksiyonu ve spotlar */}
        <Anim
          track="furniture"
          mode="settle"
          i={4}
          n={5}
          spread={0.45}
          position={[0, 0, 0]}
        >
          <Slab
            size={[5.7, 0.07, 0.07]}
            position={[0, 3.1, -1.75]}
            material={mat.metal}
          />
          <Slab
            size={[5.7, 0.07, 0.07]}
            position={[0, 3.1, 1.75]}
            material={mat.metal}
          />
          <Slab
            size={[0.07, 0.07, 3.5]}
            position={[-2.85, 3.1, 0]}
            material={mat.metal}
          />
          <Slab
            size={[0.07, 0.07, 3.5]}
            position={[2.85, 3.1, 0]}
            material={mat.metal}
          />
          {[-1.9, 0, 1.9].flatMap((x) =>
            [-1.75, 1.75].map((z) => (
              <group key={`${x}${z}`} position={[x, 3.0, z]}>
                <Cylinder
                  radius={0.055}
                  height={0.14}
                  material={mat.darker}
                  segments={14}
                />
                <Cylinder
                  radius={0.04}
                  height={0.01}
                  position={[0, -0.075, 0]}
                  material={mat.light}
                  segments={14}
                />
              </group>
            ))
          )}
        </Anim>

        {/* Hizmet noktaları */}
        <Anim
          track="services"
          mode="settle"
          i={0}
          n={5}
          spread={0.52}
          position={[-5.0, 0, -3.2]}
        >
          <HotelModule position={[0, 0, 0]} />
        </Anim>
        <Anim
          track="services"
          mode="settle"
          i={1}
          n={5}
          spread={0.52}
          position={[-4.9, 0, 3.95]}
        >
          <Van position={[0, 0, 0]} />
        </Anim>
        <Anim
          track="services"
          mode="fade"
          i={2}
          n={5}
          spread={0.52}
          position={[2.05, 0.08, 0.82]}
        >
          <Figure position={[0, 0, 0]} height={1.7} color="#E31B23" />
        </Anim>
        <Anim
          track="services"
          mode="settle"
          i={3}
          n={5}
          spread={0.52}
          position={[4.05, 0, -0.5]}
        >
          <CateringStation position={[0, 0, 0]} rotation={-Math.PI / 2} />
        </Anim>
        <Anim
          track="services"
          mode="settle"
          i={4}
          n={5}
          spread={0.52}
          position={[3.75, 0, 2.3]}
        >
          <RollUp position={[0, 0, 0]} rotation={-0.5} />
          <GiftBoxes position={[0.45, 0, 0.3]} />
        </Anim>

        {/* Koordinasyon noktası */}
        <group position={COORD}>
          <Cylinder
            radius={0.26}
            height={0.02}
            position={[0, 0.01, 0]}
            material={mat.red}
            segments={40}
          />
          <Cylinder
            radius={0.018}
            height={0.6}
            position={[0, 0.32, 0]}
            material={mat.red}
            segments={10}
          />
          <mesh position={[0, 0.64, 0]} material={mat.red}>
            <sphereGeometry args={[0.065, 20, 14]} />
          </mesh>
        </group>

        {/* Ziyaretçiler */}
        {people.map((person, i) => (
          <Anim
            key={i}
            track="people"
            mode="fade"
            i={i}
            n={people.length}
            spread={0.14}
            position={person.p}
          >
            <Figure
              position={[0, 0, 0]}
              height={person.h}
              color={person.c}
              rotation={person.r}
            />
          </Anim>
        ))}

        {/* Rapor yüzeyi */}
        {reportSheets.map((p, i) => (
          <Anim
            key={i}
            track="report"
            mode="rise"
            i={i}
            n={3}
            spread={0.6}
            position={p}
          >
            <ReportSheet position={[0, 0, 0]} rotation={REPORT_ROTATION} />
          </Anim>
        ))}
      </group>

      {/* Plan katmanı */}
      <group ref={planGroup}>
        {geometry.plan.map((line, i) => (
          <Line
            key={i}
            ref={(el) => {
              planLines.current[i] = el;
            }}
            points={line.points}
            color={line.color}
            lineWidth={line.width}
            dashed={line.dashed}
            dashSize={0.16}
            gapSize={0.1}
            transparent
            opacity={0}
            depthWrite={false}
          />
        ))}
      </group>

      <Line
        ref={route}
        points={geometry.routePoints}
        color={palette.red}
        lineWidth={3}
        transparent
        opacity={0.95}
      />
      <Line
        ref={transfer}
        points={geometry.transferPoints}
        color={palette.grey}
        lineWidth={1.6}
        dashed
        dashSize={0.18}
        gapSize={0.12}
        transparent
        opacity={0.85}
      />
      {geometry.linkPoints.map((points, i) => (
        <Line
          key={i}
          ref={(el) => {
            links.current[i] = el;
          }}
          points={points}
          color={palette.red}
          lineWidth={2}
          transparent
          opacity={0.9}
        />
      ))}

      {/* Hedef → öncelik → plan işaretleri */}
      {goalPoints.map((p, i) => (
        <group
          key={i}
          position={p}
          ref={(el) => {
            goals.current[i] = el;
          }}
        >
          <mesh rotation={[-Math.PI / 2, 0, 0]} material={mat.red}>
            <ringGeometry args={[0.17, 0.24, 40]} />
          </mesh>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.002, 0]}
            material={mat.red}
          >
            <circleGeometry args={[0.07, 24]} />
          </mesh>
        </group>
      ))}

      {/* Gözlem işaretleri */}
      {markerStarts.map((p, i) => (
        <group
          key={i}
          position={p}
          ref={(el) => {
            markers.current[i] = el;
          }}
        >
          <mesh material={mat.red}>
            <sphereGeometry args={[0.085, 20, 14]} />
          </mesh>
        </group>
      ))}

      {/* Vurgu halkası */}
      <group ref={ring} visible={false}>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          material={mat.highlight}
          userData={{ noShadow: true }}
        >
          <ringGeometry args={[0.93, 1, 64]} />
        </mesh>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.002, 0]}
          material={mat.highlightFill}
          userData={{ noShadow: true }}
        >
          <circleGeometry args={[0.93, 64]} />
        </mesh>
      </group>
    </AnimProvider>
  );
}
