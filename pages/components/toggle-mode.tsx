import React, { useState } from "react";
import { MoonIcon } from "./assets/MoonIcon";
import { SunIcon } from "./assets/SunIcon";
import useSound from "use-sound";

const ThemeModeToggler: React.FC<any> = (props) => {
  const [dark, toggleDark] = useState(true);
  const boopSfx = "/toot-sound.mp3";
  // const boopSfx = "/toot-light-sound.mp3";
  // console.log(boopSfx);
  
  const [play] = useSound(boopSfx);
  const toggleMode = () => {
    toggleDark(!dark);
    play();
  };
  return (
    <span onClick={toggleMode} className="absolute h-20">
      {(dark && <MoonIcon />) || <SunIcon />}
    </span>
  );
};

export default ThemeModeToggler;
