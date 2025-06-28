import React from "react";
import { Vortex } from "../ui/Vortex";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { FlipWords } from "./FlipWords";

export function VortexDemoSecond() {
  const words = ["God" , "Code" , ]
  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Hit me up!
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl my-6 text-center">
        I&apos;m always down to chat about projects, tech, or just grab some coffee
        </p>
        <AnimatedTooltipPreview />
        <div className="text-2xl font-medium">
           May the<FlipWords words={words} />be with you!
        </div>
      </Vortex>
    </div>
  );
}
