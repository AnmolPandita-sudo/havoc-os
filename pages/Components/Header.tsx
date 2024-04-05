"use client";
// to use unmovable header just add " sticky z-1 top-0 " inside className of first div inside return
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import Payment from "@/pages/Components/Payment";
import { FaChevronDown, FaDonate } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AiOutlineHome, AiOutlineMobile } from "react-icons/ai";
import {
  MdGroup,
  MdOutlineScreenshot,
  MdOutlineSegment,
  MdCancel,
} from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import logo from "@/pages/images/artboard__1_-removebg-preview.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

function Navbar({}) {
  const router = useRouter();
  const [dateTime, setDateTime] = useState(new Date());

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="sticky z-1 top-0 flex items-center justify-between p-4 bg-blue-200 shadow-2xl">
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

      <div className=" absulute md:hidden">
        <div
          className="block px-4 py-2 text-blue-500 focus:outline-none"
          onClick={handleDropdown}
        >
          <MdOutlineSegment style={{ fontSize: "2rem" }} className="" />
          {dropdown && (
            <div
              className=" absolute right-[14px] mt-2 w-11/12 bg-white rounded-lg shadow-lg z-10 h-[700px] md:h-[600px]"
              onMouseLeave={handleDropdown}
            >
              <ul className=" list-none p-2  my-10">
                <li
                  onClick={() => {
                    router.push("/");
                  }}
                  className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5"
                >
                  {/* <AiOutlineHome className=" mt-0.5" /> */}
                  <span className="mx-auto flex flex-row text-white">
                    <AiOutlineHome className=" mt-[3px] mr-1" />
                    Home
                  </span>
                </li>
                <li
                  onClick={() => {
                    router.push("/devices");
                  }}
                  className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5"
                >
                  {/* <AiOutlineMobile className=" mt-0.5 mr-2" />
                  Devices */}
                  <span className="mx-auto flex flex-row text-white">
                    <AiOutlineMobile className=" mt-[3px] mr-1" />
                    Devices
                  </span>
                </li>
                <li className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5">
                  <ScrollLink
                    to="screenshots"
                    smooth={true}
                    duration={500}
                    onClick={scrollToSection}
                    className=" flex flex-row mx-auto"
                  >
                    <span className="flex flex-row text-white">
                      <MdOutlineScreenshot className=" mt-[3px] mr-1" />
                      ScreenShots
                    </span>
                  </ScrollLink>
                </li>
                <li className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5">
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={500}
                    className=" flex flex-row mx-auto"
                  >
                    {/* <BsFillLightningChargeFill className="mt-0.5 mr-2" />
                    Features */}
                    <span className=" flex flex-row text-white">
                      <BsFillLightningChargeFill className=" mt-[3px] mr-1" />
                      Features
                    </span>
                  </ScrollLink>
                </li>
                <li className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5">
                  <ScrollLink
                    to="teams"
                    smooth={true}
                    duration={500}
                    className=" flex flex-row mx-auto"
                  >
                    {/* <MdGroup className="mt-0.5 mr-2" />
                    Teams */}
                    <span className=" flex flex-row text-white ">
                      <MdGroup className=" mt-[3px] mr-1" />
                      Teams
                    </span>
                  </ScrollLink>
                </li>
                <li className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5">
                  <ScrollLink
                    to="donate"
                    smooth={true}
                    duration={500}
                    className=" flex flex-row mx-auto"
                  >
                    {/* <FaDonate className="mt-0.5 mr-2" />
                    Donate */}
                    <span className="flex flex-row text-white">
                      <FaDonate className=" mt-[3px] mr-1" />
                      Donate
                    </span>
                  </ScrollLink>
                </li>
              </ul>
              <span className="flex items-center justify-center px-4 my-5">
                <MdCancel className=" h-16 w-16 mx-auto md:hidden" />
              </span>

              <div className="flex md:flex-col flex-row mx-10 space-x-5 text-center justify-center font-dancing-script text-xl mt-5">
                <p>
                  {dateTime.toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>
                  {dateTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
