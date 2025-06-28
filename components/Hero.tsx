"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-16">
      {/* Spotlight Effect  */}
      <div>
        <Spotlight
          className="top-5 left-20 md:left-32 md:top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-5 left-20 md:left-32 md:top-40 md:-right-10 h-screen"
          fill="blue"
        />
        {/* <Spotlight
          className="top-5 left-60 md:left-32 md:top-20 h-screen"
          fill="white"
        /> */}
        <Spotlight
          className="top-5 left-80 md:left-32 md:top-60 h-screen"
          fill="purple"
        />
       
        {/* <Spotlight
          className="h-[100vh] w-[50vw] -top-10 -left-40"
          fill="purple"
        /> */}
      </div>

      {/* Dotted Background */}
      <div
        className="h-screen w-full bg-black  dark:bg-grid-white/[0.08] bg-grid-black/[0.5]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Banner Text */}
      <div className="flex justify-center relative mt-20 z-50">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-sm  text-center text-blue-100 max-w-80">
            Let me tell you one thing
          </p>

          <TextGenerateEffect
            words="Caffeine and code: My fuel for building awesome things. ☕️"
            className="text-center font-extrabold text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-md md:text-xl lg:text-2xl font-medium">
            Hi! I&apos;m <span className="text-purple-400">Faraaz</span> , a
            MERN, Next.js full stack Developer based in Bangalore.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
        <a href="mailto:farazashraf1523@gmail.com">
          <MagicButton title="I'm looking to hire" />
        </a>
        <a href={"/resume.pdf"} download="/resume.pdf">
          <MagicButton title="Resume" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
