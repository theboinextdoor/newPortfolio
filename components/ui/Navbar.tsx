"use client";
import React from "react";
import { FloatingNav } from "./FloatingNav";
import { IconHome, IconMessage, IconUser , IconBadge
} from "@tabler/icons-react";

const Navbar =() => {
  return (
    <div className="relative  w-full">
     <FloatingNav navItems={navItems}/>
    </div>
  );
}

export const navItems = [
     {
       name: "Home",
       link: "/",
       icon : <IconHome className="h-4 w-4 text-white" />,
     },
     {
       name: "About",
       link: "#about",
       icon: <IconUser className="h-4 w-4 text-white" />,
     },
     {
       name: "Project",
       link: "#project",
       icon: <IconBadge className="h-4 w-4 text-white" />,
     },
     {
       name: "Contact",
       link: "#contact",
       icon: (
          <IconMessage className="h-4 w-4 text-white" />
        ),
     },
   ];

export default Navbar;

