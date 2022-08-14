import React from "react";
import { LinkItem } from "./link-item";

export type ProjectItemProp = {
  date: string;
  title: string;
  description: string;
  deployment_link: string;
  code_link: string;
  ss_url: string;
};

const ProjectItem: React.FC<ProjectItemProp> = ({
  date,
  title,
  description,
  deployment_link,
  code_link,
  ss_url,
}: ProjectItemProp) => (
  <>
    {/* bg-dusk md:group-hover:opacity-50 */}
    <div className="hover:opacity-important hover:scale-11/10x">
      <div className="block overflow-hidden bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70">
        <h3 className="text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/50 ease-linear">
          {title}
        </h3>
        <div className="flex flex-wrap space-x-2 text-base text-rose-100/50">
          <div className="italic text-sm">{date}</div>
        </div>
        <p className="mt-4 text-lg text-rose-100/70 line-clamp-3">
          {description}
        </p>
        <LinkItem text={"code link"} link={"#"} />
        <LinkItem text={"demployment link"} link={"#"} />
        {ss_url && (
          <details className="question py-4 border-grey-lighter">
            <summary className="flex items-center text-sm select-none mb-2 text-skin-base">
              screenshot
              <svg
                className="fill-current opacity-75 w-4 h-4 rotate-90 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </summary>

            <p>
              <img className="select-none" src={ss_url} alt={title} />
            </p>
          </details>
        )}
      </div>
    </div>
  </>
);

export default ProjectItem;
