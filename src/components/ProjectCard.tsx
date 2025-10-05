import React from "react";
import Button from "./Button";
import { Project } from "@/data/ProjectsData";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import ProjectsCats from "./ProjectsCats";

const ProjectCard = ({
  project,
  top3,
  index,
}: {
  project: Project;
  top3?: boolean;
  index?: number;
}) => {
  return (
    <article
      className={`flex flex-col-reverse gap-4 md:gap-6 lg:gap-0 items-center lg:items-start justify-between rounded-md lg:rounded-lg xl:rounded-xl bg-Grey-10/80 border border-Grey-20 shadow-lg w-full ${
        top3
          ? index === 1
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
          : "lg:flex-col-reverse"
      } `}
    >
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-[1.04167vw] lg:flex-1 text-start p-4 lg:p-[1.6667vw] xl:p-[2.0834vw] my-auto pt-0 flex-1">
        <h3 className="text-[5.5vw]/[100%] md:text-[3.8vw]/[100%] lg:text-[2.5vw]/[100%] xl:text-[2.25vw]/[100%] font-bold">
          {project.title}
        </h3>
        <p className="text-[3.5897vw]/[150%] md:text-[2.0806vw]/[150%] lg:text-[1.3vw]/[150%] xl:text-[1.25vw]/[150%] text-Grey-60">
          {project.description}
        </p>
        <ProjectsCats project={project} />
        <div className="flex gap-2 md:gap-4 mt-auto ">
          <Button
            link={project.projectUrl}
            prim
            value="Live Demo"
            aria-label={`View live demo of ${project.title}`}
          />
          <Button
            link={project.githubUrl}
            value="Source Code"
            aria-label={`View source code of ${project.title}`}
          />
        </div>
      </div>
      <ImageModal
        top3={top3}
        src={project.imageUrl}
        alt={`${project.title} screenshot`}
      >
        <ImageCard src={project.imageUrl} alt={`${project.title} screenshot`} />
      </ImageModal>
    </article>
  );
};

export default ProjectCard;
