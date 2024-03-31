import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { MdDone } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import {
  SiReact as React,
  SiVite as Vite,
  SiExpress as Express,
  SiMongodb as Mongodb,
  SiTailwindcss as Tailwind,
  SiNodedotjs as Nodejs,
  SiVercel as Vercel,
  SiTypescript as Typescript,
  SiNextdotjs as Nextjs,
} from "react-icons/si";

const inter = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

const Card = (selected: any) => {
  return (
    <div className="flex flex-col space-y-12 lg:grid lg:grid-cols-3">
      <Image
        alt="logo"
        src={selected.href}
        width={200}
        height={200}
        className="w-[90%] h-[90%] max-w-[500px] max-h-[500px] lg:col-span-2 lg:max-w-[650px] lg:max-h-[450px] rounded-md dark:brightness-95"
      />

      <div>
        <h2 className={`text-3xl ${inter.className}`}>{selected.title}</h2>
        <ul className="space-y-2 mt-4 md:mt-10">
          {selected.descriptions.map((description: any, index: number) => (
            <li key={index} className="grid grid-cols-[20px_1fr] ">
              <MdDone className="text-xl mt-[2px] pr-1" />
              {description}
            </li>
          ))}
        </ul>
        <div className="my-6 md:my-8 flex flex-wrap space-x-6 lg:space-x-10">
          {selected.stacks.map((stack: string, index: number) => {
            if (stack === "react") {
              return <React key={index} className="text-4xl text-blue-500" />;
            } else if (stack === "vite") {
              return <Vite key={index} className="text-4xl text-blue-500" />;
            } else if (stack === "express") {
              return (
                <Express
                  key={index}
                  className="text-4xl text-gray-900 dark:text-gray-400"
                />
              );
            } else if (stack === "mongodb") {
              return (
                <Mongodb key={index} className="text-4xl text-green-600" />
              );
            } else if (stack === "tailwind") {
              return <Tailwind key={index} className="text-4xl text-sky-500" />;
            } else if (stack === "nodejs") {
              return <Nodejs key={index} className="text-4xl text-green-500" />;
            } else if (stack === "vercel") {
              return <Vercel key={index} className="text-4xl" />;
            } else if (stack === "typescript") {
              return (
                <Typescript
                  key={index}
                  className="text-4xl text-blue-500 dark:text-blue-700"
                />
              );
            } else if (stack === "nextjs") {
              return <Nextjs key={index} className="text-4xl " />;
            }
          })}
        </div>
        <h3 className="mt-10 lg:mt-12 dark:text-blue-600 text-blue-500 hover:dark:text-blue-500 hover:text-blue-600 ">
          <Link
            href={selected.link}
            target="_blank"
            className="font-semibold text-lg"
          >
            Read More
            <FaArrowRightLong className="inline-block ml-2" />
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Card;
