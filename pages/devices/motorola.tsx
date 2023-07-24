/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import kiew from "@/pages/images/G5G.png";
import Image from "next/image";
import Head from "next/head";
function motorola() {
  return (
    <div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Devices(Motorola) - Havoc-OS</title>
      </head>
      <section id="Motorola" className="py-5">
        <div className="  container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold mb-8 mt-20">
            Motorola
          </h2>
          <div className="items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/motorola/channel">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/channel.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Motorola Moto G7 Play
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  channel
                </p>
              </Link>
            </div>
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/motorola/kiev">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/kiev.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Motorola Moto G 5G
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  kiev
                </p>
              </Link>
            </div>
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/motorola/nairo">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/nairo.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Motorola Moto G 5G Plus
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  nairo
                </p>
              </Link>
            </div>
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/motorola/ocean">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/ocean.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Motorola Moto G7 Power
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  ocean
                </p>
              </Link>
            </div>
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/motorola/racer">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/racer.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Motorola Moto Edge
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  racer
                </p>
              </Link>
            </div>
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/motorola/river">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/river.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Motorola Moto G7
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  river
                </p>
              </Link>
            </div>
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/motorola/berlna">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/berlna.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Moto Edge (2021)
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  berlna
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default motorola;
