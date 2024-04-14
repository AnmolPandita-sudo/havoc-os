"use client";
import Image from "next/image";
import donate from "@/pages/images/artboard__1_-removebg.png";
import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

function Donate() {
  return (
    <div id="donate">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>
      <div className=" flex flex-col md:flex-row bg-[#9BB6B9] shadow-2xl mt-28 h-auto md:h-80 space-x-20 md:space-x-96">
        <div className="flex flex-col mt-20 md:mt-0 text-center justify-between md:p-24">
          <h1 className=" font-extrabold font-serif text-4xl">Contribute</h1>
          <p className="md:w-auto w-5/6 mx-auto">
            Do you like our project? Show your support by donating.
          </p>
          <div className="flex flex-row items-center justify-center">
            <Link
              href={"https://www.paypal.com/paypalme/ANUSHEK"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-4 w-28 rounded items-center justify-center"
            >
              Donate
            </Link>
          </div>
          <div className="flex flex-row justify-center">
            <h1 className="mt-1 mb-2">UPI:</h1>
            <a className=" font-crimson text-xl ml-3">
              anushekprasal@okhdfcbank
            </a>
          </div>
        </div>
        <Image
          src={donate}
          alt="donate_logo"
          height={300}
          className="w-44 items-center justify-between"
        />
      </div>
    </div>
  );
}

export default Donate;
