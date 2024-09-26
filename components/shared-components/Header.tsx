"use client";
import Link from "next/link";
import Image from "next/image";

import { mainMenu } from "@/lib/menus";
import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { useState } from "react";
import { mainMenuType } from "@/lib/types/menu-types";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-section relative flex items-center py-5 px-5 md:px-10  lg:px-20 h-16  lg:h-20 w-full justify-between ">
      <Link href="/" className=" w-16 h-16 lg:w-16 lg:h-16 ">
        <Image
          src="/img/logos/momtan-logo without subtitle-header.png"
          alt="logo of the header"
          width="100"
          height="100"
          // fill={true}
          sizes="(max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-contain"
          priority={true}
        />
      </Link>
      {/* //desktop and big screen nav */}
      <nav className="hidden lg:flex items-center gap-6 text-xs">
        {mainMenu.map((menu: mainMenuType) => (
          <Link
            key={menu.name}
            href={menu.href}
            className="text-grey font-medium text-lg capitalize transition-colors duration-300 inline-block
           py-[1.2rem] hover:text-shade active:text-shade"
          >
            {menu.name}
          </Link>
        ))}
        {/* cta */}
        <Link
          href="/donation"
          className="bg-primary/90 hover:bg-primary text-white uppercase font-medium text-lg px-5 py-px border rounded-lg "
        >
          Donate
        </Link>{" "}
      </nav>
      <div className="action hidden  lg:flex justify-between lg:w-24 gap-6 items-center">
        <CiSearch className="text-grey stroke-1 w-7 h-7 cursor-pointer" />
        <FaGlobeAmericas
          className="text-grey w-6 h-6 cursor-pointer"
          onClick={() => alert("choose a language")}
        />
      </div>

      {/* mobile nav */}

      {/* nav actions */}
      <div className="action lg:hidden   flex justify-between lg:w-24 gap-6 items-center">
        <CiSearch className="text-grey stroke-1 w-7 h-7 cursor-pointer" />
        <FaGlobeAmericas
          className="text-grey w-6 h-6  cursor-pointer"
          onClick={() => alert("choose a language")}
        />
        <div className="open-close relative  flex items-center justify-center">
          <CiMenuFries
            onClick={() => setOpen(!open)}
            className={` stroke-1 w-6 h-6 cursor-pointer text-grey transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <IoIosCloseCircleOutline
            className={`absolute transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            } cursor-pointer text-grey h-8 w-8 z-10`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <nav
        className={`w-full h-full fixed top-0 right-0 flex flex-col justify-center items-center
          bg-white text-tint z-2 transition-all duration-300 transform opacity-80  ${
            open ? "translate-x-0" : "translate-x-full"
          }
        `}
      >
        {mainMenu.map((menu: mainMenuType) => (
          <Link
            key={menu.name}
            href={menu.href}
            className="text-grey font-medium text-lg capitalize transition-colors duration-300 inline-block
           py-[1.2rem] hover:text-shade active:text-shade"
          >
            {menu.name}
          </Link>
        ))}
        <Link
          href="/donation"
          className="bg-primary/90 hover:bg-primary text-white uppercase font-medium text-lg px-5 py-px border rounded-lg "
        >
          Donate
        </Link>
      </nav>
    </header>
  );
}
