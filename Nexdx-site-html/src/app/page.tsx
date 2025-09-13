import Header from "@/components/Header";
import Banner from "@/components/Banner";
import BrandSlider from "@/components/BrandSlider";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProjectsTabs from "@/components/ProjectsTabs";
import PortfolioSlider from "@/components/PortfolioSlider";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import SubscribeCTA from "@/components/SubscribeCTA";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Page() {
	return (
		<main>
			<Header />
			<Banner />
			<BrandSlider />
			<ChatBot />
			<Services />
			<WorkProcess />
			<HorizontalScroll />
			<ProjectsTabs />
			<PortfolioSlider />
			<About />
			<ContactForm />
			<MapEmbed />
			<SubscribeCTA />
			<Footer />
		</main>
	);
}
