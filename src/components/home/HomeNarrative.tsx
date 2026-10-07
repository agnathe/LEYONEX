"use client";

import {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  coordinatedServices,
  designFocus,
  evaluationNotes,
  fieldStatus,
  goalSteps,
  hero,
  phaseLinks,
  stages,
  type HighlightKey,
} from "./content";
import {
  detectQuality,
  qualityForced,
  simpleViewStored,
  storeSimpleView,
  useMediaQuery,
  useQuality,
  type Quality,
} from "./scene/quality";
import { setHighlight, setSceneTarget } from "./scene/store";
import { Kicker, buttonClass } from "./SectionHeading";

const ExhibitionScene = dynamic(() => import("./scene/ExhibitionScene"), {
  ssr: false,
  loading: () => null,
});

// Statik ana kareler: 3D yüklenirken, mobilde, hareket azaltmada ve hata durumunda kullanılır.
const posters = [0, 1, 2, 3, 4, 5].map((i) => `/images/maket/sahne-${i}.webp`);
const posterAlt = [
  "Fuar stantı, hizmet noktaları ve kırmızı süreç hattından oluşan maketin genel görünüşü",
  "Maketin üstten plan görünüşü: stant alanları ve hedef, öncelik, plan işaretleri",
  "Panellerin, ürün sunum alanının ve görüşme alanının yükseldiği stant maketi",
  "Konaklama, transfer, karşılama, ikram ve baskı noktalarının koordinasyon noktasına bağlandığı maket",
  "Işıkları yanan stantta ziyaretçi figürleri ve hizmet noktaları",
  "Sahadaki üç gözlem noktasının değerlendirme sayfalarına taşındığı maket",
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red";

class SceneBoundary extends Component<
  { onError: () => void; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function PhaseRail({
  stage,
  dark,
  simple,
  onToggleSimple,
}: {
  stage: number;
  dark: boolean;
  simple: boolean;
  onToggleSimple?: () => void;
}) {
  const activePhase =
    stage >= 5
      ? "Fuar sonrası"
      : stage === 4
        ? "Fuar zamanı"
        : stage >= 1
          ? "Fuar öncesi"
          : null;
  return (
    <nav
      aria-label="Süreç aşamaları"
      className={`flex flex-wrap items-center gap-x-4 gap-y-3 text-[14px] font-medium xl:gap-x-6 ${dark ? "text-lx-muted-dark" : "text-lx-grey1"}`}
    >
      {phaseLinks.map((link, i) => {
        const active = activePhase === link.phase;
        return (
          <div key={link.phase} className="flex items-center gap-4 xl:gap-6">
            {i > 0 && (
              <span
                aria-hidden="true"
                className={`h-px w-5 xl:w-8 ${dark ? "bg-lx-line-dark" : "bg-lx-line"}`}
              />
            )}
            <a
              href={link.href}
              aria-current={active ? "step" : undefined}
              className={`group inline-flex items-center gap-2.5 py-1 transition-colors duration-150 ease-brand ${focusRing} ${
                active
                  ? dark
                    ? "text-white"
                    : "text-lx-ink"
                  : dark
                    ? "hover:text-white"
                    : "hover:text-lx-ink"
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 transition-colors duration-150 ${active ? "bg-lx-red" : dark ? "bg-lx-grey2" : "bg-lx-grey3"}`}
              />
              {link.phase}
            </a>
          </div>
        );
      })}
      {onToggleSimple && (
        <button
          type="button"
          onClick={onToggleSimple}
          className={`ml-auto py-1 text-[13px] underline decoration-1 underline-offset-4 transition-colors duration-150 ${focusRing} ${
            dark
              ? "text-lx-muted-dark hover:text-white"
              : "text-lx-grey1 hover:text-lx-ink"
          }`}
        >
          {simple ? "3D görünüm" : "Sade görünüm"}
        </button>
      )}
    </nav>
  );
}

const chipClass =
  "border px-4 py-2.5 text-[15px] font-medium transition-colors duration-150 ease-brand";

function FocusButtons({
  items,
  interactive,
}: {
  items: { key: HighlightKey; label: string }[];
  interactive: boolean;
}) {
  const [active, setActive] = useState<HighlightKey | null>(null);
  const select = (key: HighlightKey | null) => {
    setActive(key);
    setHighlight(key);
  };
  if (!interactive) {
    return (
      <ul className="mt-9 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li
            key={item.key}
            className={`${chipClass} border-lx-line bg-white text-lx-ink`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="mt-9">
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            aria-pressed={active === item.key}
            onMouseEnter={() => select(item.key)}
            onMouseLeave={() => select(null)}
            onFocus={() => select(item.key)}
            onBlur={() => select(null)}
            onClick={() => select(active === item.key ? null : item.key)}
            className={`${chipClass} ${focusRing} ${
              active === item.key
                ? "border-lx-ink bg-lx-ink text-white"
                : "border-lx-line bg-white text-lx-ink hover:border-lx-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[14px] text-lx-grey1">
        Bir başlığı seçin; maketteki karşılığı işaretlenir.
      </p>
    </div>
  );
}

function ServiceLinks({ interactive }: { interactive: boolean }) {
  return (
    <ul className="mt-9 border-t border-lx-line">
      {coordinatedServices.map((service) => (
        <li key={service.key} className="border-b border-lx-line">
          <Link
            href={service.href}
            onMouseEnter={
              interactive ? () => setHighlight(service.key) : undefined
            }
            onMouseLeave={interactive ? () => setHighlight(null) : undefined}
            onFocus={interactive ? () => setHighlight(service.key) : undefined}
            onBlur={interactive ? () => setHighlight(null) : undefined}
            className={`group flex items-center justify-between gap-4 py-3.5 transition-colors ${focusRing}`}
          >
            <span className="text-[16px] font-medium text-lx-ink transition-colors duration-150 group-hover:text-lx-red">
              {service.label}
            </span>
            <span className="flex items-center gap-3 text-[14px] text-lx-grey1">
              {service.anchor}
              <ArrowUpRight
                size={18}
                strokeWidth={1.75}
                className="text-lx-grey3 transition-colors duration-150 group-hover:text-lx-red"
                aria-hidden="true"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function StageExtras({
  index,
  interactive,
}: {
  index: number;
  interactive: boolean;
}) {
  if (index === 1) {
    return (
      <ol className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3 text-[15px] font-medium text-lx-ink">
        {goalSteps.map((step, i) => (
          <li key={step} className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-lx-red text-[13px] font-semibold text-lx-red">
              {i + 1}
            </span>
            {step}
            {i < goalSteps.length - 1 && (
              <span aria-hidden="true" className="ml-1 h-px w-8 bg-lx-grey3" />
            )}
          </li>
        ))}
      </ol>
    );
  }
  if (index === 2)
    return <FocusButtons items={designFocus} interactive={interactive} />;
  if (index === 3) return <ServiceLinks interactive={interactive} />;
  if (index === 4) {
    return (
      <ol
        className="mt-9 flex flex-wrap items-center gap-3 text-[15px] font-medium"
        aria-label="Saha koordinasyon adımları"
      >
        {fieldStatus.map((status, i) => (
          <li key={status} className="flex items-center gap-3">
            <span className={`${chipClass} border-lx-line-dark text-[#F2F2F2]`}>
              {status}
            </span>
            {i < fieldStatus.length - 1 && (
              <ArrowRight
                size={16}
                className="text-lx-grey2"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    );
  }
  if (index === 5) {
    return (
      <>
        <ol className="mt-9 grid gap-px border border-lx-line bg-lx-line sm:grid-cols-3">
          {evaluationNotes.map((note, i) => (
            <li key={note} className="bg-white px-5 py-5">
              <span className="block text-[13px] font-semibold tabular-nums text-lx-red">
                0{i + 1}
              </span>
              <span className="mt-1.5 block text-[15px] font-medium leading-snug text-lx-ink">
                {note}
              </span>
            </li>
          ))}
        </ol>
        <Link
          href="/hizmetler/raporlama-analiz"
          className={`${buttonClass.ghost} mt-7`}
        >
          Süreç değerlendirmesi nasıl hazırlanır
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </>
    );
  }
  return null;
}

export default function HomeNarrative() {
  const [quality, setQuality] = useQuality();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [sceneReady, setSceneReady] = useState(false);
  const [stage, setStage] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLElement | null)[]>([]);

  const live = quality === "full" || quality === "light";
  const desktopLive = Boolean(isDesktop && live);
  const mobileLive = isDesktop === false && live;
  const simple = quality === "static";

  // Kaydırma → sahne ilerlemesi. Her blok üst kenarı bir sahne durağıdır.
  useEffect(() => {
    if (!isDesktop) {
      setSceneTarget(0);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const wrapper = wrapperRef.current;
      const blocks = blockRefs.current.filter(Boolean) as HTMLElement[];
      if (!wrapper || blocks.length < 2) return;
      const origin = wrapper.getBoundingClientRect().top;
      const offsets = blocks.map((b) => b.getBoundingClientRect().top - origin);
      const scrolled = -origin;
      let progress = 0;
      const last = offsets.length - 1;
      if (scrolled >= offsets[last]) progress = 1;
      else {
        for (let i = 0; i < last; i++) {
          if (scrolled < offsets[i + 1]) {
            const local = Math.max(
              0,
              (scrolled - offsets[i]) / (offsets[i + 1] - offsets[i])
            );
            progress = (i + local) / last;
            break;
          }
        }
      }
      setSceneTarget(progress);
      const next = Math.round(progress * last);
      setStage((prev) => (prev === next ? prev : next));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!live) setSceneReady(false);
  }, [live]);

  const handleFail = useCallback(() => setQuality("static"), [setQuality]);
  const handleDecline = useCallback(() => {
    if (!qualityForced()) setQuality((q) => (q === "full" ? "light" : q));
  }, [setQuality]);
  const handleReady = useCallback(() => setSceneReady(true), []);

  const toggleSimple = () => {
    if (simple) {
      storeSimpleView(false);
      const next: Quality = detectQuality();
      setQuality(next);
    } else {
      storeSimpleView(true);
      setQuality("static");
    }
  };

  const darkStage = stage === 0 || Boolean(stages[stage - 1]?.dark);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Açılış: koyu yüzey + marka X şerit görseli */}
      <section
        ref={(el) => {
          blockRefs.current[0] = el;
        }}
        className="bg-lx-ink bg-[url('/images/arka-plan/x-serit-koyu.webp')] bg-cover bg-[position:60%_center] text-white lg:h-screen lg:min-h-[640px]"
        data-stage-bg
      >
        <div className="container mx-auto flex h-full flex-col px-4 pb-14 pt-28 md:px-6 lg:justify-center lg:pb-24 lg:pt-20">
          <div className="relative z-20 lg:w-[40%]">
            <Kicker dark>{hero.eyebrow}</Kicker>
            <h1 className="mt-7 text-balance font-display text-[clamp(44px,5vw,76px)] font-bold leading-[1.04] tracking-[-0.02em] text-[#F2F2F2]">
              {hero.titleLines.map((line) => {
                const [before, after] = line.split(hero.accent);
                return (
                  <span key={line} className="block">
                    {after === undefined ? (
                      line
                    ) : (
                      <>
                        {before}
                        <span className="text-lx-red">{hero.accent}</span>
                        {after}
                      </>
                    )}
                  </span>
                );
              })}
            </h1>
            <p className="mt-7 max-w-[30rem] text-pretty text-[18px] leading-[1.6] text-lx-muted-dark lg:text-[19px]">
              {hero.text}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
              <Link href={hero.primary.href} className={buttonClass.primary}>
                {hero.primary.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href={hero.secondary.href}
                className={buttonClass.outlineLight}
              >
                {hero.secondary.label}
              </a>
            </div>
          </div>

          {/* Mobil ve tablet: maket metnin altında, yatay alanı doldurur */}
          <div className="mt-12 lg:hidden">
            <div className="relative -mx-4 h-[300px] sm:h-[380px] md:-mx-6">
              {(!mobileLive || !sceneReady) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={posters[0]}
                  alt={posterAlt[0]}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              )}
              {mobileLive && (
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${sceneReady ? "opacity-100" : "opacity-0"}`}
                  aria-hidden="true"
                >
                  <SceneBoundary onError={handleFail}>
                    <ExhibitionScene
                      quality="light"
                      onReady={handleReady}
                      onFail={handleFail}
                    />
                  </SceneBoundary>
                </div>
              )}
            </div>
            <div className="mt-6">
              <PhaseRail stage={0} dark simple={simple} />
            </div>
          </div>
        </div>
      </section>

      {/* Süreç anlatısı */}
      {stages.map((s, i) => {
        const index = i + 1;
        return (
          <section
            key={s.id}
            id={s.id}
            ref={(el) => {
              blockRefs.current[index] = el;
            }}
            aria-labelledby={`${s.id}-baslik`}
            className={`${s.dark ? "bg-lx-ink text-white" : "bg-lx-paper text-lx-ink"} lg:flex lg:min-h-screen lg:items-center`}
            data-stage-bg
          >
            <div className="container mx-auto px-4 py-20 md:px-6 lg:py-28">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={posters[index]}
                alt={posterAlt[index]}
                loading="lazy"
                className="mb-10 aspect-[5/4] w-full object-contain sm:aspect-[16/10] lg:hidden"
              />
              <div className="relative z-20 lg:w-[40%]">
                <Kicker dark={s.dark} number={s.number}>
                  {s.phase} · {s.name}
                </Kicker>
                <h2
                  id={`${s.id}-baslik`}
                  className={`mt-6 text-balance font-display text-[clamp(32px,3.4vw,50px)] font-bold leading-[1.08] tracking-[-0.02em] ${
                    s.dark ? "text-[#F2F2F2]" : "text-lx-ink"
                  }`}
                >
                  {s.title}
                </h2>
                <p
                  className={`mt-5 max-w-[34rem] text-pretty text-[18px] leading-[1.6] ${s.dark ? "text-lx-muted-dark" : "text-lx-grey1"}`}
                >
                  {s.text}
                </p>
                <StageExtras index={index} interactive={desktopLive} />
              </div>
            </div>
          </section>
        );
      })}

      {/* Masaüstü: tek Canvas, metin bölümleri aktıkça sabit kalan sahne katmanı.
          DOM sonunda durur; sekme sırası önce içerikten geçer. */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        <div className="sticky top-0 h-screen" data-scene-layer>
          <div
            className="scene-region absolute bottom-24 right-0 top-20 w-[58%]"
            aria-hidden="true"
            data-scene-region
          >
            {simple
              ? posters.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className={`[transition-duration:450ms] absolute inset-0 h-full w-full object-contain transition-opacity ${stage === i ? "opacity-100" : "opacity-0"}`}
                  />
                ))
              : !sceneReady && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posters[0]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                )}
          </div>
          {desktopLive && quality && quality !== "static" && (
            <div
              className={`scene-region absolute bottom-24 right-0 top-20 w-[58%] transition-opacity duration-700 ${sceneReady ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            >
              <SceneBoundary onError={handleFail}>
                <ExhibitionScene
                  quality={quality}
                  onReady={handleReady}
                  onDecline={handleDecline}
                  onFail={handleFail}
                />
              </SceneBoundary>
            </div>
          )}
          <div
            className="pointer-events-auto absolute bottom-8 left-[44%] right-32"
            data-capture-hide
          >
            <PhaseRail
              stage={stage}
              dark={darkStage}
              simple={simple}
              onToggleSimple={
                live || (simple && simpleViewStored())
                  ? toggleSimple
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
