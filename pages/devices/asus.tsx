/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Head from "next/head";

function asus() {
  return (
    <div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Devices(Asus) - Havoc-OS</title>
      </head>
      <section id="Asus" className="py-5">
        <div className="  container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold mb-8 mt-20">
            Asus
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="justify-center center bg-[#f9dfb3] rounded-lg p-6 shadow-2xl cursor-pointer">
              <Link href="/asus/X00TD">
                <img
                  className="justify-center center mx-auto my-4 h-40 w-auto"
                  src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/X00TD.png"
                  alt=""
                />
                <h3 className="text-xl text-center font-semibold mb-2">
                  Asus ZenFone Max Pro M1
                </h3>
                <p className="text-blue-700 text-lg font-serif text-center">
                  X00TD
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default asus;
