'use client'
import React from "react";

import SpotifyPlaying from "./spotify-playing";
import { LinkPreview } from "./ui/link-preview";

function Footer() {
  return (
    <footer className=" mt-10 mb-10 dark:bg-bg/50 text-[#7e7e7e] py-3 text-sm flex flex-col backdrop-blur-sm">
      <div className="flex justify-between border-t-[1px] border-boarderGray ">
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

      <div className="border-t-[1px] border-boarderGray flex justify-start gap-4 py-3">
        <div>
          Crafted by{" "}
          <a href="https://github.com/pradeexsu" className="link-hover" target="_blank">
            Pradeep
          </a>
          .
        </div>
      
      </div>
    </footer>
  );
}

export default Footer;
