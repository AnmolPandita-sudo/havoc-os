"use client";

import "tailwindcss/tailwind.css";

import Header from "@/pages/Components/Header";
import Head from "next/head";
import React from "react";
import Footer from "@/pages/Components/Footer";

function terms() {
  return (
    <div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Terms of Use - Havoc-OS</title>
      </head>
      <Header />

      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#f1f5f9] via-[#fdd7aa] to-[#f1f5f9]">
        <div className="-mt-20 w-full px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#e9c599] via-[#f1f5f9] to-[#e9c599] rounded-md shadow-md p-6 mb-5 mt-16 md:mt-5 font-semibold">
            <h1 className="text-5xl font-crimson font-bold text-center mb-4">
              Terms Of Use
            </h1>
            <h1 className="text-2xl text-cyan-800 mt-7 font-bold font-inter">
              Disclaimer
            </h1>
            <p className="mt-3 mb-3">
              All information and files — both in source and compiled form — are
              provided on an as is basis. No guarantees or warranties are given
              or implied. The user assumes all risks of any damages that may
              occur, including but not limited to loss of data, damages to
              hardware, or loss of business profits. Please use at your own
              risk. Note that unless explicitly allowed by the warranty covering
              your device, it should be assumed that any warranty accompanying
              your device will be voided if you tamper with either the system
              software or the hardware.
            </p>
            <h1 className="text-2xl text-cyan-800 mt-7 font-bold font-inter">
              Terms of use
            </h1>
            <p className="mt-3 mb-3">
              Certain images, logos, pictures, and other works originating with
              organizations other than Havoc-OS may be or are the trademarks
              and/or servicemarks of those other organizations and are subject
              to the laws of their registered countries. Havoc-OS’ usage
              constitutes a ‘fair use’ of any such copyrighted material as
              provided for in section 107 of the US Copyright Law. If you wish
              to use copyrighted material from this site for purposes of your
              own that go beyond ‘fair use’, you must obtain permission from the
              copyright owner. Requests for removal of copyright material may be
              sent to :
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default terms;
