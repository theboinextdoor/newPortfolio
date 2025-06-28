'use client';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3DCard';
import Image from 'next/image';
import React from 'react';
import { projectItem } from '@/data/items';

export function Project() {
  return (
    <section
      className="min-h-screen mx-2 overflow-hidden grid grid-cols-1 sm:grid-cols-2  gap-6 place-items-center py-10"
      id="project"
    >
      {projectItem.map((item) => (
        <CardContainer className="inter-var" key={item.id}>
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] w-[90vw] sm:w-[22rem] md:w-[24rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {item.name}
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-md max-w-sm mt-2"
            >
              {item.language}
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.img}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href={item.livelink}
                target="__blank"
                className="px-4 py-2 rounded-xl text-lg font-normal text-white hover:text-blue-400"
              >
                Live Demo →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </section>
  );
}
