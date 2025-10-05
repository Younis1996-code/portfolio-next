import GradientCircle from "@/svg/GradientCircle";
import Image from "next/image";
import React from "react";

const AboutProfile = () => {
  return (
    <div className="relative w-[85vw] lg:w-full h-[78vw] md:h-[80vw] lg:h-[38vw] overflow-visible lg:flex-1">
      <GradientCircle
        className="absolute w-[85%] h-[85vw] lg:w-[100%] lg:h-[100%] left-1/2 top-1/2 -translate-1/2 overflow-visible z-0"
        aria-hidden="true"
      />
      <div className="relative w-[56.41vw] h-[71.79487vw] lg:w-[29.1667vw] lg:h-[37.5vw] top-[33.23vw] md:top-[34.23vw] lg:top-[16.04167vw] left-[47%] -translate-1/2 rounded-full -z-1 overflow-hidden">
        <Image
          src="/selfie.webp"
          alt="Portrait of Younis Issa, Front-End Developer"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default AboutProfile;
