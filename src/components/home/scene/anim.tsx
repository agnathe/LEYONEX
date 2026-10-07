"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import * as THREE from "three";
import type { TrackName } from "./director";

/**
 * rise   – zeminden yükselir (y ölçeği), panel ve duvarlar için
 * pop    – yerinde büyür, küçük nesneler için
 * settle – birkaç on santim yukarıdan yerine oturur
 * fade   – saydamlıkla belirir, figürler için
 */
export type AnimMode = "rise" | "pop" | "settle" | "fade";

export interface AnimItem {
  group: THREE.Group;
  track: TrackName;
  index: number;
  count: number;
  spread: number;
  mode: AnimMode;
  baseY: number;
  materials: THREE.Material[];
}

type Register = (item: AnimItem) => () => void;

const AnimContext = createContext<Register>(() => () => {});

export const AnimProvider = AnimContext.Provider;

interface AnimProps {
  track: TrackName;
  i?: number;
  n?: number;
  spread?: number;
  mode?: AnimMode;
  position?: [number, number, number];
  rotation?: [number, number, number];
  children: ReactNode;
}

export function Anim({
  track,
  i = 0,
  n = 1,
  spread = 0.5,
  mode = "rise",
  position,
  rotation,
  children,
}: AnimProps) {
  const ref = useRef<THREE.Group>(null);
  const register = useContext(AnimContext);

  useLayoutEffect(() => {
    const group = ref.current;
    if (!group) return;
    const materials: THREE.Material[] = [];
    if (mode === "fade") {
      group.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.isMesh && !Array.isArray(mesh.material))
          materials.push(mesh.material);
      });
    }
    return register({
      group,
      track,
      index: i,
      count: n,
      spread,
      mode,
      baseY: group.position.y,
      materials,
    });
  }, [register, track, i, n, spread, mode]);

  return (
    <group ref={ref} position={position} rotation={rotation}>
      {children}
    </group>
  );
}
