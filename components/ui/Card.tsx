"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./WoobleCard";
import Link from "next/link";

export function Card() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-4 ">

      {/* First Card */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs ">
          <h2 className="text-left text-balance text-base md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Driving Innovation and Excellence in Web Application Development
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            As a MERN Stack Developer, I am passionate about crafting robust,
            scalable web applications and continuously exploring the latest
            technologies to enhance user experiences and drive innovation in the
            digital landscape.
          </p>
        </div>
        <Image
          src="/abt1.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-20 lg:-right-[40%] grayscale -rotate-45 filter -bottom-28 object-contain rounded-2xl z-10"
        />
      </WobbleCard>



      {/* Second Cad */}
      <WobbleCard containerClassName="col-span-1 min-h-[50px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Future Explorations: The Intersection of Innovation
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          I'm deeply fascinated by the potential of emerging fields like
          Blockchain, Artificial Intelligence, and Machine Learning, and I'm
          actively seeking opportunities to explore them further.
        </p>
      </WobbleCard>

      {/* Third Card */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Looking for collaboration on a Full Stack Project
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          I'm actively seeking opportunities to collaborate on innovative projects. If you're looking for a MERN Stack developer, I'd love to hear from you
          </p>
          
        </div>
        <Image
          src="/abt1.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
