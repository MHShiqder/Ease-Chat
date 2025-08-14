import HeroSection from "@/components/HeroSection/HeroSection";
import Pricing from "@/components/Pricing/Pricing";
import Properties from "@/components/Properties/Properties";
import PropertySearch from "@/components/PropertySearch/PropertySearch";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";


export default function HomePage() {
  return (
    <div>
        <HeroSection/>
        <PropertySearch></PropertySearch>
        <Properties></Properties>
        <WhyChooseUs></WhyChooseUs>
        <Pricing/>
    </div>
  )
}
