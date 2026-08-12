'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { trackEvent } from '@/lib/analytics';

interface FormData {
  // Firma Bilgileri
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  taxNumber: string;
  address: string;

  // Fuar Bilgileri
  fairName: string;
  fairDate: string;
  fairLocation: string;
  standSize: string;
  expectedVisitors: string;

  // Stand Tasarımı & Kurulumu
  standDesign: boolean;
  standTypes: string[];
  standNotes: string;

  // Hostes & Personel
  hostesService: boolean;
  hostesCount: string;
  hostesLanguages: string[];
  hostesDuration: string;
  hostesNotes: string;

  // Konaklama
  accommodationService: boolean;
  accommodationParticipants: string;
  accommodationDuration: string;
  accommodationHotelCategory: string;
  accommodationNotes: string;

  // İkram Hizmetleri
  cateringService: boolean;
  cateringTypes: string[];
  cateringDailyVisitors: string;
  cateringNotes: string;

  // Fotoğraf & Video
  photographyService: boolean;
  photographyTypes: string[];
  photographyDuration: string;
  photographyNotes: string;

  // Ulaşım
  transportationService: boolean;
  transportationTypes: string[];
  transportationParticipants: string;
  transportationNotes: string;

  // Kurumsal Hediye
  giftService: boolean;
  giftTypes: string[];
  giftQuantity: string;
  giftBudget: string;
  giftNotes: string;

  // Gala & Etkinlik
  galaService: boolean;
  galaType: string;
  galaParticipants: string;
  galaVenue: string;
  galaNotes: string;

  // Danışmanlık
  consultingService: boolean;
  consultingTypes: string[];
  consultingNotes: string;

  // Bütçe ve Genel Notlar
  budget: string;
  generalNotes: string;
}

export default function TeklifAlPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    taxNumber: '',
    address: '',
    fairName: '',
    fairDate: '',
    fairLocation: '',
    standSize: '',
    expectedVisitors: '',
    standDesign: false,
    standTypes: [],
    standNotes: '',
    hostesService: false,
    hostesCount: '',
    hostesLanguages: [],
    hostesDuration: '',
    hostesNotes: '',
    accommodationService: false,
    accommodationParticipants: '',
    accommodationDuration: '',
    accommodationHotelCategory: '',
    accommodationNotes: '',
    cateringService: false,
    cateringTypes: [],
    cateringDailyVisitors: '',
    cateringNotes: '',
    photographyService: false,
    photographyTypes: [],
    photographyDuration: '',
    photographyNotes: '',
    transportationService: false,
    transportationTypes: [],
    transportationParticipants: '',
    transportationNotes: '',
    giftService: false,
    giftTypes: [],
    giftQuantity: '',
    giftBudget: '',
    giftNotes: '',
    galaService: false,
    galaType: '',
    galaParticipants: '',
    galaVenue: '',
    galaNotes: '',
    consultingService: false,
    consultingTypes: [],
    consultingNotes: '',
    budget: '',
    generalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleArrayItem = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[];
    setFormData({
      ...formData,
      [field]: currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        trackEvent('generate_lead', {
          form_name: 'quote_request',
          fair_name: formData.fairName,
          fair_location: formData.fairLocation,
          stand_size: formData.standSize || undefined,
          services_selected: [
            formData.standDesign && 'stand_tasarimi',
            formData.hostesService && 'hostes',
            formData.accommodationService && 'konaklama',
            formData.cateringService && 'ikram',
            formData.photographyService && 'fotograf_video',
            formData.transportationService && 'ulasim',
            formData.giftService && 'kurumsal_hediye',
            formData.galaService && 'gala',
            formData.consultingService && 'danismanlik',
          ].filter(Boolean),
          budget_range: formData.budget || 'belirtilmedi',
        });
        alert('✅ Talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        window.location.reload();
      } else {
        alert('❌ Bir hata oluştu: ' + result.message);
      }
    } catch (error) {
      alert('❌ Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step < 4) {
      trackEvent('quote_form_step', { step_from: step, step_to: step + 1 });
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.companyName && formData.contactPerson && formData.email && formData.phone;
      case 2:
        return formData.fairName && formData.fairDate && formData.fairLocation;
      case 3:
        return true; // Hizmet seçimi opsiyonel
      case 4:
        return true;
      default:
        return false;
    }
  };

  const hasAnyService = () => {
    return formData.standDesign || formData.hostesService || formData.accommodationService ||
           formData.cateringService || formData.photographyService || formData.transportationService ||
           formData.giftService || formData.galaService || formData.consultingService;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fuar Organizasyon Teklif Formu
            </h1>
            <p className="text-slate-300 text-lg">
              Detaylı bilgilerinizi paylaşarak özelleştirilmiş teklif alın
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= num
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-700 text-slate-400'
                    }`}
                  >
                    {step === num && '●'}
                    {step > num && '✓'}
                    {step < num && num}
                  </div>
                  {num < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > num ? 'bg-orange-500' : 'bg-slate-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs md:text-sm text-slate-400">
              <span>Firma</span>
              <span>Fuar</span>
              <span>Hizmetler</span>
              <span>Bütçe</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-slate-800 rounded-lg p-6 md:p-8 shadow-xl">

            {/* ==================== STEP 1: FİRMA BİLGİLERİ ==================== */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-3">
                  📋 Firma Bilgileri
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      Firma Adı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Firma adınız"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      Yetkili Kişi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Ad Soyad"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="ornek@firma.com"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      Vergi Numarası
                    </label>
                    <input
                      type="text"
                      name="taxNumber"
                      value={formData.taxNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Vergi numarası (opsiyonel)"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 mb-2 font-medium">
                      Firma Adresi
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Adres (opsiyonel)"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ==================== STEP 2: FUAR BİLGİLERİ ==================== */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-3">
                  🎪 Fuar Bilgileri
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 mb-2 font-medium">
                      Fuar Adı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fairName"
                      value={formData.fairName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Katılacağınız fuar"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      Fuar Tarihi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="fairDate"
                      value={formData.fairDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      Lokasyon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fairLocation"
                      value={formData.fairLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Şehir, Ülke"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      Stand Alanı (m²)
                    </label>
                    <input
                      type="number"
                      name="standSize"
                      value={formData.standSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Örn: 48"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                      Beklenen Ziyaretçi
                    </label>
                    <input
                      type="number"
                      name="expectedVisitors"
                      value={formData.expectedVisitors}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Örn: 500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ==================== STEP 3: HİZMETLER ==================== */}
            {step === 3 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-3">
                  🛠️ Hizmet Seçimi
                </h2>

                {/* 1. STAND TASARIMI */}
                <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.standDesign}
                      onChange={(e) => setFormData({ ...formData, standDesign: e.target.checked })}
                      className="w-6 h-6 text-purple-500 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    />
                    <span className="ml-3 text-xl font-bold text-purple-300">
                      Stand Tasarımı & Kurulumu
                    </span>
                  </label>

                  {formData.standDesign && (
                    <div className="mt-6 ml-8 space-y-4">
                      <p className="text-slate-400">Tercih edilen stand tipi (birden fazla seçebilirsiniz)</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: 'Ekonomik / modüler', emoji: '📦' },
                          { value: 'Orta seviye özel tasarım', emoji: '🎨' },
                          { value: 'Premium, dikkat çekici', emoji: '⭐' },
                          { value: 'Dijital ekranlı / yenilikçi', emoji: '💻' },
                        ].map((type) => (
                          <label
                            key={type.value}
                            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                              formData.standTypes.includes(type.value)
                                ? 'bg-purple-600 text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.standTypes.includes(type.value)}
                              onChange={() => toggleArrayItem('standTypes', type.value)}
                              className="sr-only"
                            />
                            <span className="text-xl mr-2">{type.emoji}</span>
                            <span className="text-sm">{type.value}</span>
                          </label>
                        ))}
                      </div>

                      <textarea
                        name="standNotes"
                        value={formData.standNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        placeholder="Stand tasarımı hakkında ek bilgiler..."
                      />
                    </div>
                  )}
                </div>

                {/* 2. HOSTES & PERSONEL */}
                <div className="bg-blue-900/20 border-2 border-blue-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hostesService}
                      onChange={(e) => setFormData({ ...formData, hostesService: e.target.checked })}
                      className="w-6 h-6 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-xl font-bold text-blue-300">
                      Hostes & Personel Desteği
                    </span>
                  </label>

                  {formData.hostesService && (
                    <div className="mt-6 ml-8 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Hostes Sayısı</label>
                          <input
                            type="number"
                            name="hostesCount"
                            value={formData.hostesCount}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            placeholder="Örn: 2"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Çalışma Süresi</label>
                          <input
                            type="text"
                            name="hostesDuration"
                            value={formData.hostesDuration}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            placeholder="Örn: 3 gün, 8 saat/gün"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="text-slate-400 mb-2 text-sm">Dil Yetkinlikleri</p>
                        <div className="flex flex-wrap gap-2">
                          {['Türkçe', 'İngilizce', 'Almanca', 'Fransızca', 'İtalyanca', 'İspanyolca', 'Rusça', 'Arapça', 'Çince'].map((lang) => (
                            <label
                              key={lang}
                              className={`px-3 py-1 rounded-full cursor-pointer transition-colors text-sm ${
                                formData.hostesLanguages.includes(lang)
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.hostesLanguages.includes(lang)}
                                onChange={() => toggleArrayItem('hostesLanguages', lang)}
                                className="sr-only"
                              />
                              {lang}
                            </label>
                          ))}
                        </div>
                      </div>

                      <textarea
                        name="hostesNotes"
                        value={formData.hostesNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Ek bilgiler..."
                      />
                    </div>
                  )}
                </div>

                {/* 3. KONAKLAMA */}
                <div className="bg-green-900/20 border-2 border-green-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.accommodationService}
                      onChange={(e) => setFormData({ ...formData, accommodationService: e.target.checked })}
                      className="w-6 h-6 text-green-500 bg-slate-700 border-slate-600 rounded focus:ring-green-500"
                    />
                    <span className="ml-3 text-xl font-bold text-green-300">
                      Konaklama Organizasyonu
                    </span>
                  </label>

                  {formData.accommodationService && (
                    <div className="mt-6 ml-8 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Katılımcı Sayısı</label>
                          <input
                            type="number"
                            name="accommodationParticipants"
                            value={formData.accommodationParticipants}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="Örn: 5"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Konaklama Süresi</label>
                          <input
                            type="text"
                            name="accommodationDuration"
                            value={formData.accommodationDuration}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="Örn: 4 gece"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Otel Kategorisi</label>
                          <select
                            name="accommodationHotelCategory"
                            value={formData.accommodationHotelCategory}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                          >
                            <option value="">Seçiniz</option>
                            <option value="3-star">3 Yıldız</option>
                            <option value="4-star">4 Yıldız</option>
                            <option value="5-star">5 Yıldız</option>
                          </select>
                        </div>
                      </div>

                      <textarea
                        name="accommodationNotes"
                        value={formData.accommodationNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        placeholder="Özel talepler..."
                      />
                    </div>
                  )}
                </div>

                {/* 4. İKRAM HİZMETLERİ */}
                <div className="bg-yellow-900/20 border-2 border-yellow-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.cateringService}
                      onChange={(e) => setFormData({ ...formData, cateringService: e.target.checked })}
                      className="w-6 h-6 text-yellow-500 bg-slate-700 border-slate-600 rounded focus:ring-yellow-500"
                    />
                    <span className="ml-3 text-xl font-bold text-yellow-300">
                      Stand İkram Hizmetleri
                    </span>
                  </label>

                  {formData.cateringService && (
                    <div className="mt-6 ml-8 space-y-4">
                      <div>
                        <p className="text-slate-400 mb-2 text-sm">İkram Türü</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {['Kahve & Çay', 'Soğuk İçecekler', 'Atıştırmalıklar', 'Sandviç', 'Pasta & Tatlı', 'Meyve'].map((item) => (
                            <label
                              key={item}
                              className={`px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm text-center ${
                                formData.cateringTypes.includes(item)
                                  ? 'bg-yellow-600 text-white'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.cateringTypes.includes(item)}
                                onChange={() => toggleArrayItem('cateringTypes', item)}
                                className="sr-only"
                              />
                              {item}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-2 text-sm">Günlük Tahmini Ziyaretçi</label>
                        <input
                          type="number"
                          name="cateringDailyVisitors"
                          value={formData.cateringDailyVisitors}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                          placeholder="Örn: 100"
                        />
                      </div>

                      <textarea
                        name="cateringNotes"
                        value={formData.cateringNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                        placeholder="Ek notlar..."
                      />
                    </div>
                  )}
                </div>

                {/* 5. FOTOĞRAF & VİDEO */}
                <div className="bg-pink-900/20 border-2 border-pink-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.photographyService}
                      onChange={(e) => setFormData({ ...formData, photographyService: e.target.checked })}
                      className="w-6 h-6 text-pink-500 bg-slate-700 border-slate-600 rounded focus:ring-pink-500"
                    />
                    <span className="ml-3 text-xl font-bold text-pink-300">
                      Fotoğraf & Video Çekimi
                    </span>
                  </label>

                  {formData.photographyService && (
                    <div className="mt-6 ml-8 space-y-4">
                      <div>
                        <p className="text-slate-400 mb-2 text-sm">Hizmet Türü</p>
                        <div className="grid grid-cols-2 gap-2">
                          {['Fotoğraf Çekimi', 'Video Çekimi', 'Drone Çekimi', 'Canlı Yayın', '360° Görsel'].map((type) => (
                            <label
                              key={type}
                              className={`px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm text-center ${
                                formData.photographyTypes.includes(type)
                                  ? 'bg-pink-600 text-white'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.photographyTypes.includes(type)}
                                onChange={() => toggleArrayItem('photographyTypes', type)}
                                className="sr-only"
                              />
                              {type}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-2 text-sm">Çekim Süresi</label>
                        <input
                          type="text"
                          name="photographyDuration"
                          value={formData.photographyDuration}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                          placeholder="Örn: Tüm fuar boyunca / 1 gün"
                        />
                      </div>

                      <textarea
                        name="photographyNotes"
                        value={formData.photographyNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                        placeholder="Özel talepler..."
                      />
                    </div>
                  )}
                </div>

                {/* 6. ULAŞIM */}
                <div className="bg-indigo-900/20 border-2 border-indigo-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.transportationService}
                      onChange={(e) => setFormData({ ...formData, transportationService: e.target.checked })}
                      className="w-6 h-6 text-indigo-500 bg-slate-700 border-slate-600 rounded focus:ring-indigo-500"
                    />
                    <span className="ml-3 text-xl font-bold text-indigo-300">
                      Ulaşım Hizmetleri
                    </span>
                  </label>

                  {formData.transportationService && (
                    <div className="mt-6 ml-8 space-y-4">
                      <div>
                        <p className="text-slate-400 mb-2 text-sm">Ulaşım Türü</p>
                        <div className="grid grid-cols-2 gap-2">
                          {['Havalimanı Transferi', 'Otel-Fuar Transferi', 'VIP Araç', 'Minibüs'].map((type) => (
                            <label
                              key={type}
                              className={`px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm text-center ${
                                formData.transportationTypes.includes(type)
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.transportationTypes.includes(type)}
                                onChange={() => toggleArrayItem('transportationTypes', type)}
                                className="sr-only"
                              />
                              {type}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-2 text-sm">Katılımcı Sayısı</label>
                        <input
                          type="number"
                          name="transportationParticipants"
                          value={formData.transportationParticipants}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                          placeholder="Örn: 8"
                        />
                      </div>

                      <textarea
                        name="transportationNotes"
                        value={formData.transportationNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        placeholder="Özel güzergah, saat gibi detaylar..."
                      />
                    </div>
                  )}
                </div>

                {/* 7. KURUMSAL HEDİYE */}
                <div className="bg-red-900/20 border-2 border-red-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.giftService}
                      onChange={(e) => setFormData({ ...formData, giftService: e.target.checked })}
                      className="w-6 h-6 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-500"
                    />
                    <span className="ml-3 text-xl font-bold text-red-300">
                      Kurumsal Hediyelik Ürünler
                    </span>
                  </label>

                  {formData.giftService && (
                    <div className="mt-6 ml-8 space-y-4">
                      <div>
                        <p className="text-slate-400 mb-2 text-sm">Hediye Türü</p>
                        <div className="grid grid-cols-2 gap-2">
                          {['Promosyon Ürünleri', 'Teknolojik Ürünler', 'Ofis Malzemeleri', 'Tekstil Ürünleri', 'Özel Tasarım'].map((type) => (
                            <label
                              key={type}
                              className={`px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm text-center ${
                                formData.giftTypes.includes(type)
                                  ? 'bg-red-600 text-white'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.giftTypes.includes(type)}
                                onChange={() => toggleArrayItem('giftTypes', type)}
                                className="sr-only"
                              />
                              {type}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Adet</label>
                          <input
                            type="number"
                            name="giftQuantity"
                            value={formData.giftQuantity}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                            placeholder="Örn: 500"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Birim Bütçe</label>
                          <input
                            type="text"
                            name="giftBudget"
                            value={formData.giftBudget}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                            placeholder="Örn: 5-10 EUR"
                          />
                        </div>
                      </div>

                      <textarea
                        name="giftNotes"
                        value={formData.giftNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        placeholder="Özel tasarım detayları..."
                      />
                    </div>
                  )}
                </div>

                {/* 8. GALA & ETKİNLİK */}
                <div className="bg-cyan-900/20 border-2 border-cyan-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.galaService}
                      onChange={(e) => setFormData({ ...formData, galaService: e.target.checked })}
                      className="w-6 h-6 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <span className="ml-3 text-xl font-bold text-cyan-300">
                      Gala & Etkinlik Organizasyonu
                    </span>
                  </label>

                  {formData.galaService && (
                    <div className="mt-6 ml-8 space-y-4">
                      <div>
                        <label className="block text-slate-300 mb-2 text-sm">Etkinlik Türü</label>
                        <select
                          name="galaType"
                          value={formData.galaType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                        >
                          <option value="">Seçiniz</option>
                          <option value="Gala Yemeği">Gala Yemeği</option>
                          <option value="Kokteyl">Kokteyl</option>
                          <option value="Lansman">Lansman Etkinliği</option>
                          <option value="Networking">Networking Etkinliği</option>
                          <option value="Özel">Özel Etkinlik</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Katılımcı Sayısı</label>
                          <input
                            type="number"
                            name="galaParticipants"
                            value={formData.galaParticipants}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                            placeholder="Örn: 150"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 mb-2 text-sm">Mekan Tercihi</label>
                          <input
                            type="text"
                            name="galaVenue"
                            value={formData.galaVenue}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                            placeholder="Otel / Restoran vb."
                          />
                        </div>
                      </div>

                      <textarea
                        name="galaNotes"
                        value={formData.galaNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                        placeholder="Özel talepler (müzik, dekorasyon vb.)..."
                      />
                    </div>
                  )}
                </div>

                {/* 9. DANIŞMANLIK */}
                <div className="bg-teal-900/20 border-2 border-teal-500/30 rounded-lg p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consultingService}
                      onChange={(e) => setFormData({ ...formData, consultingService: e.target.checked })}
                      className="w-6 h-6 text-teal-500 bg-slate-700 border-slate-600 rounded focus:ring-teal-500"
                    />
                    <span className="ml-3 text-xl font-bold text-teal-300">
                      Danışmanlık Hizmetleri
                    </span>
                  </label>

                  {formData.consultingService && (
                    <div className="mt-6 ml-8 space-y-4">
                      <div>
                        <p className="text-slate-400 mb-2 text-sm">Danışmanlık Alanları</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {['Fuar Seçimi', 'Stand Lokasyon Analizi', 'Ziyaretçi Analizi', 'Pazarlama Stratejisi', 'Bütçe Planlama', 'Lojistik Danışmanlık'].map((type) => (
                            <label
                              key={type}
                              className={`px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm text-center ${
                                formData.consultingTypes.includes(type)
                                  ? 'bg-teal-600 text-white'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.consultingTypes.includes(type)}
                                onChange={() => toggleArrayItem('consultingTypes', type)}
                                className="sr-only"
                              />
                              {type}
                            </label>
                          ))}
                        </div>
                      </div>

                      <textarea
                        name="consultingNotes"
                        value={formData.consultingNotes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        placeholder="Danışmanlık ihtiyacınız hakkında detaylar..."
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ==================== STEP 4: BÜTÇE & GENEL NOTLAR ==================== */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-3">
                  💰 Bütçe ve Son Notlar
                </h2>

                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    Tahmini Toplam Bütçe Aralığı
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Seçiniz (Opsiyonel)</option>
                    <option value="0-25000">0 - 25.000 EUR</option>
                    <option value="25000-50000">25.000 - 50.000 EUR</option>
                    <option value="50000-100000">50.000 - 100.000 EUR</option>
                    <option value="100000-200000">100.000 - 200.000 EUR</option>
                    <option value="200000+">200.000+ EUR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    Genel Notlar ve Özel İstekler
                  </label>
                  <textarea
                    name="generalNotes"
                    value={formData.generalNotes}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tüm hizmetlerle ilgili özel talepleriniz, ek bilgiler veya sorularınız..."
                  />
                </div>

                {/* ÖZET */}
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-lg border border-slate-500">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-2">📋</span> Talep Özeti
                  </h3>
                  <div className="space-y-3 text-slate-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-slate-400 text-sm">Firma</p>
                        <p className="font-semibold">{formData.companyName}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Yetkili</p>
                        <p className="font-semibold">{formData.contactPerson}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">E-posta</p>
                        <p className="font-semibold">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Telefon</p>
                        <p className="font-semibold">{formData.phone}</p>
                      </div>
                    </div>

                    <hr className="border-slate-500" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-slate-400 text-sm">Fuar</p>
                        <p className="font-semibold">{formData.fairName}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Tarih</p>
                        <p className="font-semibold">{formData.fairDate}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Lokasyon</p>
                        <p className="font-semibold">{formData.fairLocation}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Stand Alanı</p>
                        <p className="font-semibold">{formData.standSize ? `${formData.standSize} m²` : '-'}</p>
                      </div>
                    </div>

                    <hr className="border-slate-500" />

                    <div>
                      <p className="text-slate-400 text-sm mb-2">Seçilen Hizmetler</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.standDesign && (
                          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs">Stand Tasarımı</span>
                        )}
                        {formData.hostesService && (
                          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs">Hostes & Personel</span>
                        )}
                        {formData.accommodationService && (
                          <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs">Konaklama</span>
                        )}
                        {formData.cateringService && (
                          <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-xs">İkram</span>
                        )}
                        {formData.photographyService && (
                          <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-xs">Fotoğraf & Video</span>
                        )}
                        {formData.transportationService && (
                          <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs">Ulaşım</span>
                        )}
                        {formData.giftService && (
                          <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs">Kurumsal Hediye</span>
                        )}
                        {formData.galaService && (
                          <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-xs">Gala & Etkinlik</span>
                        )}
                        {formData.consultingService && (
                          <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-xs">Danışmanlık</span>
                        )}
                        {!hasAnyService() && (
                          <span className="text-slate-400 text-sm">Henüz hizmet seçilmedi</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== NAVİGASYON BUTONLARI ==================== */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors font-medium"
                >
                  ← Geri
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="ml-auto px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors font-bold"
                >
                  İleri →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto px-10 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  {isSubmitting ? '⏳ Gönderiliyor...' : '✓ Talebi Gönder'}
                </button>
              )}
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
