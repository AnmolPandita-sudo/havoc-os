import Link from "next/link";
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import DownloadAnimation from "@/pages/icons/download.json";
import ChangeLogAnimation from "@/pages/icons/changelog.json";
import "tailwindcss/tailwind.css";

function HomeScreen() {
  return (
    <div className=" space-y-20">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>
      <div className="mx-auto bg-gradient-to-r from-[#dae6f1] via-blue-100 to-[#dae6f1] p-2 outline-double  outline-4 outline-offset-2 shadow-2xl mt-2">
        <div className="space-y-3 flex-flex-col justify-center items-center text-center">
          <h1 className=" font-serif text-4xl mx-2 font-semibold">
            Welcome to Havoc-OS
          </h1>
          <p className="md:text-2xl text-xl mt-4 font-serif">
            A community-driven Android ROM built on the foundation of the
            Android Open Source Project (AOSP). Our mission is to provide a
            feature-rich and highly customizable user experience, empowering
            Android users to personalize their devices and unlock their full
            potential.
          </p>
          <h1 className="md:text-xl text-lg font-inter">
            We invite you to join our ever-growing community of Android
            enthusiasts, developers, and tinkerers. Whether you are a seasoned
            user or new to custom ROMs, Havoc OS welcomes everyone who seeks a
            customizable, powerful, and exciting Android experience.
          </h1>
          <h4 className="md:text-xl text-lg font-inter">
            Explore our website, download the latest build, and embark on a
            journey of personalization and innovation with Havoc OS. Together,
            lets unleash the full potential of your Android device.
          </h4>
        </div>
      </div>
      <div className="rounded-3xl px-4  min-h-full min-w-full p-2 outline-double  outline-4 outline-offset-2 shadow-2xl">
        <div className="flex md:flex-row flex-col justify-between ">
          <div className="mt-5 bg-[#eaf3ff] text-center rounded-3xl mb-3 w-auto md:w-1/2 flex flex-col md:flex-col ml-auto md:ml-20 md:mt-10">
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
          <div className="flex flex-col md:ml-5 items-center text-center justify-center">
            <Image
              src="https://havoc-os.com/src/img/screenshots/Device.png"
              alt="lockscreen"
              height={100}
              width={150}
              className="md:mt-8 md:mr-32"
            />
          </div>
        </div>

        <div className="flex space-x-4 ml-auto md:justify-center items-center text-center justify-center mt-7 ">
          <Link href={"/devices"} className="homeScreenButton">
            Download
          </Link>
          <Link href={"/changelog"} className="homeScreenButton">
            Changelog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
