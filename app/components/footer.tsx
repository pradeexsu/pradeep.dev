'use client'
import React from "react";

import SpotifyPlaying from "./spotify-playing";
import { LinkPreview } from "./ui/link-preview";

function Footer() {
  return (
    <footer className=" mt-10 mb-10 dark:bg-bg/50 text-[#7e7e7e] py-3 text-sm flex flex-col backdrop-blur-sm">
      <div className="flex justify-between border-t-[1px] border-[#2d2d2d] ">
          <div className="flex flex-col gap-2 py-2">
            <a
              href="https://stackoverflow.com/users/12537691/pradeexsu"
              className="link-hover"
            >
              Stackoverflow
            </a>
            <a href="https://linkedin.com/in/pradeep-swe" className="link-hover">
              Linkedin
            </a>
            <a href="https://github.com/pradeexsu" className="link-hover">
              Github
            </a>
            <a href="https://x.com/pradeexsu" className="link-hover">
              X
            </a>
          </div>
        <SpotifyPlaying />
      </div>

      <div className="border-t-[1px] border-[#2d2d2d] flex justify-start gap-4 py-3">
        <div>
          Crafted by{" "}
          <LinkPreview url="https://github.com/pradeexsu" className="link-hover">
            Pradeep
          </LinkPreview>
          .
        </div>
        {/* <div className="border-l-[1px] border-[#2d2d2d] pl-4">
          Find me on{" "}
          <a href="https://x.com/pradeexsu" className="">
            <Image
              src={x}
              alt="x_logo"
              height="12"
              className="inline fill-white"
            />
          </a>
          .
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
