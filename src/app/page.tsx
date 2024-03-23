import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col gap-36 pt-24 sm:flex sm:flex-row sm:gap-0 sm:justify-evenly">
      <div className="text-center text-3xl justify-center sm:w-[1/2]">
        {`Hi, there `}
        <div className="dark:text-sky-500 text-sky-300">Software engginer</div>
      </div>
      <div className="flex space-x-14 justify-center sm:w-[1/2]">
        <SiNextdotjs className="text-3xl" />
        <SiTailwindcss className="text-3xl text-sky-500" />
        <SiPrisma className="text-3xl " />
        <SiMongodb className="text-3xl text-green-600 dark:text-green-700" />
      </div>
    </div>
  );
}
