import { permanentRedirect } from "next/navigation";

// Proje detay sayfaları firma, fuar ve alan bilgisi yayınladığı için kaldırıldı.
// Eski bağlantılar referans galerisine kalıcı olarak yönlendirilir.
export default function ProjectDetailPage() {
  permanentRedirect("/projeler");
}
