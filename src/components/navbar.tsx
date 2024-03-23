"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Itim } from "next/font/google";
import ModeToggle from "./toogle";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { menu } from "../constant/index";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const itim = Itim({
  weight: ["400", "400"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={`fixed  font-medium text-primary top-0 left-0 right-0 z-50 w-full flex justify-between items-center px-6 sm:px-16 py-6 backdrop-blur-sm  `}
    >
      <div className={`${itim.className} text-3xl`}>he.</div>

      {/* for large screen */}
      <ul className="hidden dark:text-white1 sm:flex items-center sm:space-x-6 md:space-x-9 lg:space-x-12">
        {menu.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={clsx(
                {
                  "text-gray-500 dark:text-gray-500": pathname === href,
                },
                " hover:text-gray-500 dark:hover:text-gray-500"
              )}
              onClick={() => setOpen(!open)}
            >
              {name}
            </Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>

      {/* for small screen */}
      {open ? (
        <>
          <IoCloseOutline
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <ul
            className="p-6 bg-gray-200 bg-gradient-to-t from-gray-50 to-gray-100
           dark:bg-gray-900 dark:bg-gradient-to-t dark:from-gray-950 dark:to-gray-900 absolute top-20 right-0 mx-4 my-2 
           min-w-[140px] rounded-xl sidebar sm:hidden flex flex-col gap-6
           "
          >
            {menu.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className={clsx(
                    {
                      "  text-gray-500 dark:text-gray-500": pathname === href,
                    },
                    " hover:text-gray-500 dark:hover:text-gray-s00"
                  )}
                  onClick={() => setOpen(!open)}
                >
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <ModeToggle />
            </li>
          </ul>
        </>
      ) : (
        <CgMenuRight
          className="text-3xl sm:hidden cursor-pointer transition ease-in-out duration-300"
          onClick={() => setOpen(!open)}
        />
      )}
    </nav>
  );
}
