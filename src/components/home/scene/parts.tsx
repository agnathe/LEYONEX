"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";
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

/** Keskin kenarlı ince parça (bant, çizgi, çerçeve). */
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
  height,
  position,
  rotation,
  material,
  segments = 28,
}: {
  radius: number;
  height: number;
  position?: V3;
  rotation?: V3;
  material: THREE.Material;
  segments?: number;
}) {
  return (
    <mesh position={position} rotation={rotation} material={material}>
      <cylinderGeometry args={[radius, radius, height, segments]} />
    </mesh>
  );
}

export function Chair({
  position,
  rotation = 0,
}: {
  position: V3;
  rotation?: number;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Cylinder
        radius={0.2}
        height={0.02}
        position={[0, 0.01, 0]}
        material={mat.metal}
      />
      <Cylinder
        radius={0.028}
        height={0.43}
        position={[0, 0.235, 0]}
        material={mat.metal}
        segments={12}
      />
      <Panel
        size={[0.44, 0.06, 0.42]}
        position={[0, 0.47, 0]}
        material={mat.dark}
        radius={0.025}
      />
      <Panel
        size={[0.44, 0.4, 0.05]}
        position={[0, 0.7, -0.19]}
        material={mat.dark}
        radius={0.02}
      />
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
        radius={0.26}
        height={0.02}
        position={[0, 0.01, 0]}
        material={mat.metal}
      />
      <Cylinder
        radius={0.045}
        height={height - 0.02}
        position={[0, height / 2, 0]}
        material={mat.metal}
        segments={12}
      />
      <Cylinder
        radius={radius}
        height={0.04}
        position={[0, height, 0]}
        material={mat.wood}
        segments={40}
      />
    </group>
  );
}

export function Stool({ position }: { position: V3 }) {
  return (
    <group position={position}>
      <Cylinder
        radius={0.17}
        height={0.02}
        position={[0, 0.01, 0]}
        material={mat.metal}
      />
      <Cylinder
        radius={0.025}
        height={0.7}
        position={[0, 0.36, 0]}
        material={mat.metal}
        segments={12}
      />
      <Cylinder
        radius={0.18}
        height={0.05}
        position={[0, 0.73, 0]}
        material={mat.dark}
      />
    </group>
  );
}

/** Ölçeği anlatan sade insan figürü; malzemesi kendine aittir (saydamlık animasyonu için). */
export function Figure({
  position,
  height = 1.72,
  color = "#767676",
  rotation = 0,
}: {
  position: V3;
  height?: number;
  color?: string;
  rotation?: number;
}) {
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color, roughness: 0.75 }),
    [color]
  );
  const bodyRadius = 0.16;
  const headRadius = 0.105;
  const bodyLength = height - bodyRadius * 2 - headRadius * 2 - 0.03;
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh
        position={[0, bodyRadius + bodyLength / 2, 0]}
        material={material}
        scale={[1, 1, 0.72]}
      >
        <capsuleGeometry args={[bodyRadius, bodyLength, 4, 14]} />
      </mesh>
      <mesh
        position={[0, bodyRadius * 2 + bodyLength + 0.03 + headRadius, 0]}
        material={material}
      >
        <sphereGeometry args={[headRadius, 18, 14]} />
      </mesh>
    </group>
  );
}

/** Temsili konaklama modülü. */
export function HotelModule({ position }: { position: V3 }) {
  return (
    <group position={position}>
      <Panel
        size={[1.6, 1.62, 1.2]}
        position={[0, 0.81, 0]}
        material={mat.white}
        radius={0.03}
      />
      {[0.38, 0.86, 1.34].map((y) => (
        <Slab
          key={y}
          size={[1.62, 0.13, 1.22]}
          position={[0, y, 0]}
          material={mat.dark}
        />
      ))}
      <Slab
        size={[1.7, 0.05, 1.3]}
        position={[0, 1.645, 0]}
        material={mat.metal}
      />
      <Slab
        size={[0.5, 0.05, 0.3]}
        position={[0, 0.3, 0.72]}
        material={mat.metal}
      />
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
        size={[1.34, 0.6, 0.64]}
        position={[0, 0.45, 0]}
        material={mat.white}
        radius={0.12}
      />
      <Panel
        size={[1.04, 0.2, 0.66]}
        position={[-0.06, 0.6, 0]}
        material={mat.darker}
        radius={0.05}
      />
      <Panel
        size={[0.08, 0.2, 0.56]}
        position={[0.62, 0.6, 0]}
        material={mat.darker}
        radius={0.03}
      />
      {wheels.map((p) => (
        <Cylinder
          key={p.join()}
          radius={0.13}
          height={0.1}
          position={p}
          rotation={[Math.PI / 2, 0, 0]}
          material={mat.darker}
        />
      ))}
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
        size={[1.1, 0.92, 0.5]}
        position={[0, 0.46, 0]}
        material={mat.white}
      />
      <Slab
        size={[1.14, 0.04, 0.54]}
        position={[0, 0.94, 0]}
        material={mat.dark}
      />
      <Panel
        size={[0.28, 0.32, 0.26]}
        position={[-0.3, 1.12, -0.04]}
        material={mat.darker}
      />
      <Cylinder
        radius={0.16}
        height={0.015}
        position={[0.26, 0.968, 0]}
        material={mat.metal}
      />
      {[0.18, 0.28, 0.36].map((x, k) => (
        <Cylinder
          key={x}
          radius={0.035}
          height={0.08}
          position={[x, 1.015, k === 1 ? 0.06 : -0.04]}
          material={mat.white}
          segments={14}
        />
      ))}
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
        material={mat.dark}
      />
      <Slab
        size={[0.8, 2.0, 0.025]}
        position={[0, 1.06, 0]}
        material={mat.white}
      />
      <Slab
        size={[0.8, 0.86, 0.028]}
        position={[0, 0.5, 0]}
        material={mat.dark}
      />
      <Slab
        size={[0.8, 0.07, 0.03]}
        position={[0, 1.02, 0]}
        material={mat.red}
      />
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
        material={mat.white}
      />
      <Panel
        size={[0.28, 0.26, 0.28]}
        position={[0.18, 0.43, 0.02]}
        material={mat.red}
      />
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
        material={mat.dark}
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
        {[0.86, 0.74, 0.62, 0.5].map((y, k) => (
          <Slab
            key={y}
            size={[k === 3 ? 0.4 : 0.66, 0.022, 0.005]}
            position={[k === 3 ? -0.08 : 0, y, 0.015]}
            material={mat.metal}
          />
        ))}
      </group>
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
