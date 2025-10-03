import Button from "@/components/Button";
import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 text-center lg:text-left my-auto">
      <h2 className="text-[7.6923vw] md:text-[6.5vw] lg:text-[3.334vw] xl:text-[3.125vw] font-bold font-comfortaa">
        Hello<span className="text-Green-75 ml-1">.</span>
      </h2>
      <div className="relative lg:ml-15 text-center lg:text-left">
        <span className="absolute left-[50%] translate-x-[-50%] bottom-0 lg:translate-0 lg:-left-[100%] lg:bottom-[1.04167vw] w-1/4 lg:w-[100%] h-0.5 lg:h-1 xl:h-1.5 bg-Green-90 rounded-l-full rounded-r-full"></span>
        <h3 className="text-[6.1538vw] lg:text-[2.5vw] xl:text-[2.5vw] font-semibold lg:ml-3 font-comfortaa">
          I&apos;m <span className="text-Green-90 font-bold">Younis</span>
        </h3>
      </div>
      <h2 className="text-[7.6923vw] md:text-[6.5vw] lg:text-[3.334vw] xl:text-[3.125vw] font-bold mt-2 lg:mt-0 font-comfortaa">
        Frontend Developer
      </h2>
      <div className="flex gap-2 md:gap-4 mt-2 lg:mt-8 xl:mt-12 justify-center lg:justify-start">
        <Button
          prim
          value="My Projects"
          link="/projects"
          heroBut
        />
        <Button value="My Resume" link="" heroBut />
      </div>
    </div>
  );
};

export default Intro;
