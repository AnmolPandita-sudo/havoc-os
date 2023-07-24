"use client";
import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import Asus from "./devices/asus";
import Xiaomi from "./devices/xiaomi";
import Google from "./devices/google";
import Motorola from "./devices/motorola";
import OnePlus from "./devices/oneplus";

import Header from "@/pages/Components/Header";
import Footer from "@/pages/Components/Footer";
import { AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { BsArrowBarRight } from "react-icons/bs";

function Devices() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
    <div className="bg-gradient-to-r from-[#f1f5f9] via-[#fdd7aa] to-[#f1f5f9]">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Devices - Havoc-OS</title>
      </head>
      <Header />
      <ScrollToTopButton />
      <div className="sticky top-3 z-1 mt-2 justify-center items-center flex-row hidden md:block">
        <div className="bg-[#fdd096] rounded-2xl flex flex-row justify-center items-center space-x-3">
          <Fade
            triggerOnce={true}
            delay={1200}
            damping={0.7}
            direction="down"
            className="mt-3 mb-3"
          >
            <h1>|</h1>
            <ScrollLink
              to="Asus"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Asus
            </ScrollLink>
            <h1>|</h1>
            <ScrollLink
              to="Google"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Google
            </ScrollLink>
            <h1>|</h1>
            {/* <ScrollLink
              to="GSI"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              GSI
            </ScrollLink>
            <h1>|</h1>
            <ScrollLink
              to="Lenouvu"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Lenouvu
            </ScrollLink>
            <h1>|</h1>
            <ScrollLink
              to="LG"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              LG
            </ScrollLink>
            <h1>|</h1> */}
            <ScrollLink
              to="Motorola"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Motorola
            </ScrollLink>
            <h1>|</h1>
            <ScrollLink
              to="OnePlus"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              OnePlus
            </ScrollLink>
            <h1>|</h1>
            {/* <ScrollLink
              to="Nokia"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Nokia
            </ScrollLink>
            <h1>|</h1>
            
            <ScrollLink
              to="Realme"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Realme
            </ScrollLink>
            <h1>|</h1>
            <ScrollLink
              to="Samsung"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Samsung
            </ScrollLink>
            <h1>|</h1>
            <ScrollLink
              to="Sony"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Sony
            </ScrollLink>
            <h1>|</h1> */}
            <ScrollLink
              to="Xiaomi"
              smooth={true}
              duration={1000}
              className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Xiaomi
            </ScrollLink>
            <h1>|</h1>
          </Fade>
        </div>
      </div>

      <div className=" sticky z-1 top-1/2 md:hidden">
        <div
          className="flex items-center justify-between"
          onClick={handleDropdown}
        >
          <div className={dropdown ? "block" : "hidden"}>
            <div
              className="absolute -top-56 w-[235px] rounded-3xl"
              onMouseLeave={handleDropdown}
            >
              <ul className=" bg-opacity-100 rounded-2xl flex flex-col items-center justify-center text-center w-1/3 font-semibold bg-gray-100 p-4">
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Asus"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Asus
                  </ScrollLink>
                </li>
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Google"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Google
                  </ScrollLink>
                </li>
                {/* <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="GSI"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    GSI
                  </ScrollLink>
                </li>
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="LG"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    LG
                  </ScrollLink>
                </li> */}
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Motorola"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Motorola
                  </ScrollLink>
                </li>
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="OnePlus"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    OnePlus
                  </ScrollLink>
                </li>
                {/* <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Nokia"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Nokia
                  </ScrollLink>
                </li>
                
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Realme"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Realme
                  </ScrollLink>
                </li>
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Samsung"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Samsung
                  </ScrollLink>
                </li>
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Sony"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Sony
                  </ScrollLink>
                </li> */}
                <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Xiaomi"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Xiaomi
                  </ScrollLink>
                </li>
                {/* <li className="flex flex-row p-1 hover:cursor-pointer w-20 justify-center hover:bg-gray-200 rounded-full">
                  <ScrollLink
                    to="Lenouvu"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer rounded-2xl block px-4 py-2 text-sm text-gray-700 "
                    onClick={toggleDropdown}
                  >
                    Lenouvu
                  </ScrollLink>
                </li> */}
              </ul>
            </div>
          </div>
          <Fade triggerOnce={true} delay={1200}>
            {dropdown ? (
              <AiOutlineClose
                style={{ fontSize: "2rem" }}
                className="text-blue-500"
              />
            ) : (
              <BsArrowBarRight
                style={{ fontSize: "2rem" }}
                className="text-blue-500"
              />
            )}
          </Fade>
        </div>
      </div>

      {/* Devices */}

      <div className="md:mt-5 -mt-20 md:ml-0 md:mr-7 ml-7 mr-7">
        <Asus />
        <Xiaomi />
        <Google />
        <Motorola />
        <OnePlus />
      </div>
      <Footer />
    </div>
  );
}

export default Devices;
