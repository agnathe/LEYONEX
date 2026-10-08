"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { buttonClass } from "@/components/home/SectionHeading";
import { contact } from "@/components/home/content";

// İlk temas formu: ana sayfa, /teklif-al ve /iletisim aynı kısa akışı kullanır.
// Ayrıntılı fuar bilgileri ilk görüşmeden sonra /fuar-bilgi-formu ile alınır.

export type ContactFormSource = "ana-sayfa" | "teklif-al" | "iletisim";

type Status = "idle" | "sending" | "sent" | "error";
type Values = Record<
  "adSoyad" | "firma" | "eposta" | "telefon" | "fuar" | "mesaj",
  string
>;

const empty: Values = {
  adSoyad: "",
  firma: "",
  eposta: "",
  telefon: "",
  fuar: "",
  mesaj: "",
};

const inputClass =
  "w-full rounded-[2px] border border-lx-line bg-white px-[14px] py-[13px] text-[15px] text-lx-ink transition-colors duration-150 ease-brand placeholder:text-lx-grey3 hover:border-lx-grey3 focus:border-lx-ink focus:outline-none aria-[invalid=true]:border-lx-red";
const labelClass =
  "mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1";

const Required = () => <span className="text-lx-red"> *</span>;
const Optional = () => (
  <span className="font-medium normal-case tracking-normal text-lx-grey2">
    {" "}
    (isteğe bağlı)
  </span>
);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactRequestForm({
  source,
}: {
  source: ContactFormSource;
}) {
  const [values, setValues] = useState<Values>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState<Partial<Record<keyof Values, true>>>(
    {}
  );
  const id = (k: keyof Values | "iletisim-not") => `${source}-${k}`;

  const update =
    (k: keyof Values) =>
    (e: { target: { value: string } }) =>
      setValues((v) => ({ ...v, [k]: e.target.value }));

  const validate = () => {
    const v = Object.fromEntries(
      Object.entries(values).map(([k, x]) => [k, x.trim()])
    ) as Values;
    const bad: Partial<Record<keyof Values, true>> = {};
    const missing: string[] = [];
    if (!v.adSoyad) {
      bad.adSoyad = true;
      missing.push("ad soyad");
    }
    if (!v.firma) {
      bad.firma = true;
      missing.push("firma adı");
    }
    if (!v.eposta && !v.telefon) {
      bad.eposta = true;
      bad.telefon = true;
      missing.push("e-posta ya da telefon");
    }
    let message = missing.length
      ? `Lütfen şu alanları doldurun: ${missing.join(", ")}.`
      : "";
    if (!message && v.eposta && !EMAIL.test(v.eposta)) {
      bad.eposta = true;
      message = "E-posta adresi geçerli görünmüyor.";
    }
    setInvalid(bad);
    return { v, message };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { v, message } = validate();
    if (message) {
      setStatus("error");
      setError(message);
      return;
    }
    setStatus("sending");
    setError("");
    const fd = new FormData();
    Object.entries(v).forEach(([k, x]) => fd.append(k, x));
    fd.append("kaynak", source);
    try {
      const res = await fetch("/api/fuar-bilgi-formu", {
        method: "POST",
        body: fd,
      });
      const data = (await res.json().catch(() => null)) as {
        success?: boolean;
      } | null;
      // Başarı mesajı yalnızca sunucu gönderimi doğruladığında gösterilir.
      if (res.ok && data?.success) {
        trackEvent("generate_lead", {
          form_name: "gorusme_talebi",
          form_location: source,
        });
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

  if (status === "sent") {
    return (
      <div className="border border-lx-line bg-white p-8 sm:p-10" role="status">
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
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-lx-line bg-white p-6 sm:p-10"
    >
      <p className="text-[16px] leading-relaxed text-lx-ink">
        {contact.formIntro}
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={id("adSoyad")} className={labelClass}>
            Ad soyad
            <Required />
          </label>
          <input
            id={id("adSoyad")}
            name="adSoyad"
            autoComplete="name"
            required
            aria-invalid={invalid.adSoyad || undefined}
            value={values.adSoyad}
            onChange={update("adSoyad")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={id("firma")} className={labelClass}>
            Firma adı
            <Required />
          </label>
          <input
            id={id("firma")}
            name="firma"
            autoComplete="organization"
            required
            aria-invalid={invalid.firma || undefined}
            value={values.firma}
            onChange={update("firma")}
            className={inputClass}
          />
        </div>
        <fieldset className="sm:col-span-2" aria-describedby={id("iletisim-not")}>
          <legend className="sr-only">E-posta veya telefon</legend>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor={id("eposta")} className={labelClass}>
                E-posta
              </label>
              <input
                id={id("eposta")}
                name="eposta"
                type="email"
                autoComplete="email"
                aria-invalid={invalid.eposta || undefined}
                value={values.eposta}
                onChange={update("eposta")}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={id("telefon")} className={labelClass}>
                Telefon
              </label>
              <input
                id={id("telefon")}
                name="telefon"
                type="tel"
                autoComplete="tel"
                aria-invalid={invalid.telefon || undefined}
                value={values.telefon}
                onChange={update("telefon")}
                className={inputClass}
              />
            </div>
          </div>
          <p id={id("iletisim-not")} className="mt-2 text-[13px] text-lx-grey1">
            E-posta veya telefondan en az birini yazmanız yeterli.
          </p>
        </fieldset>
        <div className="sm:col-span-2">
          <label htmlFor={id("fuar")} className={labelClass}>
            Katılmayı düşündüğünüz fuar
            <Optional />
          </label>
          <input
            id={id("fuar")}
            name="fuar"
            value={values.fuar}
            onChange={update("fuar")}
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("mesaj")} className={labelClass}>
            Kısa mesaj
            <Optional />
          </label>
          <textarea
            id={id("mesaj")}
            name="mesaj"
            rows={3}
            value={values.mesaj}
            onChange={update("mesaj")}
            className={`${inputClass} min-h-[88px] resize-y`}
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
            <Loader2 size={17} className="animate-spin" aria-hidden="true" />
            Gönderiliyor
          </>
        ) : (
          <>
            Görüşme talebi gönder
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
        <a href="/kvkk" className="underline underline-offset-2 hover:text-lx-ink">
          KVKK
        </a>{" "}
        metinlerini kabul etmiş olursunuz.
      </p>
    </form>
  );
}
