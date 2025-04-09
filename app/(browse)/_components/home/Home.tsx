"use client";
import React from "react";

import HomeLink from "@/app/(browse)/_components/home/HomeLink";

const Home = () => {
  return (
    <section className={"mt-36 container"}>
      <div className={"grid grid-cols-2"}>
        <div>
          <h1 className={"text-6xl mb-12 font-bold flex-col space-y-4"}>
            <div>Connect!</div>
            <div
              className={
                "bg-clip-text text-transparent bg-gradient-to-br dark:from-blue-500 dark:to-violet-300 from-amber-600 to-amber-500"
              }
            >
              Collaborate!
            </div>
            <div>Conquer!</div>
          </h1>
          <p className={"text-xl mb-12"}>
            Introducing Team Sync - the ultimate hackathon hub. Connect
            effortlessly with peers, mentors, and hackathons. Find your perfect
            team based on difficulty, tech stack, and location. No more
            platform-hopping - mentors are just a tap away. Dive into innovation
            with all hackathons listed here.
          </p>
          <div className={"inline-flex space-x-6"}>
            <HomeLink href={"HackathonSec"} name={"Explore Hackathons"} />
            <HomeLink href={"TechCommunity"} name={"Explore Communities"} />
          </div>
        </div>
        <div className={"text-center"}>
          <img
            src={"/hero-image.jpg"}
            className={"rounded-2xl w-[80%] mx-auto h-full shadow-blue-200"}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
