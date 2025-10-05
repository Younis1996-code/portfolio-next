import SecTitle from '@/components/SecTitle'
import React from 'react'

const ProjectsHeader = () => {
  return (
    <header className="text-center">
          <SecTitle value="My Projects" />

          <p className="mt-4 text-base md:text-lg lg:text-xl text-Grey-60 max-w-3xl mx-auto">
            Explore a collection of my work built with <strong>Next.js</strong>,{" "}
            <strong>React</strong>, <strong>TypeScript</strong>, and more. Use
            the search below to find projects by title, description, or
            category.
          </p>
        </header>
  )
}

export default ProjectsHeader
