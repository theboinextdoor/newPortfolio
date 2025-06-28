import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCard";
import { movingCard } from "@/data/items";
import MagicButton from "./MagicButton";
import Link from "next/link";

const MovingCard = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-2 ">
      <div className="h-[40rem] rounded-md flex flex-col antialiased  bg-black bg-grid-white/[0.07] items-center justify-center relative overflow-hidden z-10">
        <div className="py-10 ">
          <h1 className="text-3xl font-extrabold md:text-5xl lg:text-7xl">
            My Tech Stack
          </h1>
        </div>
        <InfiniteMovingCards
          items={movingCard}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default MovingCard;
