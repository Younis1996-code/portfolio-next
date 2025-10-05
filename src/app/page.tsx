import Hero from "@/sections/Home/HeroSections/Hero";
import ProjectsSec from "@/sections/Home/HeroSections/ProjectsSec";

export const metadata = {
  title: "Younis Issa | Frontend Developer Portfolio",
  description: "Welcome to the personal portfolio of Younis Issa, a frontend developer specializing in React and Next.js. Explore projects, skills, and contact information.",
  keywords: "Younis Issa, frontend developer, React, Next.js, web development, portfolio",
  url: "https://portfolio-self-ten-96.vercel.app/",
  siteName: "Younis Issa Portfolio",
  openGraph: {
    title: "Younis Issa | Frontend Developer Portfolio",
    description: "Welcome to the personal portfolio of Younis Issa, a frontend developer specializing in React and Next.js.",
    url: "https://portfolio-self-ten-96.vercel.app/",
    siteName: "Younis Issa Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Younis Issa | Frontend Developer Portfolio",
    description: "Welcome to the personal portfolio of Younis Issa, a frontend developer specializing in React and Next.js.",
  },
};



export default function Home() {
  return (
    <div className="overflow-x-hidden space-y-25 lg:space-y-40">
      <Hero />
      <ProjectsSec />
    </div>
  );
}
