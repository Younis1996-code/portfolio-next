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
      className={`relative text-[6.1538vw]/[130%] lg:text-[3vw]/[130%] font-bold before:content-[''] before:block before:w-[14%] before:lg:w-[8%] before:h-0.5 before:lg:h-1 before:bg-Green-75 before:left-1/2 before:-translate-x-1/2 before:absolute before:-bottom-1 before:lg:-bottom-2 before:rounded-full ${
        withLine ? "" : "before:hidden"
      }`}
    >
      {value}
    </h2>
  );
};

export default SecTitle;
