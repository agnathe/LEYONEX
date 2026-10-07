"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { mat } from "./materials";

type V3 = [number, number, number];

interface BoxProps {
  size: V3;
  position?: V3;
  rotation?: V3;
  material: THREE.Material;
  radius?: number;
}

/** Hafif yuvarlatılmış kenarlı panel/kutu. */
export function Panel({
  size,
  position,
  rotation,
  material,
  radius = 0.02,
}: BoxProps) {
  return (
    <RoundedBox
      args={size}
      radius={radius}
      smoothness={2}
      position={position}
      rotation={rotation}
      material={material}
    />
  );
}

/** Keskin kenarlı ince parça (bant, çizgi, çerçeve, dokulu yüzey). */
export function Slab({
  size,
  position,
  rotation,
  material,
}: Omit<BoxProps, "radius">) {
  return (
    <mesh position={position} rotation={rotation} material={material}>
      <boxGeometry args={size} />
    </mesh>
  );
}

export function Cylinder({
  radius,
  radiusBottom,
  height,
  position,
  rotation,
  material,
  segments = 28,
}: {
  radius: number;
  radiusBottom?: number;
  height: number;
  position?: V3;
  rotation?: V3;
  material: THREE.Material;
  segments?: number;
}) {
  return (
    <mesh position={position} rotation={rotation} material={material}>
      <cylinderGeometry
        args={[radius, radiusBottom ?? radius, height, segments]}
      />
    </mesh>
  );
}

/**
 * Yumuşak temas gölgesi: nesneyi zemine oturtur, gölge haritası olmadan da çalışır.
 * own: saydamlık animasyonunda nesneyle birlikte solması için kendi malzemesi.
 */
export function BlobShadow({
  position = [0, 0.004, 0],
  size,
  opacity = 0.3,
  own = false,
}: {
  position?: V3;
  size: [number, number];
  opacity?: number;
  own?: boolean;
}) {
  const material = useMemo(() => {
    if (!own && opacity === 0.3) return mat.shadow;
    const m = mat.shadow.clone();
    m.opacity = opacity;
    m.userData.baseOpacity = opacity;
    return m;
  }, [own, opacity]);
  return (
    <mesh
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[size[0], size[1], 1]}
      material={material}
      userData={{ noShadow: true }}
      renderOrder={1}
    >
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
}

const shellBack = (() => {
  const g = new THREE.CylinderGeometry(
    0.25,
    0.23,
    0.3,
    18,
    1,
    true,
    Math.PI * 0.62,
    Math.PI * 0.76
  );
  return g;
})();

/** Kabuk sandalye: kumaş kabuk, ahşap ayaklar. */
export function Chair({
  position,
  rotation = 0,
}: {
  position: V3;
  rotation?: number;
}) {
  const legs: V3[] = [
    [0.15, 0.2, 0.14],
    [-0.15, 0.2, 0.14],
    [0.15, 0.2, -0.14],
    [-0.15, 0.2, -0.14],
  ];
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {legs.map((p) => (
        <Cylinder
          key={p.join()}
          radius={0.014}
          height={0.44}
          position={p}
          rotation={[p[2] > 0 ? 0.14 : -0.14, 0, p[0] > 0 ? -0.14 : 0.14]}
          material={mat.wood}
          segments={8}
        />
      ))}
      <Panel
        size={[0.46, 0.05, 0.44]}
        position={[0, 0.44, 0]}
        material={mat.fabric}
        radius={0.022}
      />
      <mesh
        geometry={shellBack}
        position={[0, 0.62, 0.02]}
        material={mat.fabric}
      />
      <BlobShadow size={[0.62, 0.6]} opacity={0.22} />
    </group>
  );
}

export function RoundTable({
  position,
  radius = 0.5,
  height = 0.74,
}: {
  position: V3;
  radius?: number;
  height?: number;
}) {
  return (
    <group position={position}>
      <Cylinder
        radius={0.22}
        radiusBottom={0.26}
        height={0.025}
        position={[0, 0.012, 0]}
        material={mat.darker}
      />
      <Cylinder
        radius={0.03}
        height={height - 0.02}
        position={[0, height / 2, 0]}
        material={mat.darker}
        segments={12}
      />
      <Cylinder
        radius={radius}
        height={0.035}
        position={[0, height, 0]}
        material={mat.wood}
        segments={48}
      />
      <Cylinder
        radius={radius + 0.004}
        height={0.008}
        position={[0, height - 0.02, 0]}
        material={mat.darker}
        segments={48}
      />
    </group>
  );
}

export function Stool({ position }: { position: V3 }) {
  return (
    <group position={position}>
      <Cylinder
        radius={0.16}
        height={0.02}
        position={[0, 0.01, 0]}
        material={mat.darker}
      />
      <Cylinder
        radius={0.022}
        height={0.7}
        position={[0, 0.36, 0]}
        material={mat.darker}
        segments={12}
      />
      <Cylinder
        radius={0.17}
        radiusBottom={0.15}
        height={0.05}
        position={[0, 0.73, 0]}
        material={mat.wood}
      />
      <BlobShadow size={[0.5, 0.5]} opacity={0.2} />
    </group>
  );
}

/** Düşük poligonlu, sakin yeşil bitki. */
export function Plant({
  position,
  scale = 1,
  tall = false,
}: {
  position: V3;
  scale?: number;
  tall?: boolean;
}) {
  return (
    <group position={position} scale={scale}>
      <Cylinder
        radius={0.17}
        radiusBottom={0.13}
        height={0.42}
        position={[0, 0.21, 0]}
        material={mat.pot}
        segments={20}
      />
      {tall && (
        <Cylinder
          radius={0.018}
          height={0.7}
          position={[0, 0.75, 0]}
          material={mat.wood}
          segments={6}
        />
      )}
      <group position={[0, tall ? 1.15 : 0.62, 0]}>
        <mesh material={mat.leaf} position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.28, 1]} />
        </mesh>
        <mesh material={mat.leafDark} position={[0.15, 0.12, -0.08]}>
          <icosahedronGeometry args={[0.2, 1]} />
        </mesh>
        <mesh material={mat.leaf} position={[-0.12, 0.2, 0.1]}>
          <icosahedronGeometry args={[0.17, 1]} />
        </mesh>
      </group>
      <BlobShadow size={[0.75, 0.75]} opacity={0.24} />
    </group>
  );
}

// Mimari maket figürü: bacaklar, gövde, kollar ve baş tek geometride birleşir.
const figureCache = new Map<number, THREE.BufferGeometry>();
function figureGeometry(height: number) {
  const key = Math.round(height * 100);
  const hit = figureCache.get(key);
  if (hit) return hit;
  const parts: THREE.BufferGeometry[] = [];
  const add = (
    g: THREE.BufferGeometry,
    x: number,
    y: number,
    z = 0,
    rz = 0,
    sz = 1
  ) => {
    g.scale(1, 1, sz);
    g.rotateZ(rz);
    g.translate(x, y, z);
    parts.push(g);
  };
  add(new THREE.CapsuleGeometry(0.058, 0.7, 4, 10), 0.075, 0.42);
  add(new THREE.CapsuleGeometry(0.058, 0.7, 4, 10), -0.075, 0.42);
  add(new THREE.CapsuleGeometry(0.15, 0.4, 6, 16), 0, 1.13, 0, 0, 0.62);
  add(new THREE.CapsuleGeometry(0.038, 0.5, 4, 8), 0.205, 1.1, 0, 0.07);
  add(new THREE.CapsuleGeometry(0.038, 0.5, 4, 8), -0.205, 1.1, 0, -0.07);
  add(new THREE.SphereGeometry(0.098, 18, 14), 0, 1.6);
  const merged = mergeGeometries(parts)!;
  merged.scale(height / 1.72, height / 1.72, height / 1.72);
  parts.forEach((p) => p.dispose());
  figureCache.set(key, merged);
  return merged;
}

/** Ölçeği anlatan mimari maket figürü; malzemesi kendine aittir (saydamlık animasyonu için). */
export function Figure({
  position,
  height = 1.72,
  color = "#EEECE7",
  rotation = 0,
}: {
  position: V3;
  height?: number;
  color?: string;
  rotation?: number;
}) {
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color, roughness: 0.82 }),
    [color]
  );
  const geometry = useMemo(() => figureGeometry(height), [height]);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh geometry={geometry} material={material} />
      <BlobShadow size={[0.55, 0.42]} opacity={0.26} own />
    </group>
  );
}

/** Tavandan asılı ışıklı çerçeve: stantın taç öğesi. */
export function HangingFrame({
  position,
  width,
  depth,
  height = 0.3,
}: {
  position: V3;
  width: number;
  depth: number;
  height?: number;
}) {
  const t = 0.028;
  const spots: V3[] = [
    [-width / 2 + 0.35, -height / 2 - 0.05, -depth / 2 + 0.06],
    [0, -height / 2 - 0.05, -depth / 2 + 0.06],
    [width / 2 - 0.35, -height / 2 - 0.05, -depth / 2 + 0.06],
    [-width / 2 + 0.35, -height / 2 - 0.05, depth / 2 - 0.06],
    [0, -height / 2 - 0.05, depth / 2 - 0.06],
    [width / 2 - 0.35, -height / 2 - 0.05, depth / 2 - 0.06],
  ];
  return (
    <group position={position}>
      <Slab
        size={[width, height, t]}
        position={[0, 0, depth / 2]}
        material={mat.white}
      />
      <Slab
        size={[width, height, t]}
        position={[0, 0, -depth / 2]}
        material={mat.white}
      />
      <Slab
        size={[t, height, depth]}
        position={[width / 2, 0, 0]}
        material={mat.white}
      />
      <Slab
        size={[t, height, depth]}
        position={[-width / 2, 0, 0]}
        material={mat.white}
      />
      <Slab
        size={[width + 0.004, 0.03, t + 0.004]}
        position={[0, -height / 2 + 0.015, depth / 2]}
        material={mat.red}
      />
      {[
        {
          size: [width - 0.08, 0.012, 0.03] as V3,
          pos: [0, -height / 2 + 0.006, depth / 2 - 0.035] as V3,
        },
        {
          size: [width - 0.08, 0.012, 0.03] as V3,
          pos: [0, -height / 2 + 0.006, -depth / 2 + 0.035] as V3,
        },
        {
          size: [0.03, 0.012, depth - 0.08] as V3,
          pos: [width / 2 - 0.035, -height / 2 + 0.006, 0] as V3,
        },
        {
          size: [0.03, 0.012, depth - 0.08] as V3,
          pos: [-width / 2 + 0.035, -height / 2 + 0.006, 0] as V3,
        },
      ].map(({ size, pos }) => (
        <Slab
          key={pos.join()}
          size={size}
          position={pos}
          material={mat.light}
        />
      ))}
      {[
        [-width / 2 + 0.1, depth / 2 - 0.1],
        [width / 2 - 0.1, depth / 2 - 0.1],
        [-width / 2 + 0.1, -depth / 2 + 0.1],
        [width / 2 - 0.1, -depth / 2 + 0.1],
      ].map(([x, z]) => (
        <Cylinder
          key={`${x}${z}`}
          radius={0.005}
          height={1.6}
          position={[x, height / 2 + 0.8, z]}
          material={mat.metal}
          segments={6}
        />
      ))}
      {spots.map((p) => (
        <group key={p.join()} position={p}>
          <Cylinder
            radius={0.04}
            height={0.1}
            material={mat.darker}
            segments={14}
          />
          <Cylinder
            radius={0.03}
            height={0.008}
            position={[0, -0.054, 0]}
            material={mat.light}
            segments={14}
          />
        </group>
      ))}
    </group>
  );
}

/** Temsili konaklama modülü: mimari blok, pencere bantları, giriş saçağı. */
export function HotelModule({ position }: { position: V3 }) {
  return (
    <group position={position}>
      <Panel
        size={[1.6, 1.62, 1.2]}
        position={[0, 0.81, 0]}
        material={mat.white}
        radius={0.025}
      />
      {[0.46, 0.86, 1.26].map((y) => (
        <Slab
          key={y}
          size={[1.5, 0.16, 1.21]}
          position={[0, y, 0]}
          material={mat.darker}
        />
      ))}
      {[-0.45, -0.15, 0.15, 0.45].map((x) => (
        <Slab
          key={x}
          size={[0.025, 1.0, 1.215]}
          position={[x, 0.86, 0]}
          material={mat.white}
        />
      ))}
      <Slab
        size={[1.66, 0.05, 1.26]}
        position={[0, 1.645, 0]}
        material={mat.whiteSoft}
      />
      <Slab
        size={[0.6, 0.04, 0.32]}
        position={[0, 0.32, 0.74]}
        material={mat.whiteSoft}
      />
      <Slab
        size={[0.34, 0.26, 0.02]}
        position={[0, 0.13, 0.605]}
        material={mat.glass}
      />
      <Plant position={[0.62, 0, 0.82]} scale={0.7} />
      <BlobShadow size={[2.2, 1.8]} opacity={0.28} />
    </group>
  );
}

/** Temsili insan taşıma aracı (yük aracı değil). */
export function Van({
  position,
  rotation = 0,
}: {
  position: V3;
  rotation?: number;
}) {
  const wheels: V3[] = [
    [0.42, 0.13, 0.31],
    [-0.42, 0.13, 0.31],
    [0.42, 0.13, -0.31],
    [-0.42, 0.13, -0.31],
  ];
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Panel
        size={[1.34, 0.56, 0.64]}
        position={[0, 0.43, 0]}
        material={mat.white}
        radius={0.12}
      />
      <Panel
        size={[1.08, 0.18, 0.655]}
        position={[-0.05, 0.58, 0]}
        material={mat.darker}
        radius={0.05}
      />
      <Panel
        size={[0.06, 0.18, 0.56]}
        position={[0.63, 0.58, 0]}
        material={mat.darker}
        radius={0.02}
      />
      <Slab
        size={[1.0, 0.025, 0.648]}
        position={[-0.08, 0.34, 0]}
        material={mat.red}
      />
      {wheels.map((p) => (
        <Cylinder
          key={p.join()}
          radius={0.12}
          height={0.09}
          position={p}
          rotation={[Math.PI / 2, 0, 0]}
          material={mat.darker}
          segments={20}
        />
      ))}
      <BlobShadow size={[1.8, 1.0]} opacity={0.32} />
    </group>
  );
}

export function CateringStation({
  position,
  rotation = 0,
}: {
  position: V3;
  rotation?: number;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Panel
        size={[1.1, 0.9, 0.5]}
        position={[0, 0.45, 0]}
        material={mat.white}
      />
      <Slab
        size={[1.1, 0.7, 0.01]}
        position={[0, 0.48, 0.255]}
        material={mat.wood}
      />
      <Slab
        size={[1.16, 0.035, 0.54]}
        position={[0, 0.918, 0]}
        material={mat.darker}
      />
      <Panel
        size={[0.26, 0.34, 0.26]}
        position={[-0.3, 1.11, -0.04]}
        material={mat.darker}
      />
      <Slab
        size={[0.16, 0.05, 0.01]}
        position={[-0.3, 1.18, 0.092]}
        material={mat.light}
      />
      <Cylinder
        radius={0.15}
        height={0.012}
        position={[0.24, 0.942, 0]}
        material={mat.metal}
      />
      {[0.16, 0.25, 0.33].map((x, k) => (
        <Cylinder
          key={x}
          radius={0.032}
          radiusBottom={0.026}
          height={0.075}
          position={[x, 0.985, k === 1 ? 0.06 : -0.04]}
          material={mat.white}
          segments={14}
        />
      ))}
      <BlobShadow size={[1.4, 0.9]} opacity={0.28} />
    </group>
  );
}

export function RollUp({
  position,
  rotation = 0,
}: {
  position: V3;
  rotation?: number;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Panel
        size={[0.86, 0.06, 0.22]}
        position={[0, 0.03, 0]}
        material={mat.darker}
      />
      <Slab
        size={[0.8, 2.0, 0.02]}
        position={[0, 1.06, 0]}
        material={mat.lightbox}
      />
      <Slab
        size={[0.82, 0.03, 0.03]}
        position={[0, 2.07, 0]}
        material={mat.darker}
      />
      <BlobShadow size={[1.1, 0.5]} opacity={0.26} />
    </group>
  );
}

export function GiftBoxes({ position }: { position: V3 }) {
  return (
    <group position={position}>
      <Panel
        size={[0.34, 0.3, 0.34]}
        position={[0, 0.15, 0]}
        material={mat.white}
      />
      <Panel
        size={[0.34, 0.3, 0.34]}
        position={[0.38, 0.15, 0.04]}
        material={mat.darker}
      />
      <Panel
        size={[0.26, 0.24, 0.26]}
        position={[0.18, 0.42, 0.02]}
        material={mat.red}
      />
      <Slab
        size={[0.345, 0.02, 0.06]}
        position={[0, 0.2, 0]}
        material={mat.red}
      />
      <BlobShadow size={[0.95, 0.6]} opacity={0.24} />
    </group>
  );
}

/** Değerlendirme notlarını temsil eden sayfa; okunabilir sahte metin içermez. */
export function ReportSheet({
  position,
  rotation = 0,
}: {
  position: V3;
  rotation?: number;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Slab
        size={[0.92, 0.04, 0.24]}
        position={[0, 0.02, 0]}
        material={mat.darker}
      />
      <group rotation={[-0.2, 0, 0]} position={[0, 0.04, 0]}>
        <Panel
          size={[0.9, 1.22, 0.025]}
          position={[0, 0.65, 0]}
          material={mat.white}
          radius={0.01}
        />
        <Slab
          size={[0.6, 0.045, 0.005]}
          position={[0.05, 1.12, 0.015]}
          material={mat.dark}
        />
        <Slab
          size={[0.08, 0.008, 0.005]}
          position={[-0.33, 1.02, 0.015]}
          material={mat.red}
        />
        {[0.9, 0.8, 0.7, 0.6, 0.5].map((y, k) => (
          <Slab
            key={y}
            size={[k === 4 ? 0.4 : 0.66, 0.018, 0.005]}
            position={[k === 4 ? -0.08 : 0, y, 0.015]}
            material={mat.metal}
          />
        ))}
        <Slab
          size={[0.3, 0.18, 0.005]}
          position={[-0.15, 0.3, 0.015]}
          material={mat.whiteSoft}
        />
        <Slab
          size={[0.24, 0.18, 0.005]}
          position={[0.2, 0.3, 0.015]}
          material={mat.dark}
        />
      </group>
      <BlobShadow size={[1.2, 0.6]} opacity={0.26} />
    </group>
  );
}

/** Rapor sayfasındaki işaret noktasının dünya koordinatı (ReportSheet ile aynı dönüşüm). */
export function reportMarkerPoint(sheet: V3, rotationY = 0): THREE.Vector3 {
  const local = new THREE.Vector3(-0.33, 1.12, 0.05);
  local.applyEuler(new THREE.Euler(-0.2, 0, 0));
  local.y += 0.04;
  local.applyEuler(new THREE.Euler(0, rotationY, 0));
  return local.add(new THREE.Vector3(...sheet));
}
