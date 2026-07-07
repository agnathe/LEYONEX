import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsVideoSection from "@/components/sections/ProjectsVideoSection";

export const metadata = {
  title: "Projeler - Leyonex",
  description: "Leyonex fuar organizasyon projeleri ve referansları.",
};

export default function ProjelerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <ProjectsVideoSection />
      </main>
      <Footer />
    </>
  );
}
