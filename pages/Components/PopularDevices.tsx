/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import "app/globals.css";
import "tailwindcss/tailwind.css";
import Lottie from "lottie-react";
import SwipeLeft from "@/pages/icons/Swipe left.json";
const popularDevices = [
  {
    name: "Poco X3 Pro",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/vayu.png",
    codeName: "vayu",
  },
  {
    name: "Pixel 7 Pro",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/cheetah.png",
    codeName: "cheetah",
  },
  {
    name: "Moto Edge (2021)",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/berlna.png",
    codeName: "berlna",
  },
  {
    name: "ZenFone Max Pro M1",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/X00TD.png",
    codeName: "X00TD",
  },
  {
    name: "Redmi Note 7",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/lavender.png",
    codeName: "lavender",
  },
  {
    name: "Pixel 7a",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/lynx.png",
    codeName: "lynx",
  },
  {
    name: "OnePlus 6T",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/fajita.png",
    codeName: "fajita",
  },
  {
    name: "Moto G 5G",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/kiev.png",
    codeName: "kiev",
  },
  {
    name: "OnePlus 6",
    image:
      "https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/enchilada.png",
    codeName: "enchilada",
  },
];

function PopularDevices() {
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
      <section className=" object-contain max-h-full">
        <div className="flex flex-row mb-8 mt-10 justify-between mx-2">
          <h2 className="md:text-5xl text-2xl">Popular Devices</h2>
          <Link
            href="/devices"
            className=" text-base mt-1 md:mt-7 underline underline-offset-2 text-blue-700"
          >
            View All
          </Link>
        </div>
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"> */}
        <div className="flex flex-row p-4 space-x-5 overflow-x-auto whitespace-nowrap devices OverflowY">
          {popularDevices.map((device, index) => (
            <div
              key={index}
              className="justify-center min-w-[250px] md:min-w-[330px] bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer border-solid border-2 border-gray-600 hover:border-blue-600"
            >
              <Link href="/devices">
                <img
                  className="justify-center center mx-auto my-4 h-40 "
                  src={device.image}
                  alt={device.name}
                />
                <h3 className="text-xl text-center font-semibold mb-2 mx-auto">
                  {device.name}
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  {device.codeName}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <p className=" justify-end flex flex-row">
          <Lottie animationData={SwipeLeft} className="h-24 -mt-4" />
        </p>
      </section>
    </div>
  );
}

export default PopularDevices;
