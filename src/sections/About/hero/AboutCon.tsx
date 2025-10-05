import Button from "@/components/Button";
import SecTitle from "@/components/SecTitle";
import React from "react";

const AboutCon = () => {
  return (
    <article className="flex flex-col gap-4 lg:gap-[1vw] text-center lg:text-left my-auto flex-1">
      <SecTitle value="About Me" />
      <p className="text-[4.10256vw]/[150%] md:text-[3.10256vw]/[150%] lg:text-[1.3888vw]/[150%] xl:text-[1.4vw]/[150%] font-normal text-Grey-60">
        I&apos;m a <strong>Front-End Developer</strong> passionate about
        crafting sleek, responsive interfaces that feel as good as they look.
        With <strong>Next.js</strong>, <strong>React</strong>, and{" "}
        <strong>TypeScript</strong>, I transform ideas into pixel-perfect
        experiences optimized for <strong>performance</strong>,{" "}
        <strong>accessibility</strong>, and <strong>scalability</strong>.
      </p>
      <Button
        value="Resume"
        link="#"
        prim
        className="lg:w-fit"
        heroBut
        aria-label="Download Younis Issa's Resume"
      />
    </article>
  );
};

export default AboutCon;
