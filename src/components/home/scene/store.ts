import type { HighlightKey } from "../content";

// Sahne ile HTML katmanı arasındaki paylaşılan, render tetiklemeyen durum.
// Sürekli değişen değerler (kaydırma) React state'e yazılmaz.
export const sceneStore = {
  /** Kaydırmadan gelen hedef ilerleme (0–1). */
  target: 0,
  /** Sahnede yumuşatılmış ilerleme (0–1). */
  progress: 0,
  highlight: null as HighlightKey | null,
  invalidate: (() => {}) as () => void,
};

export function setSceneTarget(value: number) {
  sceneStore.target = value;
  sceneStore.invalidate();
}

export function setHighlight(key: HighlightKey | null) {
  sceneStore.highlight = key;
  sceneStore.invalidate();
}
