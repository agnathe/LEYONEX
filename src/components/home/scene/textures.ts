import * as THREE from "three";

// Prosedürel dokular: harici görsel dosyası gerektirmez, ilk kullanımda bir kez üretilir.
// Hepsi soyut yüzeylerdir; okunabilir sahte metin içermez.

function canvasTexture(
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  options: { repeat?: [number, number]; color?: boolean } = {}
) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  if (options.color !== false) texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  if (options.repeat) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(...options.repeat);
  }
  return texture;
}

/** Tekrarlanabilir rastgele sayı üreteci (her yüklemede aynı doku). */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function noise(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  amount: number,
  alpha: number,
  seed: number
) {
  const rand = rng(seed);
  for (let i = 0; i < amount; i++) {
    const v = rand() > 0.5 ? 255 : 0;
    ctx.fillStyle = `rgba(${v},${v},${v},${alpha * rand()})`;
    ctx.fillRect(rand() * w, rand() * h, 1.5, 1.5);
  }
}

const cache = new Map<string, THREE.Texture>();
function cached(key: string, make: () => THREE.Texture) {
  let t = cache.get(key);
  if (!t) {
    t = make();
    cache.set(key, t);
  }
  return t;
}

/** Nesnelerin altına yerleşen yumuşak temas gölgesi. */
export const blobShadowTexture = () =>
  cached("blob", () =>
    canvasTexture(
      128,
      128,
      (ctx, w, h) => {
        const g = ctx.createRadialGradient(
          w / 2,
          h / 2,
          0,
          w / 2,
          h / 2,
          w / 2
        );
        g.addColorStop(0, "rgba(0,0,0,1)");
        g.addColorStop(0.45, "rgba(0,0,0,0.55)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      },
      { color: false }
    )
  );

/** Fuar salonu zemini: 1 m'lik ince karo çizgileri. */
export const hallFloorTexture = () =>
  cached("hall", () =>
    canvasTexture(
      256,
      256,
      (ctx, w, h) => {
        ctx.fillStyle = "#ECEAE5";
        ctx.fillRect(0, 0, w, h);
        noise(ctx, w, h, 1600, 0.03, 7);
        ctx.strokeStyle = "rgba(70,65,60,0.1)";
        ctx.lineWidth = 2;
        ctx.strokeRect(1, 1, w - 2, h - 2);
      },
      { repeat: [13, 10] }
    )
  );

/** Stant halısı: sıcak açık gri, ince dokulu. */
export const carpetTexture = () =>
  cached("carpet", () =>
    canvasTexture(
      256,
      256,
      (ctx, w, h) => {
        ctx.fillStyle = "#F3F1EC";
        ctx.fillRect(0, 0, w, h);
        noise(ctx, w, h, 5000, 0.035, 11);
      },
      { repeat: [3, 2] }
    )
  );

/** Huş/meşe ahşap: yumuşak damar çizgileri. */
export const woodTexture = (repeatX = 1, repeatY = 1) =>
  cached(`wood-${repeatX}-${repeatY}`, () =>
    canvasTexture(
      256,
      256,
      (ctx, w, h) => {
        ctx.fillStyle = "#D6BF9C";
        ctx.fillRect(0, 0, w, h);
        const rand = rng(23);
        for (let i = 0; i < 70; i++) {
          const y = rand() * h;
          ctx.strokeStyle = `rgba(${120 + rand() * 40},${85 + rand() * 30},${50 + rand() * 20},${0.08 + rand() * 0.12})`;
          ctx.lineWidth = 0.6 + rand() * 1.6;
          ctx.beginPath();
          ctx.moveTo(0, y);
          for (let x = 0; x <= w; x += 16)
            ctx.lineTo(x, y + Math.sin(x * 0.03 + i) * 2.2);
          ctx.stroke();
        }
      },
      { repeat: [repeatX, repeatY] }
    )
  );

/** Ekran: koyu zemin üzerinde soyut arayüz blokları ve ince kırmızı vurgu. */
export const screenTexture = () =>
  cached("screen", () =>
    canvasTexture(512, 288, (ctx, w, h) => {
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#1C2026");
      g.addColorStop(1, "#0E1013");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      const glow = ctx.createRadialGradient(
        w * 0.72,
        h * 0.3,
        0,
        w * 0.72,
        h * 0.3,
        w * 0.55
      );
      glow.addColorStop(0, "rgba(190,205,220,0.28)");
      glow.addColorStop(1, "rgba(190,205,220,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(240,240,240,0.85)";
      ctx.fillRect(w * 0.08, h * 0.16, w * 0.34, h * 0.07);
      ctx.fillStyle = "rgba(240,240,240,0.35)";
      for (let i = 0; i < 3; i++)
        ctx.fillRect(
          w * 0.08,
          h * (0.32 + i * 0.09),
          w * (0.3 - i * 0.05),
          h * 0.035
        );
      ctx.fillStyle = "#E31B23";
      ctx.fillRect(w * 0.08, h * 0.66, w * 0.12, h * 0.025);
      ctx.strokeStyle = "rgba(240,240,240,0.4)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++)
        ctx.strokeRect(w * (0.52 + i * 0.145), h * 0.56, w * 0.12, h * 0.26);
    })
  );

/** Işıklı pano: soyut mimari fotoğraf hissi veren yumuşak geçişler ve kırmızı hat. */
export const lightboxTexture = () =>
  cached("lightbox", () =>
    canvasTexture(256, 640, (ctx, w, h) => {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#F4F2EE");
      g.addColorStop(0.55, "#C9C6C0");
      g.addColorStop(1, "#5C5A57");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(30,30,30,0.18)";
      ctx.beginPath();
      ctx.moveTo(0, h * 0.62);
      ctx.lineTo(w, h * 0.38);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fillRect(w * 0.12, h * 0.1, w * 0.5, h * 0.02);
      ctx.fillRect(w * 0.12, h * 0.135, w * 0.32, h * 0.012);
      ctx.fillStyle = "#E31B23";
      ctx.fillRect(w * 0.12, h * 0.86, w * 0.76, h * 0.012);
    })
  );

/** Arka duvar grafiği: kömür grisi zemin, ince yatay çizgiler ve kenar ışığı. */
export const wallGraphicTexture = () =>
  cached("wallGraphic", () =>
    canvasTexture(512, 280, (ctx, w, h) => {
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, "#26282B");
      g.addColorStop(0.5, "#2F3236");
      g.addColorStop(1, "#202225");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;
      for (let y = 10; y < h; y += 14) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.fillRect(w * 0.06, h * 0.78, w * 0.22, h * 0.035);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillRect(w * 0.06, h * 0.85, w * 0.14, h * 0.02);
    })
  );
