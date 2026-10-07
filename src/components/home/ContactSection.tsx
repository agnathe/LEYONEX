"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { contact } from "./content";
import { Kicker, Lead, SectionTitle, buttonClass } from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-[2px] border border-lx-line bg-white px-[14px] py-[13px] text-[15px] text-lx-ink transition-colors duration-150 ease-brand placeholder:text-lx-grey3 hover:border-lx-grey3 focus:border-lx-ink focus:outline-none";
const labelClass =
  "mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1";
const optional = (
  <span className="font-medium normal-case tracking-normal text-lx-grey2">
    {" "}
    (isteğe bağlı)
  </span>
);

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    company: "",
    email: "",
    phone: "",
    fair: "",
    message: "",
  });

  const update =
    (field: keyof typeof form) => (e: { target: { value: string } }) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.company,
          contactPerson: form.company,
          email: form.email,
          phone: form.phone,
          fairName: form.fair || "Belirtilmedi",
          fairDate: "",
          fairLocation: "",
          generalNotes: form.message,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        success?: boolean;
      } | null;
      // Başarı mesajı yalnızca sunucu gönderimi doğruladığında gösterilir.
      if (res.ok && data?.success) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(
          "Talebiniz şu anda iletilemedi. Bilgileriniz formda duruyor; lütfen tekrar deneyin ya da bize doğrudan yazın."
        );
      }
    } catch {
      setStatus("error");
      setError(
        "Bağlantı kurulamadı. Bilgileriniz formda duruyor; lütfen tekrar deneyin ya da bize doğrudan yazın."
      );
    }
  };

  return (
    <section
      id="iletisim-formu"
      aria-labelledby="iletisim-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 lg:py-32"
    >
      <div className="container mx-auto grid gap-14 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Kicker>Görüşme</Kicker>
          <SectionTitle id="iletisim-baslik">{contact.title}</SectionTitle>
          <Lead>{contact.text}</Lead>
          <dl className="mt-10 grid gap-px border border-lx-line bg-lx-line sm:grid-cols-2">
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
          {/* Kurşun kalem stant eskizi: kâğıt zemini sayfa rengiyle birleşir */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/eskiz/stant-plan-eskizi.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={872}
            height={941}
            className="mt-10 hidden w-full mix-blend-multiply lg:block"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {status === "sent" ? (
            <div className="border border-lx-line bg-white p-10" role="status">
              <span className="flex h-12 w-12 items-center justify-center bg-lx-red">
                <Check
                  size={22}
                  className="text-white"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-6 font-display text-[22px] font-bold text-lx-ink">
                Talebiniz bize ulaştı.
              </h3>
              <p className="mt-2 text-[16px] text-lx-grey1">
                Ekibimiz paylaştığınız bilgilerle sizinle iletişime geçecek.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-lx-line bg-white p-6 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="cf-company" className={labelClass}>
                    Firma adı <span className="text-lx-red">*</span>
                  </label>
                  <input
                    id="cf-company"
                    name="company"
                    required
                    autoComplete="organization"
                    value={form.company}
                    onChange={update("company")}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelClass}>
                    E-posta <span className="text-lx-red">*</span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="cf-phone" className={labelClass}>
                    Telefon <span className="text-lx-red">*</span>
                  </label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-fair" className={labelClass}>
                    Katılmayı düşündüğünüz fuar{optional}
                  </label>
                  <input
                    id="cf-fair"
                    name="fair"
                    value={form.fair}
                    onChange={update("fair")}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-message" className={labelClass}>
                    Kısa mesaj{optional}
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className={`${inputClass} min-h-[96px] resize-y`}
                  />
                </div>
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  data-form-error
                  className="mt-6 border-l-[3px] border-lx-red bg-lx-red-tint px-4 py-3 text-[15px] text-[#A3141A]"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`${buttonClass.primary} mt-8 w-full disabled:opacity-40`}
              >
                {status === "sending" ? (
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
                    Fuarınızı birlikte planlayalım
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
  );
}
