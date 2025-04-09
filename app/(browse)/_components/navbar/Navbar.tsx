"use client";
import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconGlobeFilled,
  IconGlobe,
} from "@tabler/icons-react";
import { Infinity } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 dark:text-gray-100 text-gray-800" />,
    },
    {
      name: "About",
      link: "/about-us",
      icon: <IconUser className="h-4 w-4 dark:text-gray-100 text-gray-800" />,
    },
    {
      name: "Contact",
      link: "/contact-us",
      icon: (
        <IconMessage className="h-4 w-4 dark:text-gray-100 text-gray-800" />
      ),
    },
    {
      name: "Explore Hackathons",
      link: "/HackathonSec",
      icon: <IconGlobe className="h-4 w-4 dark:text-gray-100 text-gray-800" />,
    },
    {
      name: "Community",
      link: "/TechCommunity",
      icon: (
        <IconGlobeFilled className="h-4 w-4 dark:text-gray-100 text-gray-800" />
      ),
    },
  ];

  const theme = window.localStorage.getItem("theme");
  return (
    <>
      <div className="flex h-20 top-0 w-full mx-auto justify-between items-center py-4 container ">
        <Link href={"/"} className={"flex items-center space-x-4"}>
          <div
            className={cn(
              "text-6xl text-amber-500 dark:text-blue-500 font-extrabold font-nautigal",
            )}
          >
            Team
          </div>
          <Infinity
            size={50}
            className={cn(
              "dark:text-[#4987f7]",
              theme === "light" && "text-amber-500",
            )}
            strokeWidth={1.5}
          />
          <div
            className={cn(
              "text-6xl text-amber-500 dark:text-blue-500 font-extrabold font-nautigal",
            )}
          >
            Sync
          </div>
        </Link>
        <div className={"flex justify-between"}>
          {navItems.map((navItem) => (
            <div
              className={
                "inline-flex text-center mx-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-amber-500 duration-300"
              }
              key={navItem.name}
            >
              <div className={"inline-flex items-center"}>
                <p className={"pr-2"}>{navItem.icon}</p>
                <Link
                  className={"dark:text-gray-100 text-gray-800"}
                  href={navItem.link}
                >
                  {navItem.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={"inline-flex space-x-4 items-center"}>
          <ModeToggle />
          <UserButton userProfileMode={"navigation"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
