"use client";
import "tailwindcss/tailwind.css";
import React from "react";
import demo from "@/pages/images/lockscreen demo.png";
import logo1 from "@/pages/images/artboard__1_-removebg-preview.png";
import Image from "next/image";
import Header from "@/pages/Components/Header";
import Footer from "@/pages/Components/Footer";
import Head from "next/head";
import Link from "next/link";
import "app/globals.css";

function AboutUs() {
  return (
    <div className="bg-[#E1EDF6]">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>AboutUs - Havoc-OS</title>
      </head>
      <Header />
      <div className="rounded-3xl ml-7 mr-7 mt-20 py-6  ">
        <div className="rounded-3xl px-4 bg-gradient-to-r from-[#f1f5f9] via-[#e9c599] to-[#f1f5f9]  min-h-full min-w-full">
          <div className="flex flex-row -mt-12 md:ml-5 items-center text-center justify-center">
            <Image src={logo1} alt="lockscreen" height={100} className="mt-2" />
          </div>

          <div className="mt-5 bg-[#eaf3ff] text-center rounded-3xl mb-3 w-auto md:w-1/2 flex flex-col md:flex-col ml-auto md:ml-5">
            <p className="font-medium font-serif ... m-5">
              Havoc-OS is an after-market firmware based on Android Open Source
              Project, inspired by Google Pixel with a refined Material Design
              UI. We offer a smooth and stable experience for your device with a
              selected set of amazing features that provide an exceptional user
              experience.
            </p>
            <p className="font-semibold">
              Our ROM is available for over 150+ Devices across 20+ OEMs.
            </p>
            <p className="m-3">
              Generic System Images (GSI) are available so you can try out our
              ROM even if your device is not currently supported. Our device
              roster keeps growing with support for more devices added every
              month.
            </p>
          </div>

          <Image
            src="https://havoc-os.com/src/img/screenshots/Device.png"
            alt=""
            height={400}
            width={200}
            className="flex flex-row justify-center items-center text-center ml-5 md:ml-auto mr-24 mt-10 mb-5 md:-mt-80"
          />

          <div className="flex space-x-4 ml-auto md:justify-center items-center text-center justify-center md:-mt-10 ">
            <Link
              href={"/devices"}
              className="bg-[#2f7bdf] hover:bg-blue-700 text-white py-2 px-4 mb-5 rounded-full"
            >
              Download
            </Link>
            <Link
              href={"/changelog"}
              className="bg-[#2f7bdf] hover:bg-blue-700 text-white py-2 px-4 mb-5 rounded-full"
            >
              Changelog
            </Link>
          </div>
        </div>
        <div className="space-y-5 mt-5 text-center justify-center items-center">
          <h1 className="text-3xl font-crimson font-bold -mb-4">Who We Are</h1>
          <h1 className=" font-semibold italic">
            At Havoc OS, we are a passionate group of developers, designers, and
            Android enthusiasts who share a common goal, To create a remarkable
            custom ROM that brings together performance, customization, and
            stability. With our combined expertise and love for Android, we
            strive to deliver an exceptional user experience to our community.
          </h1>
          <h1 className="text-3xl font-crimson font-bold -mb-4">
            Our Philosophy
          </h1>
          <h1 className=" font-semibold italic">
            Customization: We believe that each user should have the freedom to
            customize their Android experience to suit their unique preferences.
            Havoc OS offers an extensive array of customization options,
            enabling users to tailor their device appearance, behavior, and
            functionality to their liking.
          </h1>
          <h1 className="text-3xl font-crimson font-bold -mb-4">Performance</h1>
          <h1 className=" font-semibold italic">
            We understand the importance of a smooth and snappy user experience.
            That is why we invest time and effort into optimizing Havoc OS for
            maximum performance, leveraging the power of modern hardware to
            deliver exceptional speed and responsiveness.
          </h1>
          <h1 className="text-3xl font-crimson font-bold -mb-4">Innovation</h1>
          <h1 className=" font-semibold italic">
            We constantly push the boundaries of what is possible with Android.
            Havoc OS incorporates innovative features, such as gesture
            navigation, system-wide dark mode, and Substratum theme engine
            integration, allowing users to enjoy cutting-edge functionality on
            their devices.
          </h1>
          <h1 className="text-3xl font-crimson font-bold -mb-4">
            Community-Driven
          </h1>
          <h1 className=" font-semibold italic">
            Havoc OS never would have been what it is today without our vibrant
            and passionate community. We actively listen to user feedback,
            suggestions, and bug reports to continually improve and enhance the
            ROM. Our community is at the heart of everything we do, and their
            support and involvement inspire us to keep pushing forward.
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
