import Container from "@/components/Container";
import ProjectsHeader from "@/sections/Projects/ProjectsHeader";
import AllProjects from "./AllProjects";

export const metadata = {
  title: "Younis Issa | Projects",
  description: "Explore the projects and web applications built by Younis Issa using React, Next.js, and modern web technologies.",
  keywords: "Younis Issa, projects, portfolio, web development, React, Next.js, frontend projects",
  url: "https://portfolio-self-ten-96.vercel.app/projects",
  siteName: "Younis Issa Portfolio",
  openGraph: {
    title: "Younis Issa | Projects",
    description: "Explore the projects and web applications built by Younis Issa using React, Next.js, and modern web technologies.",
    url: "https://portfolio-self-ten-96.vercel.app/projects",
    siteName: "Younis Issa Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Younis Issa | Projects",
    description: "Explore the projects and web applications built by Younis Issa using React, Next.js, and modern web technologies.",
  },
};


const Projects = () => {
  

  return (
    <section
      id="projects"
      className="overflow-x-hidden mt-4 lg:mt-8 min-h-screen"
      aria-labelledby="projects-heading"
    >
      <Container className="space-y-10 lg:space-y-20 mt-23 md:mt-25 xl:mt-33">
        <ProjectsHeader />
        <AllProjects />

      </Container>
    </section>
  );
};

export default Projects;
