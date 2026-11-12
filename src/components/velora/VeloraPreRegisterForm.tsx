"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Velora ön kayıt formu: isteğe bağlıdır, katılım şartı değildir. Gönderim /api/velora-on-kayit üzerinden
// ekibe e-posta olarak gider ve katılımcıya onay e-postası yollanır.

const BOLUMLER = ["Mimarlık", "Endüstriyel Tasarım", "Diğer"];
const SINIFLAR = ["1. sınıf", "2. sınıf", "3. sınıf", "4. sınıf", "Yüksek lisans / doktora", "Mezun"];
// En yeni yıl başta; listenin sonunda daha eski mezunlar için tek seçenek.
const MEZUNIYET_YILLARI = [
  ...Array.from({ length: 2026 - 2010 + 1 }, (_, i) => String(2026 - i)),
  "2009 veya önce",
];
const KATILIM = ["Bireysel", "2 kişilik ekip"];
const KAYNAKLAR = ["Afiş / QR kod", "Hoca veya bölüm duyurusu", "Arkadaş", "Sosyal medya", "Diğer"];

type Values = Record<
  "adSoyad" | "eposta" | "bolum" | "sinif" | "mezuniyetYili" | "katilim" | "ekipArkadasi" | "kaynak" | "website",
  string
>;
type Status = "idle" | "sending" | "sent" | "error";

const empty: Values = {
  adSoyad: "",
  eposta: "",
  bolum: "",
  sinif: "",
  mezuniyetYili: "",
  katilim: "",
  ekipArkadasi: "",
  kaynak: "",
  website: "",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClass =
  "w-full border border-[#d9d6cc] bg-white px-3 py-3 text-base text-[#2d2d2d] focus:border-[#2d2d2d] focus:outline-none aria-[invalid=true]:border-primary";
const labelClass = "mb-1.5 block text-sm font-semibold text-[#2d2d2d]";

const Req = () => <span className="text-primary"> *</span>;

export default function VeloraPreRegisterForm({ contactEmail }: { contactEmail: string }) {
  const [v, setV] = useState<Values>(empty);
  const [onay, setOnay] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState<Partial<Record<keyof Values | "onay", true>>>({});

  const set = (k: keyof Values) => (e: { target: { value: string } }) => setV((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const t = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, x.trim()])) as Values;
    const bad: Partial<Record<keyof Values | "onay", true>> = {};
    if (!t.adSoyad) bad.adSoyad = true;
    if (!t.eposta || !EMAIL.test(t.eposta)) bad.eposta = true;
    if (!t.bolum) bad.bolum = true;
    if (!t.sinif) bad.sinif = true;
    if (t.sinif === "Mezun" && !t.mezuniyetYili) bad.mezuniyetYili = true;
    if (t.sinif !== "Mezun") t.mezuniyetYili = "";
    if (!t.katilim) bad.katilim = true;
    if (!onay) bad.onay = true;
    setInvalid(bad);
    if (Object.keys(bad).length) {
      setStatus("error");
      setError(
        bad.eposta && t.eposta
          ? "E-posta adresi geçerli görünmüyor."
          : bad.onay && Object.keys(bad).length === 1
            ? "Devam etmek için onay kutusunu işaretleyin."
            : "Lütfen yıldızlı alanları doldurun."
      );
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/velora-on-kayit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...t, onay }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (res.ok && data?.success) {
        trackEvent("velora_on_kayit", { bolum: t.bolum, sinif: t.sinif, katilim: t.katilim, kaynak: t.kaynak || "belirtilmedi" });
        setStatus("sent");
      } else {
        setStatus("error");
        setError(data?.message || "Kaydınız şu anda iletilemedi. Lütfen tekrar deneyin.");
      }
    } catch {
      setStatus("error");
      setError("Bağlantı kurulamadı. Bilgileriniz formda duruyor; lütfen tekrar deneyin.");
    }
  };

  if (status === "sent") {
    return (
      <div className="border-l-4 border-primary bg-white p-5 md:p-7" role="status">
        <span className="flex h-10 w-10 items-center justify-center bg-primary">
          <Check size={20} className="text-white" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <p className="mt-4 font-display text-xl font-semibold text-[#2d2d2d]">Ön kaydınız alındı.</p>
        <p className="mt-2">
          {v.eposta.trim()} adresine yarışma özetini içeren bir onay e-postası gönderdik. Gelen kutunuzda göremezseniz
          gereksiz klasörünü kontrol edin.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white p-5 md:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="vo-adSoyad" className={labelClass}>
            Ad soyad
            <Req />
          </label>
          <input id="vo-adSoyad" autoComplete="name" value={v.adSoyad} onChange={set("adSoyad")} aria-invalid={invalid.adSoyad || undefined} className={inputClass} />
        </div>
        <div>
          <label htmlFor="vo-eposta" className={labelClass}>
            E-posta
            <Req />
          </label>
          <input id="vo-eposta" type="email" inputMode="email" autoComplete="email" value={v.eposta} onChange={set("eposta")} aria-invalid={invalid.eposta || undefined} className={inputClass} />
        </div>
        <div>
          <label htmlFor="vo-bolum" className={labelClass}>
            Bölüm
            <Req />
          </label>
          <select id="vo-bolum" value={v.bolum} onChange={set("bolum")} aria-invalid={invalid.bolum || undefined} className={inputClass}>
            <option value="">Seçin</option>
            {BOLUMLER.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="vo-sinif" className={labelClass}>
            Sınıf
            <Req />
          </label>
          <select id="vo-sinif" value={v.sinif} onChange={set("sinif")} aria-invalid={invalid.sinif || undefined} className={inputClass}>
            <option value="">Seçin</option>
            {SINIFLAR.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        {v.sinif === "Mezun" ? (
          <div>
            <label htmlFor="vo-mezuniyet" className={labelClass}>
              Mezuniyet yılı
              <Req />
            </label>
            <select
              id="vo-mezuniyet"
              value={v.mezuniyetYili}
              onChange={set("mezuniyetYili")}
              aria-invalid={invalid.mezuniyetYili || undefined}
              className={inputClass}
            >
              <option value="">Seçin</option>
              {MEZUNIYET_YILLARI.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        ) : null}
        <div>
          <label htmlFor="vo-katilim" className={labelClass}>
            Katılım biçimi
            <Req />
          </label>
          <select id="vo-katilim" value={v.katilim} onChange={set("katilim")} aria-invalid={invalid.katilim || undefined} className={inputClass}>
            <option value="">Seçin</option>
            {KATILIM.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        {v.katilim === "2 kişilik ekip" ? (
          <div>
            <label htmlFor="vo-ekip" className={labelClass}>
              Ekip arkadaşınızın adı <span className="font-normal text-[#555555]">(isteğe bağlı)</span>
            </label>
            <input id="vo-ekip" value={v.ekipArkadasi} onChange={set("ekipArkadasi")} className={inputClass} />
          </div>
        ) : null}
        <div className="sm:col-span-2">
          <label htmlFor="vo-kaynak" className={labelClass}>
            Yarışmayı nereden duydunuz? <span className="font-normal text-[#555555]">(isteğe bağlı)</span>
          </label>
          <select id="vo-kaynak" value={v.kaynak} onChange={set("kaynak")} className={inputClass}>
            <option value="">Seçin</option>
            {KAYNAKLAR.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        {/* Bot tuzağı: kullanıcılar görmez. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="vo-website">Web sitesi</label>
          <input id="vo-website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} />
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed">
        <input
          type="checkbox"
          checked={onay}
          onChange={(e) => setOnay(e.target.checked)}
          aria-invalid={invalid.onay || undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-[#CB3234]"
        />
        <span>
          Bu formdaki bilgilerimin, LEYONEX tarafından yalnızca Velora Stant Tasarım Yarışması kapsamında benimle
          iletişim kurmak (duyuru ve hatırlatma göndermek) amacıyla işlenmesini kabul ediyorum. Bilgilerim üçüncü
          kişilerle paylaşılmaz; silinmesini istediğimde {contactEmail} adresine yazabilirim.
          <Req />
        </span>
      </label>

      {status === "error" && error ? (
        <p className="mt-4 text-sm font-semibold text-primary" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : null}
        {status === "sending" ? "Gönderiliyor…" : "Ön kayıt ol"}
      </button>
    </form>
  );
}
