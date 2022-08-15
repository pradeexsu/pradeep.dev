import React from "react";
import ProjectItem, { ProjectItemProp } from "./project-item";
import SectionTitle from "./section-title";

const Projects: React.FC<ProjectItemProp[]> = (projects: ProjectItemProp[]) => {

  projects = [projects["0"], projects["1"], projects["2"]];

  return (
    <section className="mt-10 mb-10 scroll-m-28 text-base " id="projects">
      <SectionTitle title={"My Work"} link={"#projects"} />

      <ol className="mt-10">
        {projects
          .filter((pr) => pr && pr.title)
          .map((pr) => (
            <ProjectItem {...pr} key={pr.title} />
          ))}
      </ol>
    </section>
  );
};

export default Projects;
