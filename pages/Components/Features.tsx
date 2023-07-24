"use client";
import React from "react";
import "tailwindcss/tailwind.css";

function Features() {
  return (
    <div id="features">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>
      <h1 className="text-5xl text-center mt-28 mb-5">Features</h1>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="m-10 max-w-sm overflow-hidden shadow-lg  rounded-xl bg-gradient-to-r from-[#ffa638] via-[#fdd6a2] to-[#ffa638]">
          {/* <AndroidIcon className="w-full" /> */}
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Up-to-date
            </div>
            <p className="text-gray-700 text-lg">
              Frequent updates with the latest monthly Security Patch
            </p>
          </div>
        </div>

        <div className="m-10 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#ffa638] via-[#fdd6a2] to-[#ffa638]">
          {/* <SettingsIcon className="w-full" /> */}
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Customizations
            </div>
            <p className="text-gray-700 text-lg">
              A wide range of useful features & settings to customize your
              device
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="m-10 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#ffa638] via-[#fdd6a2] to-[#ffa638]">
          {/* <VideoStableIcon className="w-full" /> */}
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Stability
            </div>
            <p className="text-gray-700 text-lg">
              Fluid and stable with optimal battery life and performance
            </p>
          </div>
        </div>

        <div className=" m-10 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#ffa638] via-[#fdd6a2] to-[#ffa638]">
          {/* <ColorLensIcon className="w-full" /> */}
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Material Design UI
            </div>
            <p className="text-gray-700 text-lg">
              Clean and refined UI inspired by Google Pixel
            </p>
          </div>
        </div>

        <div className="m-10 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#ffa638] via-[#fdd6a2] to-[#ffa638]">
          {/* <SupportAgentIcon className="w-full" /> */}
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Support
            </div>
            <p className="text-gray-700 text-lg">
              Active support for the ROM is provided on Telegram and XDA
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="m-10 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#ffa638] via-[#fdd6a2] to-[#ffa638]">
          {/* <StreamIcon className="w-full" /> */}
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Open Source
            </div>
            <p className="text-gray-700 text-lg">
              Source code of the ROM is available on our GitHub
            </p>
          </div>
        </div>

        <div className=" m-10 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#ffa638] via-[#fdd6a2] to-[#ffa638]">
          {/* <SystemUpdateIcon className="w-full" /> */}
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              OTA
            </div>
            <p className="text-gray-700 text-lg">
              Monthly Over The Air Updates for a hassle free experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
