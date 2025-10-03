import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Project } from "@/data/ProjectsData";

const ProjectCard = ({ project, top3, index }: { project: Project, top3?: boolean, index?: number }) => {
  return (
    <div
      className={`flex flex-col-reverse gap-4 md:gap-6 lg:gap-0 items-center lg:items-start justify-between rounded-md lg:rounded-lg xl:rounded-xl bg-Grey-10/80 border border-Grey-20 shadow-lg w-full overflow-hidden ${top3 ? (index  === 1 ? "lg:flex-row-reverse" : "lg:flex-row") : "lg:flex-col-reverse"} `}
    >
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-[1.04167vw] lg:flex-1 text-start p-4 lg:p-[1.6667vw] xl:p-[2.0834vw] my-auto pt-0 flex-1">
        <h3 className="text-[5.5vw]/[100%] md:text-[3.8vw]/[100%] lg:text-[2.5vw]/[100%] xl:text-[2.25vw]/[100%] font-bold">
          {project.title}
        </h3>
        <p className="text-[3.5897vw]/[150%] md:text-[2.0806vw]/[150%] lg:text-[1.3vw]/[150%] xl:text-[1.25vw]/[150%] text-Grey-60">
          {project.description}
        </p>
        <div className="">
          {project.categories.map((category, index) => (
            <div key={index} className={`inline-block mr-1 md:mr-2 mb-1 md:mb-2 px-3 py-1 rounded-full ${category === "React" ? "bg-blue-700/30" : category === "Next.js" ? "bg-Grey-08/70" : category === "TypeScript" ? "bg-blue-500/20" : category === "Tailwind CSS" ? "bg-Green-65/40" : category === "Redux" ? "bg-Grey-20/40" : category === "Firebase" ? "bg-blue-900/40" : category === "Shadcn UI" ? "bg-Grey-08/90" : "bg-Grey-20/70"}`}>
              <p className="text-[2.8vw]/[150%] md:text-[1.6vw]/[150%] lg:text-[0.85vw]/[150%] text-White/80 font-medium">
                {category}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 md:gap-4 mt-auto ">
          <Button link={project.projectUrl} prim value="Live Demo" />
          <Button link={project.githubUrl} value="Source Code" />
        </div>
      </div>
      <div className={`relative w-full h-[55vw] md:h-[52vw]  ${top3 ? "lg:flex-1 lg:h-[23vw] xl:h-[22vw]" : "lg:h-[25vw] xl:h-[24vw]"}`}>
        <Image
          src={project.imageUrl}
          alt={`${project.title} screenshot`}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
