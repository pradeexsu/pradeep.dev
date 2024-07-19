import React from "react";

function Page() {
  return (
    <div className="">
      <h1 className="text-2xl my-10">About me</h1>
      <p>
        Apart from software engineering, I have a rich life enjoying the fun of
        the physical world. Whether it's skateboarding down hills, exploring
        nature, or engaging in outdoor activities, I find joy in experiencing
        the world beyond screens and code. These adventures not only refresh my
        mind but also inspire creativity and a balanced perspective in
        everything I do.
      </p>
      <br />
      <p className="first-letter:text-3xl ">
        {'🛹 '}
        <span className="underline decoration-wavy decoration-cyan-400">
          Skateboarding{" "}
        </span>
        down steep hills isn't just fun—it's where I'm learning important life
        skills. It helps me learn how to balance, coordinate my movements, and
        stay stable, even when things get tough. It's like a metaphor for moving
        forward in life, showing me how to keep going and overcome challenges
        with confidence.
      </p>
      <br />
      <p className="first-letter:text-3xl">
        {"🎨 "}
        <span className="underline decoration-wavy decoration-cyan-400">
          Art and colors
        </span>{" "}
        have a deep passion for me. In addition to my work in software
        engineering, I've enjoyed sharing my love for drawing and sketching by
        teaching at Scout summer camps. It's fulfilling to inspire creativity in
        others and to see the joy that art brings to people of all ages. This
        blend of technical expertise and artistic expression enriches my life
        and keeps me inspired both in and out of the digital realm.
      </p>
      <br />
      <p className="first-letter:text-3xl">
        {"⛰️ "}
        <span className="underline decoration-wavy decoration-cyan-400">
          {'Mountain trekking '}
        </span>
        and I have a strong affinity. Exploring the peaks of Shimla and Himachal
        Pradesh has been an exhilarating experience for me. Additionally, I've
        ventured into the wilderness of Mount Abu Wildlife Sanctuary. Mount Abu
        holds a special place in my heart—it's where I spent my formative years,
        surrounded by its natural beauty and serene landscapes. These adventures
        in the mountains not only fuel my adventurous spirit but also connect me
        deeply with nature and my roots.
      </p>
    </div>
  );
}

export default Page;
