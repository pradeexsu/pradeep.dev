import React from "react";
import { PROJECT_DATA } from "../const";
import { LinkPreview } from "./ui/link-preview";
import ArrowIcon from "./ArrowIcon";
import Badge from "./Badge";

function MyProjects() {
  return (
    <>
      <h1 className="text-xl mt-10 border-b pb-2 border-boarderGray">Projects</h1>
      <div className="flex flex-col gap-2 my-4">
        {PROJECT_DATA.map((item, idx) => (
          <div 
          key={idx}
          className=" dark:border-white/[0.2] dark:bg-bgGray/70 backdrop-blur-sm bg-[#E7E7E7]/70 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-[10px] py-2 items-center justify-center space-x-4
          rounded-xl h-full w-fit px-5 border border-transparent max-w-screen-sm">
            <div className="flex flex-col relative z-50">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                {item.title}
                <LinkPreview url={item.url}>
                  <ArrowIcon />
                </LinkPreview>
              </h2>
              <div className="flex gap-1 mt-2 flex-wrap">
                {item.tags.map((tag) => (
                  <Badge key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyProjects;
