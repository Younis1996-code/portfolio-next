"use client";

import React, { useState } from "react";
import Modal from "./Modal";

interface ImageModalProps {
  children: React.ReactNode;
  top3?: boolean;
  title?: string;
  src: string;
  alt: string;
  company?: string;
  certificate?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  children,
  top3,
  title,
  src,
  alt,
  company,
  certificate,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <figure
        className={`relative w-full h-[55vw] md:h-[52vw] cursor-pointer overflow-hidden ${
          top3 ? "lg:flex-1 lg:h-[23vw] xl:h-[22vw]" : "lg:h-[25vw] xl:h-[24vw]"
        }`}
        onMouseEnter={() => setShowModal(!!certificate)}
        onMouseLeave={() => setShowModal(false)}
        onClick={() => setOpenModal(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpenModal(true)}
        role="button"
        tabIndex={0}
        aria-label={`View details about ${title || "certificate"}`}
      >
        {children}

        <figcaption
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 lg:gap-4 bg-black/70 z-10 
            transition-all duration-700 ease-in-out
            ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {company && (
            <h2
              className={`text-Green-75/80 text-[5.5vw]/[100%] md:text-[3.8vw]/[100%] lg:text-[2.5vw]/[100%] xl:text-[2.25vw]/[100%] font-bold 
                transition-all duration-700 ease-in-out delay-100
                ${
                  showModal
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
            >
              {company}
            </h2>
          )}
          {title && (
            <h3
              className={`text-white text-[4.5vw]/[100%] md:text-[3.2vw]/[100%] lg:text-[2vw]/[100%] xl:text-[1.75vw]/[100%] font-semibold 
                transition-all duration-700 ease-in-out delay-200
                ${
                  showModal
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
            >
              {title}
            </h3>
          )}
        </figcaption>
      </figure>

      {openModal && <Modal setOpenModal={setOpenModal} src={src} alt={alt} />}
    </>
  );
};

export default ImageModal;
