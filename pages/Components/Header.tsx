"use client";
// to use unmovable header just add " sticky z-1 top-0 " inside className of first div inside return
import "tailwindcss/tailwind.css";
import React, { useEffect } from "react";
import Payment from "@/pages/Components/Payment";
import { AiOutlineHome, AiOutlineMobile } from "react-icons/ai";
import { MdGroup, MdOutlineScreenshot } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import logo from "@/pages/images/artboard__1_-removebg-preview.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import SideBar from "./SideBar";

function Navbar() {
  const isHomePage =
    typeof window !== "undefined" && window.location.pathname === "/";
  return (
    <nav className="flex flex-row sticky z-10 top-0 items-center justify-between md:justify-evenly p-4">
      <button
        className="flex items-center bg-[#dcd7d7]  hover:bg-[#ffffff]  rounded-xl md:h-16 md:w-48 h-12 w-36"
        onClick={() => {
          if (isHomePage) {
            window.location.reload();
          } else {
            window.location.href = "/";
          }
        }}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={150}
            className="ml-4 md:h-12 md:w-36 h-10 w-28 text-gray-900"
          />
        </Link>
      </button>

      <div className="hidden md:block">
        <div className="flex items-center space-x-3 mr-5 h-16 bg-[#dcd7d7] rounded-xl ">
          <Link href="/" className="headerButton fontDuration ml-5">
            <AiOutlineHome className="ml-1" />
            <span>Home</span>
          </Link>

          <Link href="/devices" className="headerButton fontDuration">
            <AiOutlineMobile />
            Devices
          </Link>

          <ScrollLink
            to="screenshots"
            smooth={true}
            duration={500}
            className="headerButton fontDuration w-36"
          >
            <MdOutlineScreenshot />
            ScreenShots
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="headerButton fontDuration"
          >
            <BsFillLightningChargeFill />
            Features
          </ScrollLink>

          <ScrollLink
            to="teams"
            smooth={true}
            duration={500}
            className="headerButton fontDuration"
          >
            <MdGroup />
            <span className="md:mt-0 mt-3">Teams</span>
          </ScrollLink>
          <p> </p>
          <p> </p>
          {/* <div className="headerButton fontDuration mr-5 p-5">
            <Payment isOpenByDefault={false} />
          </div> */}
        </div>
      </div>
      <div className="hidden md:block">
        <button className="flex items-center space-x-3 mr-5 h-16 bg-[#dcd7d7] rounded-xl headerButton fontDuration w-48">
          <Payment isOpenByDefault={false} />
        </button>
      </div>

      <div className=" absulute md:hidden ">
        <SideBar isOpenByDefault={false} />
      </div>
    </nav>
  );
}

export default Navbar;
