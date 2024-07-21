"use client";

import Header from "./components/header";
import { Fragment } from "react";
import { LinkPreview } from "./components/ui/link-preview";
import MyLocation from "./components/MyLocation";
import MyProjects from "./components/MyProjects";
import { Metadata } from "next";
import ogImage from "@/app/opengraph-image.jpg";
/*
<Head>
        <meta property="og:title" content="Pradeep Suthar" />
        <meta
          property="og:description"
          content="Software Engineer at Upstox | Full-Stack developer, JavaScript enthusiast. I love building products and web apps that impact millions of lives."
        />
      </Head>
*/


export default function Page() {
  return (
    <Fragment>
      <div className="relative">
        <Header />
        {/* <Spotlight
        className="fixed -top-40 left-0 md:left-60 md:-top-20"
        fill="gray"
      /> */}

        <p className="first-letter:text-3xl">
          Software Engineer{" "}
          <LinkPreview
            url="https://upstox.com"
            className="link-hover font-semibold z-50"
          >
            {" @Upstox "}
          </LinkPreview>
          {`, where I've built a robust financial system using state-of-the-art
          technology. What I'm learning aboutshipping great products, becoming a
          better developer, and growing a career in tech complements my hands-on
          experience in crafting impactful solutions.`}
        </p>
        <br />
        <p>
          {`Beyond tech stuff, I'm passionate about exploring the great outdoors,
          including mountain🏔️ trekking, skateboard🛹 walking, and sketching.`}
        </p>
      </div>
      <MyProjects />

      <MyLocation />
    </Fragment>
  );
}
