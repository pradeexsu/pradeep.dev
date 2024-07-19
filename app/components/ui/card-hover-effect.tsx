import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LinkPreview } from "./link-preview";
import ArrowIcon from "../ArrowIcon";
import Badge from "../Badge";
import { PROJECT_DATA } from "@/app/const";

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="my-8 flex w-full flex-col">
      {PROJECT_DATA.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group  block p-1 h-full w-fit"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-2xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />

            )}
          </AnimatePresence>
          <div className="rounded-xl h-full w-fit px-4 py-2 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative ">
            <div className="flex flex-col relative z-50">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                {item.title}
                <LinkPreview url={item.url}>
                  <ArrowIcon />
                </LinkPreview>
              </h2>
              <div className="flex gap-1 mt-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
  );
};
