import Image from "next/image";
import React from "react";

const ImageCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      loading="lazy"
      className="object-cover transition-transform duration-300 hover:scale-103 hover:brightness-103"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={false}
    />
  );
};

export default ImageCard;
