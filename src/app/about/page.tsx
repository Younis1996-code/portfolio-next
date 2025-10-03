import Button from "@/components/Button";
import Container from "@/components/Container";
import SecTitle from "@/components/SecTitle";
import Skills from "@/components/Skills";
import GradientCircle from "@/svg/GradientCircle";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:min-h-screen flex flex-col">
      <Container className="pt-18 md:pt-[77px] xl:pt-[99px] flex flex-col-reverse gap-0 lg:gap-0 lg:flex-row items-center lg:items-start justify-center lg:justify-between mb-8 lg:my-auto">
        <section className="flex flex-col gap-4 lg:gap-[1vw] text-center lg:text-left my-auto flex-1">
          <SecTitle value="About Me" />
          <p className="text-[4.10256vw]/[150%] md:text-[3.10256vw]/[150%] lg:text-[1.3888vw]/[150%] xl:text-[1.4vw]/[150%] font-normal text-Grey-60">
            I&apos;m a Front-End Developer passionate about crafting sleek,
            responsive interfaces that feel as good as they look. With Next,
            React, and TypeScript, I turn ideas into pixel-perfect experiences
            optimized for performance, accessibility, and scalability.
          </p>
          <Button
            value="Resume"
            link="#"
            prim
            className="lg:w-fit"
            heroBut
          />
        </section>
        <section className="relative w-[85vw] lg:w-full h-[78vw] md:h-[80vw] lg:h-[38vw] overflow-visible lg:flex-1">
          <GradientCircle className="absolute w-[85%] h-[85vw] lg:w-[100%] lg:h-[100%] left-1/2 top-1/2 -translate-1/2 overflow-visible z-0" />
          <div className="absolute w-[56.41vw] h-[71.79487vw] lg:w-[29.1667vw] lg:h-[37.5vw] top-[33.23vw] md:top-[34.23vw] lg:top-[16.04167vw] left-[47%] -translate-1/2 -z-1 rounded-full overflow-hidden">
            <Image
              src="/selfie.png"
              alt="Younis's selfie"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>
      </Container>

      
        <Skills />
      
    </div>
  );
};

export default About;
