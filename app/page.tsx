"use client";

import { Suspense } from "react";
import indiaMap from "@/public/RJ.png";

import Image from "next/image";
import Header from "./components/header";

function Badge({ label }: any) {
  return (
    <span className="inline-flex px-[2px] text-xs items-center rounded border border-neutral-200 bg-neutral-50 leading-2 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      {label}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProjectCard({ title, desc, url, tags }: any) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex w-fit items-center justify-between rounded border border-neutral-200 bg-neutral-50 p-2 dark:border-neutral-700 dark:bg-neutral-700/5"
    >
      <div className="flex flex-col">
        <h2 className="font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          {title} <ArrowIcon />
        </h2>
        <div className="flex gap-1 mt-2">
          {tags?.map((tag: any) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
      </div>
      <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300"></div>
    </a>
  );
}

export default function Page() {
  // const elementRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const checkVisibility = () => {
  //     setIsVisible(isElementVisibleOnScreen(elementRef));
  //   };

  //   // Initial check
  //   checkVisibility();

  //   // Event listener for scroll and resize events
  //   window.addEventListener("scroll", checkVisibility);
  //   window.addEventListener("resize", checkVisibility);

  //   // Clean up event listeners
  //   return () => {
  //     window.removeEventListener("scroll", checkVisibility);
  //     window.removeEventListener("resize", checkVisibility);
  //   };
  // }, []);

  return (
    <>
      <section>
        <Header />
        <p className="prose prose-neutral dark:prose-invert">
          I'm a Fullstack engineer, and a problem solver. I currently work as
          the software engineer &nbsp;
          <a href="http://upstox.com" target="_blank" className="link-hover">
            @Upstox
          </a>
          , where I built financial system using state of the art-tech
          teachnology.
        </p>

        <h1 className="text-xl mt-10">Projects</h1>
        <div className="my-8 flex w-full flex-col space-y-4">
          {[
            {
              title: "Online IDE",
              url: "https://ide-pradeexsu.vercel.app/",
              tags: ["Docker", "React", "Typescript", "Node.js", "Tailwind", "Postgress",],
            },
            {
              title: "Rest Client",
              url: "https://pradeexsu.github.io/comet-tail//",
              tags: ["HTML", "Codemirror", "JSON"],
            },
            {
              title: "2048 Game",
              url: "https://pradeexsu.github.io/2048//",
              tags: ["HTML", "Javascript", "CSS"],
            },
          ]?.map((project) => (
            <ProjectCard
              title={project?.title}
              key={project?.title}
              tags={project?.tags}
            />
          ))}
        </div>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I invest small angel checks into early stage startups building tools
            for developers.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I've worked with and advised companies on{" "}
            <a href="/blog/developer-marketing">developer marketing</a>,{" "}
            <a href="/blog/devrel">developer relations</a>, building open-source
            communities, product-led growth, and more.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2
          className="mb-4 animate-intro font-medium tracking-tight opacity-100 [animation-delay:550ms]"
          id="where"
        >
          Where
        </h2>
        <div className="animate-intro opacity-100 [animation-delay:600ms] flex flex-col">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              alt="Map with a marker over the state of Texas"
              draggable="false"
              className="grayscale hover:grayscale-0  transition-all duration-1000 translate-x-8 translate-y-[18px] scale-125 w-full h-full"
              src={indiaMap}
            />
            <div aria-hidden="true" className="">
              <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-marker rounded-full bg-blue-500 "></div>
              <div className="absolute left-1/2 top-1/2 z-10 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-neutral-50 bg-blue-500 shadow-2xl"></div>
            </div>
          </div>
          <div className="flex justify-end">
            <a
              className="mt-1 flex items-center text-sm text-neutral-500"
              href="https://en.wikipedia.org/wiki/Texas"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="exclude ml-1">Sirohi</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
