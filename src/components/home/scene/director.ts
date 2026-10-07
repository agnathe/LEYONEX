// SceneDirector: kaydırma ilerlemesini kamera ve maket durumlarına dönüştürür.
// Sahne indeksleri: 0 genel bakış, 1 hedef, 2 tasarım, 3 hizmetler, 4 saha, 5 değerlendirme.
// Bütün değerler ilerlemenin saf fonksiyonudur; geri kaydırma aynı duruma döner.

export const STAGE_COUNT = 6;

type Vec3 = [number, number, number];

export const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Sahneler arasında, her sahnenin ortasında duraklayan yumuşak geçiş. */
function stageMix(u: number) {
  const i = Math.min(STAGE_COUNT - 2, Math.max(0, Math.floor(u)));
  const t = smoothstep(0.22, 0.78, u - i);
  return { i, t };
}

function stageValue(values: number[], u: number) {
  const { i, t } = stageMix(u);
  return values[i] + (values[i + 1] - values[i]) * t;
}

function stageVec(values: Vec3[], u: number): Vec3 {
  const { i, t } = stageMix(u);
  const a = values[i];
  const b = values[i + 1];
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

// Kamera durakları (metre ölçeğinde maket; stant 6 × 4 m).
const cameraTargets: Vec3[] = [
  [0, 0.4, 0],
  [0, 0, 0.3],
  [-0.2, 0.9, 0],
  [0, 0, 0.2],
  [-0.2, 1.0, 0],
  [2.4, 0.6, -0.8],
];

// [yön veren kamera noktası, mesafe çarpanı]
const cameraRigs: [Vec3, number][] = [
  [[10.5, 8.6, 13.2], 1.56], // genel bakış
  [[0.6, 17.5, 3.4], 1.12], // plan, üst görünüş
  [[-8.2, 6.4, 10.6], 1.3], // panellerin yükselişi
  [[8.4, 12.6, 12.8], 1.55], // hizmetler yerlerine bağlanır
  [[5.6, 2.7, 9.8], 1.38], // ziyaretçi seviyesine yaklaşım
  [[9.6, 7.4, 9.8], 1.28], // değerlendirme
];

const cameraPositions: Vec3[] = cameraRigs.map(([p, k], i) => {
  const t = cameraTargets[i];
  return [
    t[0] + (p[0] - t[0]) * k,
    t[1] + (p[1] - t[1]) * k,
    t[2] + (p[2] - t[2]) * k,
  ];
});

const tracks = {
  walls: [1, 0.03, 1, 1, 1, 1],
  furniture: [1, 0, 1, 1, 1, 1],
  plan: [0.3, 1, 0.55, 0.15, 0, 0.12],
  goals: [0, 1, 0, 0, 0, 0],
  services: [1, 0, 0, 1, 1, 0.65],
  links: [0.55, 0, 0, 1, 0.3, 0],
  people: [0.6, 0, 0, 0.25, 1, 0.4],
  lights: [0.75, 0.12, 0.35, 0.5, 1, 0.5],
  ambient: [1, 1.08, 1, 1, 0.72, 1],
  markers: [0, 0, 0, 0, 0.75, 1],
  markerTravel: [0, 0, 0, 0, 0, 1],
  report: [0, 0, 0, 0, 0, 1],
  neighbors: [1, 0.35, 0.6, 1, 1, 0.7],
};

export type TrackName = keyof typeof tracks;

export interface SceneFrame {
  u: number;
  cameraPosition: Vec3;
  cameraTarget: Vec3;
  route: number;
  values: Record<TrackName, number>;
}

/** progress: 0–1 → sahnenin o anki tüm parametreleri. */
export function evaluate(progress: number): SceneFrame {
  const u = clamp01(progress) * (STAGE_COUNT - 1);
  const values = {} as Record<TrackName, number>;
  for (const key of Object.keys(tracks) as TrackName[]) {
    values[key] = stageValue(tracks[key], u);
  }
  // Kırmızı rota: genel bakıştan plana geçerken geri sarılır ve plan üzerinde yeniden çizilir.
  const route = clamp01(
    1 - smoothstep(0.24, 0.36, u) + smoothstep(0.42, 0.86, u)
  );
  return {
    u,
    cameraPosition: stageVec(cameraPositions, u),
    cameraTarget: stageVec(cameraTargets, u),
    route,
    values,
  };
}

/** Bir dizi parçanın art arda ortaya çıkması için yerel ilerleme. */
export function sequence(
  value: number,
  index: number,
  count: number,
  spread = 0.5
) {
  if (count <= 1) return clamp01(value);
  const start = (index / (count - 1)) * (1 - spread);
  return clamp01((value - start) / spread);
}

export const stageProgress = (stage: number) => stage / (STAGE_COUNT - 1);
