"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { clamp01, easeOut, evaluate } from "./director";
import Maquette from "./Maquette";
import { sceneStore } from "./store";

export interface ExhibitionSceneProps {
  quality: "full" | "light";
  onReady?: () => void;
  onDecline?: () => void;
  onFail?: () => void;
}

const tmpPos = new THREE.Vector3();
const tmpTarget = new THREE.Vector3();
const tmpOffset = new THREE.Vector3();

// Tasarım sistemi gereği paralaks yok: kamera yalnızca kaydırma ilerlemesini izler.
function Director({
  onReady,
  onDecline,
}: Pick<ExhibitionSceneProps, "onReady" | "onDecline">) {
  const size = useThree((s) => s.size);
  const invalidate = useThree((s) => s.invalidate);
  const introStart = useRef<number | null>(null);
  const ready = useRef(false);
  const perf = useRef({ sum: 0, frames: 0, declined: false });

  useEffect(() => {
    sceneStore.invalidate = invalidate;
    invalidate();
    return () => {
      sceneStore.invalidate = () => {};
    };
  }, [invalidate]);

  useEffect(() => {
    invalidate();
  }, [size.width, size.height, invalidate]);

  useFrame((state, delta) => {
    const s = sceneStore;
    const dt = Math.min(delta, 0.1);
    const k = 1 - Math.exp(-dt * 5);
    s.progress += (s.target - s.progress) * k;
    if (Math.abs(s.target - s.progress) < 0.0004) s.progress = s.target;

    if (introStart.current === null)
      introStart.current = state.clock.elapsedTime;
    const intro = easeOut(
      clamp01((state.clock.elapsedTime - introStart.current) / 0.9)
    );

    const frame = evaluate(s.progress);
    tmpTarget.set(...frame.cameraTarget);
    tmpPos.set(...frame.cameraPosition);
    tmpOffset.subVectors(tmpPos, tmpTarget);

    // Alanın en-boy oranına göre mesafe; dar alanda maket taşmaz.
    const aspect = size.width / Math.max(1, size.height);
    const fit = Math.min(1.9, Math.max(0.85, Math.pow(1.15 / aspect, 0.85)));
    tmpOffset.multiplyScalar(fit * (1 + 0.07 * (1 - intro)));

    state.camera.position.copy(tmpTarget).add(tmpOffset);
    state.camera.lookAt(tmpTarget);

    const moving = s.progress !== s.target || intro < 1;
    if (moving) state.invalidate();

    // Yalnızca kesintisiz hareket sırasında kare süresi ölçülür; boşta bekleme yavaşlık sayılmaz.
    const p = perf.current;
    if (moving && delta < 0.1 && !p.declined) {
      p.sum += delta;
      p.frames += 1;
      if (p.frames >= 90) {
        if (p.sum / p.frames > 1 / 28) {
          p.declined = true;
          onDecline?.();
        }
        p.sum = 0;
        p.frames = 0;
      }
    }

    if (!ready.current) {
      ready.current = true;
      requestAnimationFrame(() => onReady?.());
    }
  }, -1);

  return null;
}

export default function ExhibitionScene({
  quality,
  onReady,
  onDecline,
  onFail,
}: ExhibitionSceneProps) {
  return (
    <Canvas
      frameloop="demand"
      dpr={quality === "full" ? [1, 1.75] : [1, 1.5]}
      shadows={quality === "full" ? "soft" : false}
      camera={{ fov: 30, near: 0.5, far: 120, position: [10.5, 8.6, 13.2] }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.NeutralToneMapping;
        gl.toneMappingExposure = 1.0;
        gl.domElement.addEventListener("webglcontextlost", (event) => {
          event.preventDefault();
          onFail?.();
        });
      }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <Director onReady={onReady} onDecline={onDecline} />
      <Maquette quality={quality} />
      {/* Yumuşak stüdyo ortam ışığı: bir kez hesaplanır, mobilde de kullanılır. */}
      <Environment
        resolution={quality === "full" ? 256 : 64}
        frames={1}
        environmentIntensity={0.75}
      >
        <Lightformer
          form="rect"
          intensity={1.6}
          position={[0, 6, 6]}
          scale={[12, 4, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.8}
          position={[-8, 3, -2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[8, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.5}
          color="#F3E8DC"
          position={[8, 2, -4]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[6, 2, 1]}
        />
      </Environment>
      <ContactShadows
        position={[0, -0.73, 0]}
        scale={24}
        far={2.5}
        blur={2.6}
        opacity={0.42}
        resolution={512}
        frames={1}
      />
    </Canvas>
  );
}
