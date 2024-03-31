import Image from "next/image";
import { Poppins } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export default function Projects() {
  return (
    <div className={` ${poppins.className} space-y-8`}>
      <div
        className={`px-6 sm:px-16  flex flex-col md:grid md:grid-cols-3 items-center space-y-8 mb-20 `}
      >
        <div className="md:col-span-2 space-y-6 md:mr-12 text-lg">
          <h1 className="text-4xl">Hello again 👋 !!</h1>
          <div>
            {`I'm Herman Effendi, and my friends call me Herman. I am a software
            engineer currently pursuing a bachelor's degree in Data Science. As
            a software engineer, I am accustomed to contributing to the complete
            project life cycle, from idea to implementation. Solving problems
            through coding has been my passion since high school.`}
          </div>

          <div>
            {`Apart from my favorite coding moments when I'm not behind my laptop,
            you can find me jogging in the late afternoon before sunset. It's
            part of my daily routine to maintain overall health and well-being.
            As I run, I feel like I'm following a routine that helps keep my
            mind and body balanced. Connecting with nature as the sun gradually
            sets gives me a chance to reflect and appreciate the day that has
            passed.`}
          </div>
        </div>

        <div className="md:col-span-1 flex place-items-start justify-center">
          <Image
            src="/herman.png"
            width={300}
            height={300}
            alt="herman"
            className="brightness-105 dark:brightness-90 "
          />
        </div>
      </div>
      <div className="py-12 bg-gray-50 dark:bg-gray-950 px-6 sm:px-16 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl">Education</h1>
          <div className="space-y-2">
            <p className="font-semibold">
              {`Bachelor's Degree in Data Science, Universitas Airlangga`}
            </p>
            <p>July 2022 - Present</p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className=" space-y-4 ">
          <h1 className="text-4xl">Experience</h1>
          <div className="space-y-2">
            <p className="font-semibold">Staff Dataquest | Airnology 2.0</p>
            <p>Nov 2023 - Dec 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
