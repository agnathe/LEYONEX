import type { Metadata } from "next";
import DetailedBriefForm from "@/components/forms/DetailedBriefForm";

// İlk görüşmeden sonra firmayla paylaşılan ayrıntılı form. Menüde ve site haritasında
// yer almaz; arama motorlarına kapalıdır. Bağlantıya sahip herkes açabilir.
export const metadata: Metadata = {
  title: "Fuar Bilgi Formu",
  description:
    "İlk görüşmenin ardından fuar hazırlığını birlikte planlamak için kullanılan ayrıntılı fuar bilgi formu.",
  robots: { index: false, follow: false },
};

export default function FuarBilgiFormuPage() {
  return <DetailedBriefForm />;
}
