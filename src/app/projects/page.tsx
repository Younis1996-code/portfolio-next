"use client";

import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { ProjectsData } from "@/data/ProjectsData";
import React, { useMemo, useState } from "react";
import { LuSearchCode } from "react-icons/lu";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects only when searchTerm changes
  const visibleProjects = useMemo(() => {
    if (!searchTerm) return ProjectsData;
    return ProjectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.categories.some((category) =>
          category.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [searchTerm]);
  return (
    <Container className="space-y-10 lg:space-y-20 mt-23 md:mt-25 xl:mt-33 mb-60">
      <div className="relative w-full mx-auto">
        <input
          type="text"
          placeholder="Looking for something?"
          aria-label="Search projects"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-Grey-10/60 w-full py-2 lg:py-4 rounded-md lg:rounded-lg xl:rounded-xl pl-4 lg:pl-8 focus:outline-none focus:border focus:border-Green-65 placeholder:opacity-50 text-[3.3333vw]/[150%] md:text-[2.5vw]/[150%] lg:text-[1.25vw]/[150%] xl:text-[1.5vw]/[150%] text-Grey-60 pr-8 lg:pr-16"
        />
        <LuSearchCode className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 opacity-50 text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
      </div>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))
        ) : (
          <p className="text-center text-Grey-60 col-span-full text-xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">
            Try searching for something else.
          </p>
        )}
      </div>
    </Container>
  );
};

export default Projects;
