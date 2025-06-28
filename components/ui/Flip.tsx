import React from "react";
import { FlipWords } from "./FlipWords";

const Flip = () => {
  const words = ["MERN Stack Developer" , "Coding Enthusiast" ,"Open Source Contributor", "Problem Solver" , "Learner" , "Collaborator" ];
  return (
    <div className="lg:text-4xl text-2xl mx-auto font-normal text-neutral-400 mb-2">
      <FlipWords words={words} /> <br />
    </div>
  );
};

export default Flip;
