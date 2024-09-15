import { RocketIcon } from "@radix-ui/react-icons"
import { Ubuntu_Mono } from "next/font/google";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const githubUrl = 'https://github.com/hrmneffdii';
const ubuntu = Ubuntu_Mono({ weight: "400", preload: true , subsets: ["latin"]});

export default function Resume() {
  
  return (
    <Alert className={`${ubuntu.className} bg-white2 shadow-md dark:bg-gray-900 dark:shadow-md w-[50%] mx-auto sm:my-[30%] lg:my-[10%] md:my-[20%] my-[40%]`}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        For more details, let's visit my github <a href={`${githubUrl}`} target="_blank" className="text-blue-500 underline">profile.</a>
      </AlertDescription>
    </Alert>
  );
}
