import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import avatar from "@/public/pradeep-avatar.png";

function Header() {
  return (
    <div className="my-4 border-b pb-2 border-boarderGray">
        <div className="border-4 border-white/10 w-fit h-fit mb-5 ml-3 rounded-full">
        <Image
          src={avatar}
          width={72}
          alt={"Pradeep's photo"}
          className="rounded-full bg-cover border-white "
        />
        </div>
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
