"use client";

import { useEffect, useState } from "react";

// QualityController: cihaz, hareket tercihi ve hata durumlarına göre görünüm seviyesi.
export type Quality = "full" | "light" | "static";

const STORAGE_KEY = "leyonex-sade-gorunum";

function webglAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

const overrides: Record<string, Quality> = {
  tam: "full",
  hafif: "light",
  sade: "static",
};

/** URL ile kalite seçildiyse otomatik düşürme yapılmaz. */
export function qualityForced() {
  return Boolean(
    overrides[new URLSearchParams(window.location.search).get("kalite") ?? ""]
  );
}

export function detectQuality(): Quality {
  // Test ve poster üretimi için: ?kalite=tam | hafif | sade
  const forced =
    overrides[new URLSearchParams(window.location.search).get("kalite") ?? ""];
  if (forced) return forced;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return "static";
  try {
    if (localStorage.getItem(STORAGE_KEY) === "1") return "static";
  } catch {
    // depolama erişilemiyorsa varsayılanla devam
  }
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  if (nav.connection?.saveData) return "static";
  if (!webglAvailable()) return "static";
  const lowMemory =
    typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
  const fewCores =
    typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (lowMemory || fewCores || coarse) return "light";
  return "full";
}

export function simpleViewStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function storeSimpleView(enabled: boolean) {
  try {
    if (enabled) localStorage.setItem(STORAGE_KEY, "1");
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // tercih yalnızca bu oturumda geçerli olur
  }
}

/** null: henüz ölçülmedi (sunucu ve ilk istemci render'ı). */
export function useQuality() {
  const [quality, setQuality] = useState<Quality | null>(null);

  useEffect(() => {
    setQuality(detectQuality());
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setQuality(detectQuality());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return [quality, setQuality] as const;
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean | null>(null);
  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);
  return matches;
}
