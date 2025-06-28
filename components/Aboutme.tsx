import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Flip from "./ui/Flip";
import { Card } from "./ui/Card";
import { GlobeDemo } from "./ui/GlobeDemo";

const Aboutme = () => {
  return (
    <section className="mt-14 md:mt-36" id="about">


      {/* Heading */}
      <div className="flex items-center justify-center p-8 text-4xl font-medium">
        <h1>About me</h1>
      </div>

      <div
        className="flex flex-col xl:flex-row justify-around items-center min-h-screen w-full
      mx-auto my-auto"
      >
        <div className="order-1 w-full xl:w-1/2 h-full flex flex-col gap-1 items-center xl:justify-start justify-start pt-5">
          <h2 className="lg:text-6xl text-2xl pb-2 text-center">
            I am <br />
            <span className="font-extrabold text-4xl text-purple-700">
              Faraaz Ashraf
            </span>
          </h2>
          <Flip />
          <Card />
        </div>

        <div className=" w-full xl:w-2/5 flex items-center justify-center">
          <GlobeDemo />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
