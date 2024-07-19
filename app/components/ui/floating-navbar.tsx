"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-8 flotingnav lg:right-[26.5%]  mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-bgGray/70 backdrop-blur-sm bg-[#E7E7E7]/70 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-[3px] pl-4 py-[3px]  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative  items-center flex space-x-1 ",
              navItem.link == path
                ? "text-blue-500 hover:text-blue-300"
                : "dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            {/* <span className="block ">{navItem.icon}</span> */}
            <span className=" block text-sm">{navItem.name}</span>

            <span
              className={clsx(
                "absolute inset-x-0 -bottom-px bg-gradient-to-r from-blue-700  via-blue-500 to-transparent h-px transition-all duration-500",
                navItem.link == path ? "w-full" : "w-0 opacity-0"
              )}
            />
          </Link>
        ))}
        <button className=" border border-blue-500/70 text-xs font-medium relative   text-black dark:text-white px-3 py-[4px] rounded-full">
          <a href="mailto:prdeexsu@gmail.com" target="_blank">
            Contact
          </a>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
