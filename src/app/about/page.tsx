"use client";

import Container from "@/components/Container";
import Skills from "@/components/Skills";
import Certificates from "@/sections/About/CertificatesSec/Certificates";
import AboutCon from "@/sections/About/hero/AboutCon";
import AboutProfile from "@/sections/About/hero/AboutProfile";
import React from "react";

export const metadata = {
  title: "Younis Issa | About",
  description: "Learn more about Younis Issa, a frontend developer with expertise in React and Next.js, his skills, experience, and journey.",
  keywords: "Younis Issa, about, web developer, React, Next.js, skills, experience",
  url: "https://portfolio-self-ten-96.vercel.app/about",
  siteName: "Younis Issa Portfolio",
  openGraph: {
    title: "Younis Issa | About",
    description: "Learn more about Younis Issa, a frontend developer with expertise in React and Next.js, his skills, experience, and journey.",
    url: "https://portfolio-self-ten-96.vercel.app/about",
    siteName: "Younis Issa Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Younis Issa | About",
    description: "Learn more about Younis Issa, a frontend developer with expertise in React and Next.js, his skills, experience, and journey.",
  },
};


const About = () => {
  return (
    <main className="space-y-25 lg:space-y-40 overflow-x-hidden">
      <section
        id="about"
        className="lg:min-h-screen flex flex-col"
        aria-labelledby="about-heading"
      >
        <Container className="pt-18 md:pt-[77px] xl:pt-[99px] flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center mb-8 lg:my-auto gap-8">
          <AboutCon />

          <AboutProfile />
        </Container>

        <Skills />
      </section>

      <Certificates />
    </main>
  );
};

export default About;
