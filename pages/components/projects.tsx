import React from "react";
import ProjectItem, { ProjectItemProp } from "./project-item";

const Projects: React.FC<ProjectItemProp[]> = (
  projects: ProjectItemProp[]
) => {
  // console.log(timeLineItemProps);
  // console.log(timeLineItemProps.length);

  projects = [
    projects["0"],
    projects["1"],
    projects["2"],
  ];
//   console.log(projects);

  return (
    <>
      <div className="mt-36 pb-36 text-base">
        <ol className="">
          {projects.filter(pr=>pr && pr.title).map((pr) => (
            <ProjectItem {...pr} key={pr.title}/>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Projects;
