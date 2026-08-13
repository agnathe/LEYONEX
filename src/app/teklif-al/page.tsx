'use client';

import { useState, useRef, useCallback } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { trackEvent } from '@/lib/analytics';
import { ArrowRight, Loader2, Check, Upload, X, ChevronDown, ChevronUp } from 'lucide-react';

const MAX_FILE_BYTES = 10 * 1024 * 1024;

// ─── helpers ─────────────────────────────────────────────────────────────────

const AMAC: [string, string][] = [
  ['amac_yeniMusteri', 'Yeni müşteri / ihracat bağlantısı'],
  ['amac_bayi', 'Bayi / distribütör arayışı'],
  ['amac_lansman', 'Yeni ürün / teknoloji lansmanı'],
  ['amac_marka', 'Marka bilinirliği'],
  ['amac_mevcut', 'Mevcut müşteri ilişkileri'],
  ['amac_analiz', 'Pazar ve rakip analizi'],
];
const PAZAR: [string, string][] = [
  ['pazar_tr', 'Türkiye'], ['pazar_avrupa', 'Avrupa'],
  ['pazar_ortadogu', 'Orta Doğu ve Körfez'], ['pazar_afrika', 'Kuzey Afrika'],
  ['pazar_amerika', 'Amerika'], ['pazar_asya', 'Asya-Pasifik'], ['pazar_bdt', 'BDT ülkeleri'],
];
const IHT: [string, string][] = [
  ['iht_toplanti', 'Kapalı toplantı odası'], ['iht_banko', 'Karşılama bankosu'],
  ['iht_depo', 'Depo'], ['iht_mutfak', 'Mutfak / ikram alanı'],
  ['iht_vitrin', 'Ürün sergileme rafı / vitrin'], ['iht_ekran', 'LED ekran / TV'],
  ['iht_sunum', 'Sunum / demo alanı'], ['iht_bar', 'Bar / ağırlama alanı'],
  ['iht_ciftkat', 'Çift kat'],
];
const KAPSAM = [
  'Stand tasarımı ve üretimi', 'Konaklama', 'Ulaşım (uçuş, transfer, araç)',
  'Fuar öncesi davet ve pazarlama', 'Hostes / tercüman', 'Fotoğraf ve video', 'İkram ve organizasyon',
];

// ─── sub-components ──────────────────────────────────────────────────────────

function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div className="flex gap-4 items-baseline">
      <span className="font-black text-2xl text-[#CB3234] tabular-nums">{num}</span>
      <div>
        <h2 className="m-0 font-black text-xl text-[#1a1a1a] tracking-tight">{title}</h2>
        <span className="text-[13px] text-[#999]">{sub}</span>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-[11px] font-bold tracking-[0.12em] text-[#888] uppercase mb-1.5">{children}</label>;
}

const field = 'w-full border border-[#E5E5E3] bg-white text-[#1a1a1a] placeholder:text-[#bbb] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#CB3234] transition-colors';

function PctRow({ label, name, value, onChange }: {
  label: string; name: string; value: string; onChange: (k: string, v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b border-[#E5E5E3] last:border-b-0">
      <span className="text-sm text-[#1a1a1a]">{label}</span>
      <span className="flex items-center gap-1.5 shrink-0">
        <input
          type="number" name={name} min={0} max={100} step={5}
          value={value}
          onChange={e => onChange(name, e.target.value)}
          className="w-16 text-right border border-[#E5E5E3] bg-white px-2 py-2 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#CB3234] tabular-nums"
          placeholder="0"
        />
        <span className="text-xs text-[#999]">%</span>
      </span>
    </div>
  );
}

function PctTotal({ total }: { total: number }) {
  const ok = total === 100 || total === 0;
  const color = total === 0 ? 'text-[#bbb]' : ok ? 'text-[#1a1a1a]' : 'text-[#CB3234]';
  return (
    <div className="flex justify-between items-center pt-2">
      <span className="text-[11px] font-bold tracking-widest text-[#888] uppercase">Toplam</span>
      <span className={`font-black text-base tabular-nums ${color}`}>
        %{total}{!ok && total > 0 ? ' — 100 olmalı' : ''}
      </span>
    </div>
  );
}

function RadioPair({ name, value, onChange }: {
  name: string; value: string; onChange: (k: string, v: string) => void;
}) {
  return (
    <span className="flex gap-2 shrink-0">
      {(['Olmazsa olmaz', 'Olsa iyi olur'] as const).map(opt => (
        <label key={opt}
          className={`w-[120px] flex justify-center items-center gap-2 border px-3 py-2 text-xs cursor-pointer transition-colors
            ${value === opt ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white font-bold' : 'border-[#E5E5E3] text-[#666] hover:border-[#999]'}`}
        >
          <input type="radio" name={name} value={opt}
            checked={value === opt}
            onChange={() => onChange(name, opt)}
            className="sr-only"
          />
          {opt === 'Olmazsa olmaz' ? 'Zorunlu' : 'Tercih'}
        </label>
      ))}
    </span>
  );
}

// ─── main component ──────────────────────────────────────────────────────────

type StrMap = Record<string, string>;

export default function FuarBilgiFormuPage() {
  const [detay, setDetay] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hata, setHata] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  // Flat string state for all fields
  const [form, setForm] = useState<StrMap>({});
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  // Checkbox state
  const [kapsam, setKapsam] = useState<string[]>([]);
  const toggleKapsam = (v: string) =>
    setKapsam(p => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);

  // Percentage sums
  const pctSum = (fields: [string, string][]) =>
    fields.reduce((s, [k]) => s + (parseFloat(form[k] || '0') || 0), 0);

  const amacTotal = pctSum(AMAC);
  const pazarTotal = pctSum(PAZAR);

  // File handling
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    const total = [...files, ...picked].reduce((s, f) => s + f.size, 0);
    if (total > MAX_FILE_BYTES) {
      setHata('Toplam dosya boyutu 10 MB sınırını aşıyor.');
      if (fileRef.current) fileRef.current.value = '';
      return;
    }
    setHata('');
    setFiles(p => [...p, ...picked]);
    if (fileRef.current) fileRef.current.value = '';
  };

  const removeFile = (idx: number) => setFiles(p => p.filter((_, i) => i !== idx));

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const required: [string, string][] = [
      ['ad', 'Ad'], ['soyad', 'Soyad'], ['firma', 'Firma Adı'],
      ['eposta', 'E-posta'], ['telefon', 'Telefon'],
    ];
    const missing = required.filter(([k]) => !(form[k] || '').trim()).map(([, l]) => l);
    if (missing.length) {
      setHata(`Lütfen zorunlu alanları doldurun: ${missing.join(', ')}.`);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.eposta || '')) {
      setHata('E-posta adresi geçerli görünmüyor.');
      return;
    }

    setHata('');
    setLoading(true);

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    kapsam.forEach(v => fd.append('kapsam', v));
    files.forEach(f => fd.append('ekler', f));

    try {
      const res = await fetch('/api/fuar-bilgi-formu', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        trackEvent('generate_lead', { form_name: 'fuar_bilgi_formu', firma: form.firma, fuar: form.fuar });
        setSent(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setHata(data.message || 'Bir hata oluştu.');
      }
    } catch {
      setHata('Bağlantı hatası. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }, [form, kapsam, files]);

  if (sent) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 bg-[#F8F8F6] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6 py-20">
            <div className="w-16 h-16 bg-[#CB3234] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-black text-[#1a1a1a] mb-3">Formunuz Alındı</h1>
            <p className="text-[#666] text-sm leading-relaxed mb-8">
              Fuar bilgi formunuzu inceleyip en kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <a href="/" className="inline-flex items-center gap-2 bg-[#CB3234] text-white font-bold px-6 py-3 text-sm hover:bg-[#A8282A] transition-colors">
              Ana Sayfaya Dön <ArrowRight size={14} />
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-[#F8F8F6]">

        {/* Hero */}
        <div className="bg-[#1a1a1a] py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: 880 }}>
            <div className="flex flex-col gap-12">
              <div className="flex items-start justify-between gap-6">
                <div />
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#666] text-right leading-loose uppercase">
                  Fuar Bilgi Formu<br /><span className="text-[#444]">Exhibition Brief</span>
                </span>
              </div>
              <div>
                <span className="block w-10 h-0.5 bg-[#CB3234] mb-5" />
                <h1 className="font-black text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
                  FUAR BİLGİ FORMU
                </h1>
                <p className="text-[#888] text-base leading-relaxed max-w-xl">
                  İletişim bilgilerinizi bırakmanız 1 dakika. Devamındaki detaylar opsiyonel — doldurursanız görüşmemize hazır önerilerle geliriz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="container mx-auto px-4 md:px-6 py-10 flex flex-col gap-5" style={{ maxWidth: 880 }}>

          {/* 01 — İletişim */}
          <div className="bg-white border border-[#E5E5E3] p-8 flex flex-col gap-6">
            <SectionHeader num="01" title="İLETİŞİM BİLGİLERİ" sub="Contact details — zorunlu alan" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                ['ad', 'AD / FIRST NAME', '', true],
                ['soyad', 'SOYAD / LAST NAME', '', true],
                ['firma', 'FİRMA ADI / COMPANY NAME', 'Örn. Leyonex Dış Ticaret A.Ş.', true],
                ['unvan', 'UNVANINIZ / TITLE', 'Örn. İhracat Müdürü', false],
                ['eposta', 'E-POSTA / E-MAIL', '', true],
                ['telefon', 'TELEFON / PHONE', '+90', true],
                ['web', 'WEB SİTESİ / WEBSITE', 'www.', false],
              ].map(([k, l, ph, req]) => (
                <div key={k as string}>
                  <Label>{l as string}{req ? <span className="text-[#CB3234] ml-0.5">*</span> : null}</Label>
                  <input
                    type={k === 'eposta' ? 'email' : 'text'}
                    name={k as string}
                    value={form[k as string] || ''}
                    onChange={e => set(k as string, e.target.value)}
                    placeholder={ph as string}
                    className={field}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Optional toggle */}
          <div className="bg-white border border-[#E5E5E3] p-6 flex flex-wrap items-center justify-between gap-5">
            <div className="flex flex-col gap-2 max-w-lg">
              <span className="block w-10 h-0.5 bg-[#CB3234] mb-1" />
              <span className="font-black text-lg text-[#1a1a1a]">DETAYLI BRİEF — OPSİYONEL</span>
              <span className="text-sm text-[#666] leading-relaxed">
                Aşağıdaki detayları doldurmanız, görüşmemizden önce fuar hedeflerinizi çalışıp size hazır önerilerle gelmemizi sağlıyor.
              </span>
            </div>
            <button type="button" onClick={() => setDetay(d => !d)}
              className="flex items-center gap-2 border border-[#1a1a1a] px-5 py-2.5 text-sm font-bold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors shrink-0"
            >
              {detay ? 'Detayları gizle' : 'Detayları doldurayım'}
              {detay ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {detay && (
            <>
              {/* 02 — Fuar ve Stand */}
              <div className="bg-white border border-[#E5E5E3] p-8 flex flex-col gap-6">
                <SectionHeader num="02" title="FUAR VE STAND" sub="Fair & stand" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    ['fuar', 'FUAR ADI / FAIR NAME', ''],
                    ['sehir', 'ŞEHİR VE ÜLKE / CITY & COUNTRY', ''],
                    ['tarih', 'TARİHLER / DATES', '12–15 Mart 2027'],
                    ['alan', 'STAND ALANI (M²) / STAND AREA', 'Örn. 48 m² (6×8)'],
                    ['standNo', 'HOL VE STAND NO / HALL & STAND NO', 'Örn. Hol 5 / B-118'],
                  ].map(([k, l, ph]) => (
                    <div key={k as string}>
                      <Label>{l as string}</Label>
                      <input type="text" name={k as string} value={form[k as string] || ''}
                        onChange={e => set(k as string, e.target.value)}
                        placeholder={ph as string} className={field} />
                    </div>
                  ))}
                </div>
                {/* Stand tipi */}
                <div>
                  <Label>STAND TİPİ / STAND TYPE</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {['Sıra — 1 cephe', 'Köşe — 2 cephe', 'Yarım ada — 3 cephe', 'Ada — 4 cephe', 'Henüz belli değil'].map(opt => (
                      <label key={opt}
                        className={`flex items-center gap-2.5 border px-3.5 py-2.5 text-sm cursor-pointer transition-colors
                          ${form.standTipi === opt ? 'border-[#1a1a1a] text-[#1a1a1a] font-semibold' : 'border-[#E5E5E3] text-[#666] hover:border-[#999]'}`}
                      >
                        <input type="radio" name="standTipi" value={opt}
                          checked={form.standTipi === opt}
                          onChange={() => set('standTipi', opt)}
                          className="accent-[#CB3234]" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* 03 — Amaç ve Hedef Kitle */}
              <div className="bg-white border border-[#E5E5E3] p-8 flex flex-col gap-6">
                <SectionHeader num="03" title="AMAÇ VE HEDEF KİTLE" sub="Objective & audience" />

                {/* Katılım amacı */}
                <div>
                  <Label>FUARA KATILIM AMACINIZ / OBJECTIVE</Label>
                  <p className="text-[13px] text-[#999] mb-3">Amaçları ağırlıklandırın: toplamı %100 olacak şekilde dağıtın.</p>
                  <div className="border border-[#E5E5E3]">
                    {AMAC.map(([k, l]) => (
                      <PctRow key={k} label={l} name={k} value={form[k] || ''} onChange={set} />
                    ))}
                  </div>
                  <PctTotal total={amacTotal} />
                </div>

                {/* Hedef pazarlar */}
                <div>
                  <Label>HEDEF PAZARLAR / TARGET MARKETS</Label>
                  <p className="text-[13px] text-[#999] mb-3">Bu fuardaki hedefinizi pazarlara dağıtın: toplam %100.</p>
                  <div className="border border-[#E5E5E3]">
                    {PAZAR.map(([k, l]) => (
                      <PctRow key={k} label={l} name={k} value={form[k] || ''} onChange={set} />
                    ))}
                  </div>
                  <PctTotal total={pazarTotal} />
                </div>

                {/* Text areas */}
                {[
                  ['musteriProfili', 'ANA MÜŞTERİ PROFİLİ / TARGET CUSTOMER PROFILE', 'Sektör, firma büyüklüğü, karar verici pozisyon…'],
                  ['urunler', 'SERGİLENECEK ÜRÜNLER / PRODUCTS ON DISPLAY', 'Ürün adları, adet, yaklaşık ölçü ve ağırlık…'],
                  ['oneCikan', 'ÖNE ÇIKARMAK İSTEDİĞİNİZ ÜRÜN / HIGHLIGHTS', 'Standın merkezinde ne olsun? 1–3 başlık.'],
                ].map(([k, l, ph]) => (
                  <div key={k as string}>
                    <Label>{l as string}</Label>
                    <textarea name={k as string} rows={4} value={form[k as string] || ''}
                      onChange={e => set(k as string, e.target.value)}
                      placeholder={ph as string}
                      className={`${field} resize-none`} />
                  </div>
                ))}
              </div>

              {/* 04 — Marka */}
              <div className="bg-white border border-[#E5E5E3] p-8 flex flex-col gap-6">
                <SectionHeader num="04" title="MARKA" sub="Brand" />
                <div>
                  <Label>MARKANIZI RAKİPLERİNİZDEN AYIRAN 3 ÖZELLİK / TOP 3 DIFFERENTIATORS</Label>
                  <div className="flex flex-col gap-3 mt-1">
                    {['fark1', 'fark2', 'fark3'].map((k, i) => (
                      <input key={k} type="text" name={k} value={form[k] || ''}
                        onChange={e => set(k, e.target.value)}
                        placeholder={`${i + 1}.`} className={field} />
                    ))}
                  </div>
                </div>
                <div>
                  <Label>LOGO VE KURUMSAL KİMLİK DOSYALARI / LOGO & BRAND ASSETS</Label>
                  <input type="text" name="kimlik" value={form.kimlik || ''}
                    onChange={e => set('kimlik', e.target.value)}
                    placeholder="Drive, WeTransfer… bağlantısı"
                    className={field} />
                  <p className="text-[12px] text-[#999] mt-1">Logo (vektörel: ai, eps, svg), marka kılavuzu, renk kodları, yazı tipleri.</p>
                </div>
              </div>

              {/* 05 — Planlar, Görseller, Önceki Deneyim */}
              <div className="bg-white border border-[#E5E5E3] p-8 flex flex-col gap-6">
                <SectionHeader num="05" title="PLANLAR, GÖRSELLER VE ÖNCEKİ DENEYİM" sub="Plans, visuals & past experience" />
                <div className="bg-[#F8F8F6] border border-[#E5E5E3] px-4 py-3 text-[13px] text-[#666] leading-relaxed">
                  Dosyaları bağlantı olarak (Drive, WeTransfer, Dropbox) ekleyebilir ya da bu formu gönderdikten sonra mail / WhatsApp ile iletebilirsiniz.
                </div>
                {[
                  ['standPlani', 'MEVCUT STAND PLANI / CURRENT STAND PLAN', 'Bağlantı', 'Stand no, m² ve açık cepheleri gösteren organizatör planı.'],
                  ['eskiStand', 'ÖNCEKİ FUAR / STAND GÖRSELLERİNİZ / PREVIOUS STANDS', 'Bağlantı', 'Birkaç görsel yeterli.'],
                ].map(([k, l, ph, hint]) => (
                  <div key={k as string}>
                    <Label>{l as string}</Label>
                    <input type="text" name={k as string} value={form[k as string] || ''}
                      onChange={e => set(k as string, e.target.value)}
                      placeholder={ph as string} className={field} />
                    {hint && <p className="text-[12px] text-[#999] mt-1">{hint as string}</p>}
                  </div>
                ))}
                <div>
                  <Label>BEĞENDİĞİNİZ STAND ÖRNEKLERİ / STAND REFERENCES YOU LIKE</Label>
                  <textarea name="referans" rows={4} value={form.referans || ''}
                    onChange={e => set('referans', e.target.value)}
                    placeholder="Bağlantılar ve kısa not: neyi beğendiniz? (malzeme, açıklık, ışık, marka duruşu…)"
                    className={`${field} resize-none`} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    ['memnun', 'GEÇEN FUARLARDA MEMNUN KALDIĞINIZ KONULAR / WHAT WORKED', 'Örn. stand akışı, montaj takvimi…'],
                    ['memnunsuz', 'MEMNUN KALMADIĞINIZ KONULAR / WHAT DID NOT WORK', 'Örn. son dakika değişiklikler, maliyet sürprizleri…'],
                  ].map(([k, l, ph]) => (
                    <div key={k as string}>
                      <Label>{l as string}</Label>
                      <textarea name={k as string} rows={4} value={form[k as string] || ''}
                        onChange={e => set(k as string, e.target.value)}
                        placeholder={ph as string}
                        className={`${field} resize-none`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — Stand İhtiyaçları */}
              <div className="bg-white border border-[#E5E5E3] p-8 flex flex-col gap-6">
                <SectionHeader num="06" title="STAND İHTİYAÇLARI" sub="Stand requirements" />
                <p className="text-[13px] text-[#999] -mt-3">Her alan için önem derecesini seçin. Boş bırakılanlar "gerekmiyor" sayılır.</p>

                <div className="flex justify-end gap-2 pb-2">
                  <span className="w-[120px] text-center text-[11px] font-bold tracking-wider text-[#CB3234]">OLMAZSA OLMAZ</span>
                  <span className="w-[120px] text-center text-[11px] font-bold tracking-wider text-[#999]">OLSA İYİ OLUR</span>
                </div>
                <div className="border-t border-[#E5E5E3]">
                  {IHT.map(([k, l]) => (
                    <div key={k} className="flex items-center justify-between gap-3 py-2.5 border-b border-[#E5E5E3]">
                      <span className="text-sm text-[#1a1a1a]">{l}</span>
                      <RadioPair name={k} value={form[k] || ''} onChange={set} />
                    </div>
                  ))}
                </div>
                <div>
                  <Label>LİSTEDE OLMAYAN BİR İHTİYAÇ / OTHER REQUIREMENT</Label>
                  <input type="text" name="ihtiyacDiger" value={form.ihtiyacDiger || ''}
                    onChange={e => set('ihtiyacDiger', e.target.value)}
                    placeholder="Varsa yazın" className={field} />
                </div>
              </div>

              {/* 07 — Kapsam ve Sonraki Adım */}
              <div className="bg-white border border-[#E5E5E3] p-8 flex flex-col gap-6">
                <SectionHeader num="07" title="KAPSAM VE SONRAKİ ADIM" sub="Scope & next step" />

                {/* Kapsam checkboxları */}
                <div>
                  <Label>LEYONEX&apos;TEN BEKLEDİĞİNİZ KAPSAM / SCOPE</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {KAPSAM.map(opt => (
                      <label key={opt}
                        className={`flex items-center gap-2.5 border px-3.5 py-2.5 text-sm cursor-pointer transition-colors
                          ${kapsam.includes(opt) ? 'border-[#1a1a1a] text-[#1a1a1a] font-semibold' : 'border-[#E5E5E3] text-[#666] hover:border-[#999]'}`}
                      >
                        <input type="checkbox" value={opt} name="kapsam"
                          checked={kapsam.includes(opt)}
                          onChange={() => toggleKapsam(opt)}
                          className="accent-[#CB3234]" />
                        {opt}
                      </label>
                    ))}
                  </div>
                  <div className="mt-3 border-l-2 border-[#CB3234] bg-[#fffbf9] px-4 py-3 text-[13px] text-[#1a1a1a] leading-relaxed">
                    Her projede standart olarak dahildir: <strong>ziyaretçi kayıt yazılımı (ücretsiz)</strong> ve <strong>fuar sonrası raporlama</strong>.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    ['olmazsaOlmaz', 'SİZİN İÇİN OLMAZSA OLMAZLAR / MUST-HAVES', 'Bu projede kesinlikle olması gerekenler…'],
                    ['olsaIyiOlur', 'OLSA İYİ OLUR / NICE TO HAVE', 'Bütçe ve süre elverirse eklemek istedikleriniz…'],
                  ].map(([k, l, ph]) => (
                    <div key={k as string}>
                      <Label>{l as string}</Label>
                      <textarea name={k as string} rows={4} value={form[k as string] || ''}
                        onChange={e => set(k as string, e.target.value)}
                        placeholder={ph as string}
                        className={`${field} resize-none`} />
                    </div>
                  ))}
                </div>

                {/* Görüşme tercihi */}
                <div>
                  <Label>BİR SONRAKİ GÖRÜŞME / NEXT MEETING</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {['Yüz yüze toplantı', 'Online toplantı', 'Mail yoluyla devam'].map(opt => (
                      <label key={opt}
                        className={`flex items-center gap-2.5 border px-3.5 py-2.5 text-sm cursor-pointer transition-colors
                          ${form.gorusme === opt ? 'border-[#1a1a1a] text-[#1a1a1a] font-semibold' : 'border-[#E5E5E3] text-[#666] hover:border-[#999]'}`}
                      >
                        <input type="radio" name="gorusme" value={opt}
                          checked={form.gorusme === opt}
                          onChange={() => set('gorusme', opt)}
                          className="accent-[#CB3234]" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label>TERCİH ETTİĞİNİZ TARİH / SAAT / PREFERRED TIME</Label>
                    <input type="text" name="gorusmeZaman" value={form.gorusmeZaman || ''}
                      onChange={e => set('gorusmeZaman', e.target.value)}
                      placeholder="Örn. 18 Eylül, öğleden sonra" className={field} />
                  </div>
                  <div>
                    <Label>KARAR TARİHİ / DECISION DATE</Label>
                    <input type="text" name="karar" value={form.karar || ''}
                      onChange={e => set('karar', e.target.value)}
                      placeholder="Örn. Ekim başı" className={field} />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Dosya eki */}
          <div className="bg-white border border-[#E5E5E3] p-8 flex flex-col gap-4">
            <div>
              <Label>DOSYA EKİ / ATTACHMENTS</Label>
              <p className="text-[13px] text-[#999] mb-3">Varsa stand planı, görseller veya teknik belgeler. Maksimum toplam 10 MB.</p>
            </div>
            <div>
              <button type="button" onClick={() => fileRef.current?.click()}
                className="flex items-center gap-2.5 border border-dashed border-[#C8C8C6] px-5 py-3.5 text-sm text-[#666] hover:border-[#CB3234] hover:text-[#CB3234] transition-colors"
              >
                <Upload size={15} />
                Dosya seç
              </button>
              <input ref={fileRef} type="file" multiple className="hidden"
                accept=".pdf,.jpg,.jpeg,.png,.gif,.zip,.dwg,.ai,.eps,.svg,.doc,.docx,.xls,.xlsx"
                onChange={handleFileChange}
              />
            </div>
            {files.length > 0 && (
              <ul className="flex flex-col gap-1.5">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 bg-[#F8F8F6] border border-[#E5E5E3] px-3 py-2">
                    <span className="text-sm text-[#1a1a1a] truncate">{f.name}</span>
                    <span className="text-xs text-[#999] shrink-0">{(f.size / 1024).toFixed(0)} KB</span>
                    <button type="button" onClick={() => removeFile(i)}
                      className="text-[#999] hover:text-[#CB3234] transition-colors shrink-0"
                    >
                      <X size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit */}
          <div className="bg-[#1a1a1a] p-8 flex flex-wrap items-center justify-between gap-5">
            <div className="flex flex-col gap-2 max-w-lg">
              <span className="font-black text-lg text-white">FORMU TAMAMLADINIZ MI?</span>
              <span className="text-sm text-[#888] leading-relaxed">Cevaplarınızı inceleyip size en kısa sürede ulaşacağız.</span>
              {hata && (
                <div className="border-l-2 border-[#CB3234] bg-[#2a1a1a] px-3 py-2 text-[13px] text-[#ffb3b6] leading-relaxed">
                  {hata}
                </div>
              )}
            </div>
            <button type="submit" disabled={loading}
              className="flex items-center gap-2.5 bg-[#CB3234] text-white font-bold px-7 py-3.5 text-sm hover:bg-[#A8282A] disabled:opacity-60 transition-colors shrink-0"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <>Evet, gönder <ArrowRight size={14} /></>}
            </button>
          </div>

        </form>
      </main>
      <Footer />
    </>
  );
}
