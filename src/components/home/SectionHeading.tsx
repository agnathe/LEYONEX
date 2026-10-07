import type { ReactNode } from "react";

// Tasarım sistemi bölüm açılışı: üst etiket + 40×3 kırmızı çizgi + başlık.
export function Kicker({
  children,
  dark = false,
  number,
}: {
  children: ReactNode;
  dark?: boolean;
  number?: string;
}) {
  return (
    <div>
      <p
        className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-lx-muted-dark" : "text-lx-grey1"}`}
      >
        {number && <span className="tabular-nums text-lx-red">{number}</span>}
        <span>{children}</span>
      </p>
      <span aria-hidden="true" className="mt-4 block h-[3px] w-10 bg-lx-red" />
    </div>
  );
}

export function SectionTitle({
  id,
  children,
  dark = false,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`mt-6 text-balance font-display text-[clamp(30px,3.1vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] ${dark ? "text-[#F2F2F2]" : "text-lx-ink"} ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`mt-5 max-w-[36rem] text-pretty text-[18px] leading-[1.6] ${dark ? "text-lx-muted-dark" : "text-lx-grey1"} ${className}`}
    >
      {children}
    </p>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-[26px] py-[14px] text-[15px] font-semibold transition-colors duration-150 ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red";

export const buttonClass = {
  primary: `${buttonBase} bg-lx-red text-white hover:bg-lx-red-hover`,
  outline: `${buttonBase} border-2 border-lx-ink text-lx-ink hover:bg-lx-ink hover:text-white`,
  outlineLight: `${buttonBase} border-2 border-white text-white hover:bg-white hover:text-lx-ink`,
  ghost:
    "inline-flex items-center gap-2 text-[15px] font-semibold text-lx-ink transition-colors duration-150 ease-brand hover:text-lx-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lx-red",
};
