import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import TechStackSection from "@/components/home/tech-stack-section";

export default function Home() {
  return (
    <div className="w-full h-full min-h-[70svh]">
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
        <TechStackSection />
      </div>

    </div>
  );
}
