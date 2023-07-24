/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Head from "next/head";
function google() {
  return (
    <div>
      <section id="Google" className="py-5">
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
            crossOrigin="anonymous"
          ></script>
          <title>Devices(Google) - Havoc-OS</title>
        </head>
        <div className="  container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold mb-8 mt-20">
            Google
          </h2>
          <div className="items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/google/lynx">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/lynx.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Pixel 7a
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  lynx
                </p>
              </Link>
            </div>
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/google/panther">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/panther.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Pixel 7
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  panther
                </p>
              </Link>
            </div>

            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/google/cheetah">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/cheetah.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Google Pixel 7 Pro
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  cheetah
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default google;
