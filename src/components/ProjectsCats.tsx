import { Project } from '@/data/ProjectsData'
import React from 'react'

const ProjectsCats = ({ project }: { project: Project }) => {
  return (
    <div>
          {project.categories.map((category, index) => (
            <span key={index} className={`inline-block mr-1 md:mr-2 mb-1 md:mb-2 px-3 py-1 rounded-full ${category === "React" ? "bg-blue-700/30" : category === "Next.js" ? "bg-Grey-08/70" : category === "TypeScript" ? "bg-blue-500/20" : category === "Tailwind CSS" ? "bg-Green-65/40" : category === "Redux" ? "bg-Grey-20/40" : category === "Firebase" ? "bg-blue-900/40" : category === "Shadcn UI" ? "bg-Grey-08/90" : "bg-Grey-20/70"}`}>
              <span className="text-[2.8vw]/[150%] md:text-[1.6vw]/[150%] lg:text-[0.85vw]/[150%] text-White/80 font-medium">
                {category}
              </span>
            </span>
          ))}
        </div>
  )
}

export default ProjectsCats
