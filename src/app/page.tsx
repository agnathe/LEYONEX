import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import ProcessManagement from "@/components/sections/ProcessManagement";
import StatsSection from "@/components/sections/StatsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PositioningSection from "@/components/sections/PositioningSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<ProcessManagement />
				<StatsSection />
				<ServicesGrid />
				<PositioningSection />
				<FeaturedProjects />
				<CTASection />
			</main>
			<Footer />
			<WhatsAppButton />
		</>
	);
}
