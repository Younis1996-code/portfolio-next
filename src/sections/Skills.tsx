import React from "react";

const mySkills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "TypeScript",
  "Bootstrap",
  "Tailwind CSS",
  "Next.js",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <div className="relative w-screen mt-auto bg-Grey-10 h-auto py-[1.6667vw] px-[2.0834vw] flex items-center justify-between flex-wrap gap-x-[4.10256vw] gap-y-[2.05128vw] md:gap-0 lg:gap-[1.04167vw]">
      {mySkills.map((skill, index) => (
        <h3
          key={index}
          className="text-Grey-30 text-[3.5897vw] md:text-[2.0806vw] lg:text-[1.25vw] xl:text-[1.25vw] font-semibold"
        >
          {skill}
        </h3>
      ))}
    </div>
  );
};

export default Skills;
