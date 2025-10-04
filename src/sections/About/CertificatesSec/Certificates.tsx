import Container from "@/components/Container";
import ImageCard from "@/components/ImageCard";
import ImageModal from "@/components/ImageModal";
import SecTitle from "@/components/SecTitle";
import React from "react";

interface Certificate {
  company: string;
  title: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    company: "Focal-X",
    title: "Advanced React",
    image: "/intrenships/focal-x-intren.webp"
  },
  {
    company: "Meta",
    title: "Advanced React",
    image: "/certificates/meta-react.webp"
  },
  {
    company: "Scrimba",
    title: "TypeScript",
    image: "/certificates/typescript-ziroll.webp"
  },
  {
    company: "Coursera",
    title: "TypeScript",
    image: "/certificates/typescript-coursera.webp"
  },
];

const Certificates = () => {
  return (
    <Container className="w-full text-center flex flex-col gap-16 md:gap-20 xl:gap-25">
      <SecTitle value="Certificates" withLine />
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-[90%] mx-auto bg-Grey-10/80 border border-Grey-20 shadow-lg p-4 md:p-6 lg:p-8 rounded-md lg:rounded-lg xl:rounded-xl">
      {certificates.map((cert, index) => (
        <ImageModal key={index} title={cert.title} src={cert.image} alt={`${cert.company} ${cert.title} screenshot`} company={cert.company} certificate>
        <ImageCard
          src={cert.image}
          alt={`${cert.company} ${cert.title} certificate`}
          
        />
        </ImageModal>
      ))}
     </div>
    </Container>
  );
};

export default Certificates;
