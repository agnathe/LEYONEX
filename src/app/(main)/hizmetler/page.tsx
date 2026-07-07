import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata = {
  title: "Hizmetlerimiz - Leyonex",
  description: "Fuar organizasyonu için tüm hizmetlerimizi keşfedin. Stand tasarımından danışmanlığa kadar.",
};

export default function HizmetlerPage() {
	return (
		<>
			<Header />
			<main className="min-h-screen pt-20 bg-[#F8F8F6]">
				{/* Page hero */}
				<div className="bg-white border-b border-[#E5E5E3]">
					<div className="container mx-auto px-4 md:px-6 py-14">
						<div className="flex items-center gap-3 mb-4">
							<div className="w-8 h-px bg-[#CB3234]" />
							<span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">Hizmetler</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">
							İhtiyacınız Olan Her Şey, Tek Noktadan
						</h1>
						<p className="text-[#555] text-lg max-w-xl">
							Paket değil, seçilebilir hizmetler. Fuar öncesinden sonrasına her aşamada yanınızdayız.
						</p>
					</div>
				</div>
				<ServicesGrid />
			</main>
			<Footer />
		</>
	);
}
