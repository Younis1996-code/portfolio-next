"use client";

import Container from "@/components/Container";
import Skills from "@/components/Skills";
import Certificates from "@/sections/About/CertificatesSec/Certificates";
import AboutCon from "@/sections/About/hero/AboutCon";
import AboutProfile from "@/sections/About/hero/AboutProfile";
import React from "react";

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
