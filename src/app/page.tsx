import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HomeNarrative from "@/components/home/HomeNarrative";
import WorkloadSection from "@/components/home/WorkloadSection";
import ServicesSection from "@/components/home/ServicesSection";
import MethodSection from "@/components/home/MethodSection";
import ProjectStories from "@/components/home/ProjectStories";
import CremaSection from "@/components/home/CremaSection";
import GuideSection from "@/components/home/GuideSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  alternates: { canonical: "https://leyonex.com" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeNarrative />
        <WorkloadSection />
        <ServicesSection />
        <MethodSection />
        <ProjectStories />
        <CremaSection />
        <GuideSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
