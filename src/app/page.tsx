import Hero from "@/sections/Home/HeroSections/Hero";
import ProjectsSec from "@/sections/Home/HeroSections/ProjectsSec";

export default function Home() {
  return (
    <div className="overflow-x-hidden space-y-25 lg:space-y-40">
      <Hero />
      <ProjectsSec />
    </div>
  );
}
