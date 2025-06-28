"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/data/items";

const World = dynamic(() => import("../ui/Globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
 
 
  return (
    <div className="flex flex-row md:items-center justify-center md:py-20 h-[20rem] md:h-auto relative w-full">
      <div className="max-w-7xl mx-auto  w-full  relative overflow-hidden h-[20rem] md:h-[40rem] px-2">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-black z-40" />
        <div className="absolute w-full top-10 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
