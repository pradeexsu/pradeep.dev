import Image from "next/image";
import React from "react";
import PinIcon from "./PinIcon";
import indiaMap from "@/public/RJ.png";

function MyLocation() {
  return (
    <div className="mt-12">
      <h2
        className="mb-4 animate-intro font-medium tracking-tight opacity-100 [animation-delay:550ms]"
        id="where"
      >
        Where{" "}
      </h2>
      <div className="animate-intro opacity-100 [animation-delay:600ms] flex flex-col">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            alt="Map with a marker over the state of Texas"
            draggable="false"
            className="grayscale hover:grayscale-0  transition-all duration-1000 translate-x-[28px] translate-y-[12px] sm:translate-x-[32px] sm:translate-y-[12px] scale-125 w-full h-full"
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
            href="https://en.wikipedia.org/wiki/Sirohi"
            target="_blank"
            rel="noreferrer"
          >
            <PinIcon />
            <span className="exclude ml-1">Sirohi</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyLocation;
