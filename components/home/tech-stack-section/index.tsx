import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import TechCard from "./tech-card";

export default function TechStackSection() {
  const techStack = [{
    name: "Next.js",
    icon: "/icon/nextjs-icon.svg",
    background: "#E4E5E7",
  }, {
    name: "React",
    icon: "/icon/react-icon.svg",
    background: "#E4E5E7",
  }, {
    name: "Tailwind CSS",
    icon: "/icon/tailwindcss-icon.svg",
    background: "#E4E5E7",
  }, {
    name: "TypeScript",
    icon: "/icon/typescript-icon.svg",
    background: "#E4E5E7",
  }, {
    name: "Node.js",
    icon: "/icon/nodejs-icon.svg",
    background: "#E4E5E7",
  }, {
    name: "Nuxt.js",
    icon: "/icon/nuxt-icon.svg",
    background: "#E4E5E7",
  }, {
    name: "Vue",
    icon: "/icon/vue-icon.svg",
    background: "#E4E5E7",
  }, {
    name: "Svelte",
    icon: "/icon/svelte-icon.svg",
    background: "#E4E5E7",
  }];
  return (
    <div className="container relative mx-auto max-w-[1200px] w-full h-full min-h-[70svh] flex flex-col space-y-16 mt-[32em] mb-32 p-12 rounded-xl shadow-lg border border-slate-400/30">
      <Image src="/assets/lovely-pet-portrait-isolated.png" alt="tech-stack" width={600} height={600} className="absolute top-[-36em] left-[-7em]" />
      <Image src="/assets/lovely-pet-portrait-isolated.png" alt="tech-stack" width={600} height={600} className="absolute top-[-36em] left-[-7em]" />
      <div className="flex flex-col items-center justify-center">
        <TextAnimate animation="slideUp" as="h2" className="text-left">My Tech Stack</TextAnimate>
      </div>

      <div className="grid grid-cols-4 gap-8 items-center justify-center">
        {techStack.map(tech => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
}
