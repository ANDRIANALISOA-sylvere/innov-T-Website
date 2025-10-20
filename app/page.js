import HeroSection from "@/components/common/HeroSection";
import CTA from "@/components/common/CTA";
import WhyChoose from "@/components/common/WhyChoose";
import Technologie from "@/components/common/Technologie";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Home() {
  return (
    <div>
      <AnimatedSection direction="up">
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={200}>
        <CTA />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={300}>
        <WhyChoose />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={400}>
        <Technologie />
      </AnimatedSection>
    </div>
  );
}
