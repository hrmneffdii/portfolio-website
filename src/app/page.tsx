"use client";

import { Inter } from "next/font/google";
import { FaArrowDown } from "react-icons/fa6";
import { useRef } from "react";
import { selectedProjects } from "@/constant";
import Card from "@/components/card";
import { Separator } from "@radix-ui/react-separator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const selectedProjectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" ">
      <div
        className={`px-6 sm:px-16 min-h-screen text-4xl leading-normal pt-8 sm:text-[40px] sm:pt-12 md:text-5xl md:leading-normal md:pt-14  ${inter.className} `}
      >
        <span className="">Hello there 👋</span> ,<br></br>
        <span>
          {`I'm`}
          <span className="text-blue-600 dark:text-blue-500"> Herman</span>
        </span>
        , Someone who is intrigued by the potential of{" "}
        <span className="text-blue-600 dark:text-blue-500">
          smart contract{" "}
        </span>
        in blockchain technology.
      </div>
      <div
        className="absolute bottom-12 right-1/2 cursor-pointer"
        onClick={() => {
          console.log("clicked");
        }}
      >
        {/* if icon clicked, go down and show selected projects */}
        <FaArrowDown
          className="text-4xl animate-bounce"
          onClick={() => {
            window.scrollTo({
              top: selectedProjectsRef.current?.offsetTop,
              behavior: "smooth",
            });
          }}
        />
      </div>

      <div
        ref={selectedProjectsRef}
        className="selectedProjects py-6 bg-white dark:bg-[#0c1118]"
      >
        <div className="px-6 sm:px-16">
          <h1
            className={`text-3xl pb-10 sm:text-[33px] sm:pt-8 sm:pb-12 md:text-4xl md:pt-10 md:pb-14 ${inter.className}`}
          >
            Selected Projects
          </h1>

          {/* projects list */}
          {selectedProjects.map((selectedProject, index) => (
            <div key={index}>
              <Card {...selectedProject} />
              <Separator className="my-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
