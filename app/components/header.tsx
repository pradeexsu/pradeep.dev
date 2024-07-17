import React from "react";
import { FlipWords } from "./ui/flip-words";

function Header() {
  return (
    <div className="my-16">
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
