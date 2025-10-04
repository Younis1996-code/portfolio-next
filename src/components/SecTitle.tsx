import React from "react";

const SecTitle = ({
  withLine,
  value,
}: {
  withLine?: boolean;
  value: string;
}) => {
  return (
    <h2
      className={`relative text-[8.1538vw]/[100%] md:text-[6.1538vw] lg:text-[3.125vw]/[100%] font-bold before:content-[''] before:block before:w-[14%] before:lg:w-[8%] before:h-0.5 before:lg:h-1 before:bg-Green-75 before:left-1/2 before:-translate-x-1/2 before:absolute before:-bottom-1.5 before:lg:-bottom-2 before:rounded-full ${
        withLine ? "" : "before:hidden"
      }`}
    >
      {value}
    </h2>
  );
};

export default SecTitle;
