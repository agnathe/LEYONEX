"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Kicker, buttonClass } from "@/components/home/SectionHeading";
import { contact } from "@/components/home/content";

// Teklif talebi yalnızca iletişim bilgilerini alır. Fuar ve ihtiyaç detayları,
// firma ile yapılan ilk görüşmenin ardından birlikte netleştirilir.

type Field = {
  key: string;
  label: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  full?: boolean;
};

const FIELDS: Field[] = [
  { key: "ad", label: "Ad", autoComplete: "given-name", required: true },
  { key: "soyad", label: "Soyad", autoComplete: "family-name", required: true },
  {
    key: "firma",
    label: "Firma adı",
    autoComplete: "organization",
    required: true,
    full: true,
  },
  {
    key: "unvan",
    label: "Unvanınız",
    autoComplete: "organization-title",
    placeholder: "Örn. İhracat Müdürü",
  },
  {
    key: "web",
    label: "Web sitesi",
    type: "url",
    autoComplete: "url",
    placeholder: "www.",
  },
  {
    key: "eposta",
    label: "E-posta",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    key: "telefon",
    label: "Telefon",
    type: "tel",
    autoComplete: "tel",
    placeholder: "+90",
    required: true,
  },
];

const inputClass =
  "w-full rounded-[2px] border border-lx-line bg-white px-[14px] py-[13px] text-[15px] text-lx-ink transition-colors duration-150 ease-brand placeholder:text-lx-grey3 hover:border-lx-grey3 focus:border-lx-ink focus:outline-none";
const labelClass =
  "mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1";

const steps = [
  "Bilgilerinizi bırakın.",
  "Sizi arayıp fuarınızı ve önceliklerinizi dinleyelim.",
  "İhtiyaçlarınıza uygun süreci ve teklifi birlikte netleştirelim.",
];

export default function TeklifAlPage() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [hata, setHata] = useState("");
  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const missing = FIELDS.filter(
        (f) => f.required && !(form[f.key] || "").trim()
      ).map((f) => f.label);
      if (missing.length) {
        setHata(`Lütfen zorunlu alanları doldurun: ${missing.join(", ")}.`);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.eposta || "")) {
        setHata("E-posta adresi geçerli görünmüyor.");
        return;
      }
      setHata("");
      setLoading(true);
      const fd = new FormData();
      FIELDS.forEach((f) => fd.append(f.key, (form[f.key] || "").trim()));
      try {
        const res = await fetch("/api/fuar-bilgi-formu", {
          method: "POST",
          body: fd,
        });
        const data = (await res.json().catch(() => null)) as {
          success?: boolean;
          message?: string;
        } | null;
        // Başarı mesajı yalnızca sunucu gönderimi doğruladığında gösterilir.
        if (res.ok && data?.success) {
          trackEvent("generate_lead", {
            form_name: "fuar_bilgi_formu",
            firma: form.firma,
          });
          setSent(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setHata(
            "Talebiniz şu anda iletilemedi. Bilgileriniz formda duruyor; lütfen tekrar deneyin ya da bize doğrudan yazın."
          );
        }
      } catch {
        setHata(
          "Bağlantı kurulamadı. Bilgileriniz formda duruyor; lütfen tekrar deneyin ya da bize doğrudan yazın."
        );
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-lx-paper pt-16 md:pt-20">
        <section className="relative overflow-hidden bg-lx-ink py-20 text-white lg:py-24">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[8vw] -top-[14vw] select-none font-display text-[48vw] font-bold leading-none text-white opacity-[0.04]"
          >
            X
          </span>
          <div className="container relative mx-auto px-4 md:px-6">
            <Kicker dark>Teklif alın</Kicker>
            <h1 className="mt-6 max-w-[40rem] text-balance font-display text-[clamp(34px,4vw,56px)] font-bold leading-[1.06] tracking-[-0.02em] text-[#F2F2F2]">
              Bir sonraki fuarınızı birlikte planlayalım.
            </h1>
            <p className="mt-6 max-w-[34rem] text-pretty text-[18px] leading-[1.6] text-lx-muted-dark">
              İletişim bilgilerinizi bırakın; sizi arayalım. Fuarınızı ve
              ihtiyaçlarınızı ilk görüşmede birlikte konuşuyoruz.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2 className="font-display text-[22px] font-bold text-lx-ink">
                Nasıl ilerliyoruz?
              </h2>
              <ol className="mt-6 border-t border-lx-line">
                {steps.map((s, i) => (
                  <li
                    key={s}
                    className="flex gap-4 border-b border-lx-line py-4 text-[16px] leading-relaxed text-lx-ink"
                  >
                    <span className="shrink-0 text-[13px] font-semibold tabular-nums leading-[1.75] text-lx-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <dl className="mt-10 grid gap-px border border-lx-line bg-lx-line sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="bg-lx-paper p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1">
                    E-posta
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[16px] font-medium text-lx-ink hover:text-lx-red"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div className="bg-lx-paper p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1">
                    Telefon
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={contact.phoneHref}
                      className="text-[16px] font-medium text-lx-ink hover:text-lx-red"
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="order-first lg:order-none lg:col-span-6 lg:col-start-7">
              {sent ? (
                <div
                  className="border border-lx-line bg-white p-10"
                  role="status"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-lx-red">
                    <Check
                      size={22}
                      className="text-white"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                  <h2 className="mt-6 font-display text-[24px] font-bold text-lx-ink">
                    Talebiniz bize ulaştı.
                  </h2>
                  <p className="mt-2 text-[16px] text-lx-grey1">
                    En kısa sürede sizi arayıp fuarınızı birlikte konuşacağız.
                  </p>
                  <Link href="/" className={`${buttonClass.primary} mt-8`}>
                    Ana sayfaya dön
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="border border-lx-line bg-white p-6 sm:p-10"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    {FIELDS.map((f) => (
                      <div
                        key={f.key}
                        className={f.full ? "sm:col-span-2" : undefined}
                      >
                        <label htmlFor={`tf-${f.key}`} className={labelClass}>
                          {f.label}
                          {f.required ? (
                            <span className="text-lx-red"> *</span>
                          ) : (
                            <span className="font-medium normal-case tracking-normal text-lx-grey2">
                              {" "}
                              (isteğe bağlı)
                            </span>
                          )}
                        </label>
                        <input
                          id={`tf-${f.key}`}
                          name={f.key}
                          type={f.type ?? "text"}
                          autoComplete={f.autoComplete}
                          placeholder={f.placeholder}
                          required={f.required}
                          value={form[f.key] || ""}
                          onChange={(e) => set(f.key, e.target.value)}
                          className={inputClass}
                        />
                      </div>
                    ))}
                  </div>

                  {hata && (
                    <p
                      role="alert"
                      className="mt-6 border-l-[3px] border-lx-red bg-lx-red-tint px-4 py-3 text-[15px] text-[#A3141A]"
                    >
                      {hata}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`${buttonClass.primary} mt-8 w-full disabled:opacity-40`}
                  >
                    {loading ? (
                      <>
                        <Loader2
                          size={17}
                          className="animate-spin"
                          aria-hidden="true"
                        />
                        Gönderiliyor
                      </>
                    ) : (
                      <>
                        Teklif talebimi gönder
                        <ArrowRight size={17} aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-[13px] text-lx-grey1">
                    Formu göndererek{" "}
                    <a
                      href="/gizlilik"
                      className="underline underline-offset-2 hover:text-lx-ink"
                    >
                      Gizlilik Politikası
                    </a>{" "}
                    ve{" "}
                    <a
                      href="/kvkk"
                      className="underline underline-offset-2 hover:text-lx-ink"
                    >
                      KVKK
                    </a>{" "}
                    metinlerini kabul etmiş olursunuz.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
