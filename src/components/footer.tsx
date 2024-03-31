"use client";

import { MdOutlineEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";

export function Footer() {
  return (
    <div className="my-6 space-y-4 px-6 sm:px-16 ">
      <div className="text-4xl space-y-2">
        <h1>Like what you see ??</h1>
        <h1>
          View my <span className="text-blue-500">resume</span>, Get in touch
          for <span className="text-blue-500">Collaboration</span>.
        </h1>
      </div>
      <div className="flex items-center gap-2 py-6">
        <div
          className="text-2xl items-center flex gap-2 cursor-pointer"
          onClick={() =>
            (window.location.href = "mailto:hermaneffendi0502@gmail.com")
          }
        >
          Email <MdOutlineEmail />
        </div>
        |
        <div
          className="text-2xl items-center flex gap-2 cursor-pointer"
          onClick={() =>
            window.open(`https://www.linkedin.com/in/herman-effendi/`)
          }
        >
          LinkedIn <MdWork />
        </div>
      </div>
      <div> Created by Herman © {new Date().getFullYear()}</div>
    </div>
  );
}
