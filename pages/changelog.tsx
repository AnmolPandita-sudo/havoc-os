/* eslint-disable react/no-unescaped-entities */
"use client";
import "tailwindcss/tailwind.css";
import React from "react";
import Header from "@/pages/Components/Header";
import Footer from "@/pages/Components/Footer";
import Head from "next/head";
import Link from "next/link";
import "app/globals.css";

function AboutUs() {
  return (
    <div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Changelog - Havoc-OS</title>
      </head>
      <Header />

      <div className="flex flex-col justify-center items-center text-center min-h-min bg-gradient-to-r from-[#f1f5f9] via-[#fdd7aa] to-[#f1f5f9]">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#e9c599] via-[#f1f5f9] to-[#e9c599] rounded-md shadow-2xl w-[80%] mx-auto p-6 text-gray-700 font-medium m-[44px]">
            <h1 className="text-4xl md:text-5xl font-crimson font-bold text-black text-center">
              Changelog
            </h1>
            <p className="m-2">Havoc-OS v6.0 Changelog 09-07-2023:</p>
            <div className="mb-3 border-stone-500 rounded-full border-dotted border-2">
              <p>Initial Android 13.0 Release</p>
            </div>
            <div className="md:mr-44 md:space-y-2">
              <p>
                You can support the work we do by contributing towards this
                project. This will help us pay for the servers and other
                infrastructure to deliver timely updates moving forward.
              </p>
              <p>
                Your contribution is crucial in supporting the ongoing
                development and maintenance of Havoc OS. By contributing to this
                project, you play a vital role in ensuring that users can
                continue to enjoy timely updates, enhanced features, and a
                stable user experience.
              </p>
              <p>
                Every contribution, no matter the size, makes a difference. Your
                support directly assists in covering expenses such as server
                costs, infrastructure maintenance, and the resources required to
                keep the project running smoothly.
              </p>
            </div>

            <p>Our Links:</p>
            <div className="mt-3 space-y-1">
              <p className=" font-extrabold">PayPal:</p>
              <Link href="https://paypal.me/ANUSHEK">
                <p> https://paypal.me/ANUSHEK</p>
              </Link>
              <p className=" font-extrabold">UPI/Google Pay (India):</p>
              <p>anushekprasal@okhdfcbank</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
