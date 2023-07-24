"use client";
// to use unmovable header just add " sticky z-1 top-0 " inside className of first div inside return
import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import Payment from "@/pages/Components/Payment";
import { FaChevronDown, FaDonate } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AiOutlineHome, AiOutlineMobile } from "react-icons/ai";
import { MdGroup, MdOutlineScreenshot } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import logo from "@/pages/images/artboard__1_-removebg-preview.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

function Navbar({}) {
  const router = useRouter();

  const scrollToSection = () => {
    const section = document.getElementById("ScreenShots");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="sticky z-1 top-0 flex items-center justify-between p-4 bg-blue-200 shadow-2xl">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>
      <button className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={150} />
        </Link>
      </button>

      <div className="hidden md:block">
        <div className="flex items-center space-x-3">
          <h1>|</h1>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="hover:cursor-pointer transition ease-in-out duration-1000 hover:border-gray-500 hover:border-b-2 hover:mt-[1px] text-md flex items-center space-x-1"
          >
            <AiOutlineHome />
            <span>Home</span>
          </button>
          <h1>|</h1>
          <Link
            href="/devices"
            className="hover:cursor-pointer transition ease-in-out duration-1000 hover:border-gray-500 hover:border-b-2 hover:mt-[1px] text-md flex items-center space-x-1"
          >
            <AiOutlineMobile />
            Devices
          </Link>
          <h1>|</h1>
          <ScrollLink
            to="screenshots"
            smooth={true}
            duration={500}
            onClick={scrollToSection}
            className="hover:cursor-pointer transition ease-in-out duration-1000 hover:border-gray-500 hover:border-b-2 hover:mt-[1px] text-md flex items-center space-x-1"
          >
            <MdOutlineScreenshot />
            ScreenShots
          </ScrollLink>
          <h1>|</h1>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer transition ease-in-out duration-1000 hover:border-gray-500 hover:border-b-2 hover:mt-[1px] text-md flex items-center space-x-1"
          >
            <BsFillLightningChargeFill />
            Features
          </ScrollLink>
          <h1>|</h1>
          <ScrollLink
            to="teams"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer transition ease-in-out duration-1000 hover:border-gray-500 hover:border-b-2 hover:mt-[1px] text-md flex items-center space-x-1"
          >
            <MdGroup />
            Teams
          </ScrollLink>
          <h1>|</h1>
          <Payment isOpenByDefault={false} />
          <h1>|</h1>
        </div>
      </div>

      <div className=" relative md:hidden">
        <div className="flex items-center mr-5" onClick={handleDropdown}>
          <FaChevronDown
            style={{ fontSize: "2rem" }}
            className="text-blue-500"
          />
          {dropdown && (
            <div
              className="absolute right-[20%] top-12 w-[235px] bg-[#0080ff] ml-0 p-0  z-1000 rounded-3xl"
              onMouseLeave={handleDropdown}
            >
              <ul className=" list-none p-2">
                <li
                  onClick={() => {
                    router.push("/");
                  }}
                  className="flex flex-row items-center text-white mb-2 cursor-pointer text-lg p-1"
                >
                  <AiOutlineHome className=" mt-0.5 mr-2" />
                  Home
                </li>
                <li
                  onClick={() => {
                    router.push("/devices");
                  }}
                  className="flex flex-row items-center text-white mb-2 cursor-pointer text-lg p-1"
                >
                  <AiOutlineMobile className=" mt-0.5 mr-2" />
                  Devices
                </li>
                <li className="flex flex-row items-center text-white mb-2 cursor-pointer text-lg p-1">
                  <ScrollLink
                    to="screenshots"
                    smooth={true}
                    duration={500}
                    onClick={scrollToSection}
                    className=" flex flex-row"
                  >
                    <MdOutlineScreenshot className="mt-0.5 mr-2" />
                    ScreenShots
                  </ScrollLink>
                </li>
                <li className="flex flex-row items-center text-white mb-2 cursor-pointer text-lg p-1">
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={500}
                    className=" flex flex-row"
                  >
                    <BsFillLightningChargeFill className="mt-0.5 mr-2" />
                    Features
                  </ScrollLink>
                </li>
                <li className="flex flex-row items-center text-white mb-2 cursor-pointer text-lg p-1">
                  <ScrollLink
                    to="teams"
                    smooth={true}
                    duration={500}
                    className=" flex flex-row"
                  >
                    <MdGroup className="mt-0.5 mr-2" />
                    Teams
                  </ScrollLink>
                </li>
                <li className="flex flex-row items-center text-white mb-2 cursor-pointer text-lg p-1">
                  <ScrollLink
                    to="donate"
                    smooth={true}
                    duration={500}
                    className=" flex flex-row"
                  >
                    <FaDonate className="mt-0.5 mr-2" />
                    Donate
                  </ScrollLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
