import Container from "@/components/Container";
import ProfileCard from "@/sections/Home/HeroSections/ProfileCard";
import Skills from "@/components/Skills";
import React from "react";
import Intro from "./Intro";

const Hero = () => {
  return (
    <div>
      <Container className="relative h-full pt-18 md:pt-[77px] xl:pt-[99px] flex flex-col lg:flex-row gap-10 lg:gap-0 items-center lg:items-start justify-center lg:justify-between mt-8 lg:mt-15">
        <Intro />
        <ProfileCard />
      </Container>
      <Skills />
    </div>
  );
};

export default Hero;
