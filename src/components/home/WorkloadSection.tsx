"use client";

import { useEffect, useRef, useState } from "react";
import { coreBenefits } from "@/data/services";
import { workload } from "./content";
import { Kicker, Lead, SectionTitle } from "./SectionHeading";

const laneY = [42, 112, 182, 252];
const MERGE_X = 372;
const MERGE_Y = 147;

export default function WorkloadSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const draw = (delay: number) => ({
    strokeDasharray: 1,
    strokeDashoffset: visible ? 0 : 1,
    transition: `stroke-dashoffset 450ms cubic-bezier(.2,.6,.2,1) ${delay}ms`,
  });
  const fade = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 250ms cubic-bezier(.2,.6,.2,1) ${delay}ms`,
  });

  return (
    <section
      aria-labelledby="is-yuku-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Kicker>Size faydası</Kicker>
            <SectionTitle id="is-yuku-baslik">{workload.title}</SectionTitle>
            <Lead>{workload.text}</Lead>
            <ul className="mt-10 border-t border-lx-line">
              {coreBenefits.map(({ title }) => (
                <li
                  key={title}
                  className="flex items-center gap-4 border-b border-lx-line py-4 text-[16px] font-medium text-lx-ink"
                >
                  <span
                    aria-hidden="true"
                    className="h-[2px] w-3 shrink-0 bg-lx-red"
                  />
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={ref}
            className="border border-lx-line bg-white p-6 sm:p-10 lg:col-span-6 lg:col-start-7"
          >
            <svg
              viewBox="0 0 560 300"
              className="workload-diagram h-auto w-full"
              role="img"
              aria-label="Tasarım, tedarik, onay ve uygulama adımları tek bir hazırlık takviminde birleşir."
            >
              {laneY.map((y, i) => (
                <g key={y}>
                  <text
                    x="0"
                    y={y + 5}
                    className="fill-lx-ink font-sans text-[15px] font-medium"
                  >
                    {workload.lanes[i]}
                  </text>
                  <path
                    d={`M110 ${y} H250`}
                    pathLength={1}
                    fill="none"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    style={draw(i * 80)}
                  />
                  <rect
                    x={146 + i * 12}
                    y={y - 4}
                    width="8"
                    height="8"
                    fill="#4D4D4D"
                    style={fade(150 + i * 80)}
                  />
                  <rect
                    x={211 - i * 10}
                    y={y - 4}
                    width="8"
                    height="8"
                    fill="#4D4D4D"
                    style={fade(220 + i * 80)}
                  />
                  <path
                    d={`M250 ${y} C 315 ${y}, 315 ${MERGE_Y}, ${MERGE_X} ${MERGE_Y}`}
                    pathLength={1}
                    fill="none"
                    stroke="#E31B23"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    style={draw(380 + i * 80)}
                  />
                </g>
              ))}
              <path
                d={`M${MERGE_X} ${MERGE_Y} H548`}
                pathLength={1}
                fill="none"
                stroke="#E31B23"
                strokeWidth="3"
                style={draw(760)}
              />
              {[420, 470, 520].map((x, i) => (
                <line
                  key={x}
                  x1={x}
                  x2={x}
                  y1={MERGE_Y - 8}
                  y2={MERGE_Y + 8}
                  stroke="#E31B23"
                  strokeWidth="2"
                  style={fade(1000 + i * 100)}
                />
              ))}
              <rect
                x={MERGE_X - 7}
                y={MERGE_Y - 7}
                width="14"
                height="14"
                fill="#fff"
                stroke="#E31B23"
                strokeWidth="2.5"
              />
              <text
                x={MERGE_X + 10}
                y={MERGE_Y + 42}
                className="fill-lx-grey1 font-sans text-[14px]"
              >
                Ortak hazırlık takvimi
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
