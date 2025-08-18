import ContactForm from "@/components/ContactForm/ContactForm";
import Explore from "@/components/Explore/Explore";
import Faq from "@/components/Faq/Faq";
import HeroSection from "@/components/HeroSection/HeroSection";
import Pricing from "@/components/Pricing/Pricing";
import Properties from "@/components/Properties/Properties";
import PropertySearch from "@/components/PropertySearch/PropertySearch";
import Ready from "@/components/Ready/Ready";
import ReviewSliders from "@/components/ReviewSliders/ReviewSliders";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import WorldMap from "@/components/WorldMap/WorldMap";


export default function HomePage() {
  return (
    <div>
        <HeroSection/>
        <PropertySearch></PropertySearch>
        <Properties></Properties>
        <WhyChooseUs></WhyChooseUs>
        <Pricing/>
        <WorldMap/>
        <Faq/>
        <ReviewSliders/>
        <Ready/>
        <ContactForm/>
        <Explore/>
    </div>
  )
}
