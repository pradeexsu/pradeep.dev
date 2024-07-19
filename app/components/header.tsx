import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import avatar from "@/public/pradeep.jpg";

function Header() {
  return (
    <div className="my-4 border-b pb-2 border-boarderGray">
        <Image
          src={avatar}
          width={54}
          alt={"pradeep"}
          className="rounded-full scale-125 bg-cover border border-white/30 mb-5 ml-3"
        />
      <h1 className=" text-2xl font-medium tracking-tighter font-mono">
        {`Pradeep Suthar`}
      </h1>

      <div className="text-sm">
        Software
        <FlipWords
          words={["Developer", "Engineer", "Consultant"]}
        />
      </div>
    </div>
  );
}

export default Header;
