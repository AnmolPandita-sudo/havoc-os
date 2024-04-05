"use client";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import logo from "@/pages/images/artboard__1_-removebg-preview.png";
import Image from "next/image";
import { FaGithub, FaInfoCircle, FaTelegramPlane } from "react-icons/fa";
import { BiDevices } from "react-icons/bi";

function Footer() {
  const isSmartphone = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>

      <div className="flex md:flex-row justify-between flex-col bg-gradient-to-r from-[#d3d8df] via-[#e7eaee] to-[#d3d8df] h-36 md:h-20">
        <div className=" flex md:flex-row flex-col md:p-5 p-6 ">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </Link>
          <div className=" flex-row flex md:justify-start justify-center mt-2 md:mt-4 md:ml-12 md:space-x-7 space-x-3 text-gray-500 ">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms Of Use</Link>
          </div>
        </div>

        {isSmartphone ? (
          <div className="flex-row flex justify-center text-2xl -mt-3 space-x-5">
            <Link href="https://github.com/Havoc-OS">
              <span>
                <FaGithub className="text-2xl text-blue-500" />
              </span>
            </Link>

            <Link href="https://t.me/SKULSHADY">
              <span>
                <FaTelegramPlane className="text-2xl text-blue-500" />
              </span>
            </Link>

            <Link href="/aboutus">
              <span>
                <FaInfoCircle className="text-2xl text-blue-500" />
              </span>
            </Link>

            <Link href="/devices">
              <span>
                <BiDevices className="text-2xl text-blue-500" />
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex flex-row md:mr-10 md:space-x-8 md:p-9 p-7 mr-5 md:space-y-0 space-y-1 font-serif ">
            <Link href={"https://github.com/Havoc-OS"}>GitHub</Link>
            <Link href={"https://t.me/SKULSHADY"}>Telegram</Link>
            <Link href="/aboutus">About Us</Link>
            <Link href="/devices">Devices</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
