import Container from '@/components/Container'
import ProjectCard from '@/components/ProjectCard'
import SecTitle from '@/components/SecTitle'
import { Project, ProjectsData } from '@/data/ProjectsData'
import React from 'react'

const ProjectsSec = () => {
  return (
    <Container className='flex flex-col gap-16 md:gap-20 xl:gap-25 text-center'>
          <SecTitle withLine value='Projects' />
          <div className='flex flex-col gap-8 md:gap-10 lg:gap-12 items-center w-full lg:w-[88%] mx-auto'>
      {ProjectsData.slice(0, 3).map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} top3 index={index} />
      ))}
    </div>
    </Container>
  )
}

export default ProjectsSec
