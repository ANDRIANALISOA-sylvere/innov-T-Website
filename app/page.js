import HeroSection from "@/components/common/HeroSection"
import CTA from "@/components/common/CTA"
import Partner from "@/components/common/Partner"
import WhyChoose from "@/components/common/WhyChoose"
import Technologie from "@/components/common/Technologie"
import Footer from "@/components/common/Footer"
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CTA/>
      {/* <Partner/> */}
      <WhyChoose/>
      <Technologie/>
      <Footer/>
    </div>
  );
}
