import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-full min-h-[80svh] flex flex-col items-center justify-center container mx-auto">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col justify-center gap-4">
          <TextAnimate animation="slideUp" as="h1">
            Hi, I'm Aldo Aldiero
          </TextAnimate>
          <div className="flex gap-2">
            <TextAnimate animation="slideUp" as="h4">
              I'm a
            </TextAnimate>
            <h4 className="animate-fade-in">
              <AuroraText>
                Web Developer
              </AuroraText>
            </h4>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/assets/cat-image.png" alt="hero-image" width={800} height={800} className="-ml-32" />
        </div>
      </div>
    </section>
  );
}
