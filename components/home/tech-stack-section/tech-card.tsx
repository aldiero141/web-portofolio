import Image from "next/image";

export default function TechCard({ tech }: { tech: { name: string; icon: string; background: string } }) {
  return (
    <div className={`flex flex-col space-y-4 items-center justify-center border border-slate-400/30 min-w-[240px] min-h-[240px] hover:scale-110 transition-all rounded-md bg-[${tech.background}]`}>
      <Image src={tech.icon} alt={tech.name} width={50} height={50} />
      <h6 className="hidden">{tech.name}</h6>
    </div>
  );
}
