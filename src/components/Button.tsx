import Link from "next/link";
import React from "react";

const Button = ({
  className,
  link,
  value,
  prim,
  heroBut
}: {
  className?: string;
  link: string;
  value: string;
  prim?: boolean;
  heroBut?: boolean;
}) => {
  return (
    <button
      className={`rounded-md md:rounded-lg cursor-pointer transition-colors duration-200 ${heroBut ? "text-[4.10256vw] md:text-[3.10256vw] lg:text-[1.3889vw] xl:text-[1.25vw] py-2 px-4 md:py-3 md:px-6 lg:px-8" : "px-4 py-2 text-[3.5vw]/[150%] md:text-[2.3vw]/[150%] lg:text-[1.2vw]/[150%]"} ${prim ? "bg-Green-75 font-bold opacity-80 hover:opacity-100" : "border border-Green-75 hover:bg-Green-75"} ${className}`}
    >
      <Link href={link}>{value} </Link>
    </button>
  );
};

export default Button;
