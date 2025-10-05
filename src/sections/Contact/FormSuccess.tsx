import Button from "@/components/Button";
import SecTitle from "@/components/SecTitle";
import Success from "@/svg/Success";
import React from "react";

const FormSuccess = () => {
  return (
    <section
      aria-live="polite"
      className="flex flex-col items-center justify-center py-8 px-[2.05128vw] lg:py-16 lg:px-8 bg-Grey-10 rounded-xl shadow-lg mx-auto min-w-xl"
    >
      <div className="flex items-center justify-center w-[15vw] h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-[6.25vw] lg:h-[6.25vw] rounded-full bg-Green-75/10 mb-3 lg:mb-6">
        <Success />
      </div>
      <SecTitle
        className="text-Green-75 mb-2 lg:mb-4"
        value="Message Sent Successfully!"
        success
      />
      <p className="text-[3.5897vw]/[150%] md:text-[2.0806vw]/[150%] lg:text-[1.3vw]/[150%] xl:text-[1.25vw]/[150%] font-semibold text-Green-70 text-center">
        Thank you for getting in touch. I appreciate your message and will
        respond as soon as possible.
      </p>
      <div className="text-[3.5897vw]/[150%] md:text-[2.0806vw]/[150%] lg:text-[1.3vw]/[150%] xl:text-[1.25vw]/[150%] font-normal text-Green-70/80 text-center mb-3 lg:mb-6">
        While you wait, feel free to browse my portfolio or connect with me on
        social media.
      </div>
      <Button value="Back to Home" link="/" prim></Button>
    </section>
  );
};

export default FormSuccess;
