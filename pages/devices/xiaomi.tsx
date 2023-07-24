/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Head from "next/head";

function xiaomi() {
  return (
    <div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Devices(Xiaomi) - Havoc-OS</title>
      </head>
      <section id="Xiaomi" className="py-5">
        <div className="  container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold mb-8 mt-20">
            Xiaomi
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/xiaomi/lavender">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://havoc-os.com/src/img/devices/lavender.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Redmi Note 7
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  lavender
                </p>
              </Link>
            </div>

            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/xiaomi/andromeda">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/andromeda.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Mi Mix 3 5G
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  andromeda
                </p>
              </Link>
            </div>

            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/xiaomi/toco">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/toco.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Xiaomi Mi Note 10 Lite
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  toco
                </p>
              </Link>
            </div>

            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/xiaomi/surya">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/surya.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Xiaomi Poco X3 / NFC
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  surya
                </p>
              </Link>
            </div>

            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/xiaomi/vayu">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/vayu.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Xiaomi Poco X3 Pro
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  vayu
                </p>
              </Link>
            </div>

            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/xiaomi/alioth">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/alioth.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Xiaomi Mi 11X / Redmi K40 / Poco F3
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  alioth
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default xiaomi;
