/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { BsAndroid } from "react-icons/bs";
import { FaTachometerAlt, FaPeopleCarry, FaGithubAlt } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { SiVercel } from "react-icons/si";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
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
      <p className="hidden md:block"> </p> <br />
      <h1 className="text-5xl text-center mt-28 mb-5">Features</h1>
      {/* 
      .
      . 
      . 
      . 
      . 
      */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="m-7 w-98 md:w-[450px] overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#82A0A2] via-[#b2c9cb] to-[#82A0A2] flex flex-row items-center">
          <div className="flex justify-center items-center bg-[#8CB6C3] p-3 rounded-2xl w-1/5 ml-2">
            <BsAndroid className="text-center w-10 h-10 text-[#D8E9F0]" />
          </div>
          <div className="text-center px-6 py-4 flex-grow">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Up-to-date
            </div>
            <p className="text-gray-700 text-lg">
              Frequent updates with the latest monthly Security Patch
            </p>
          </div>
        </div>

        <div className="m-7 w-98 md:w-[450px]  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#82A0A2] via-[#b2c9cb] to-[#82A0A2] flex flex-row items-center">
          {/* <SettingsIcon className="w-full" /> */}
          <div className="flex justify-center items-center bg-[#8CB6C3] p-3 rounded-2xl w-1/5 ml-2">
            <MdOutlineAppSettingsAlt className="text-center w-10 h-10 text-[#D8E9F0]" />
          </div>
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
      {/* 
      .
      . 
      . 
      . 
      . 
      */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="m-7 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#82A0A2] via-[#b2c9cb] to-[#82A0A2] flex flex-row items-center">
          <div className="flex justify-center items-center bg-[#8CB6C3] p-3 rounded-2xl w-1/5 ml-2">
            <FaTachometerAlt className="text-center w-10 h-10 text-[#D8E9F0]" />
          </div>
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Stability
            </div>
            <p className="text-gray-700 text-lg">
              Fluid and stable with optimal battery life and performance
            </p>
          </div>
        </div>

        <div className=" m-7 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#82A0A2] via-[#b2c9cb] to-[#82A0A2] flex flex-row items-center">
          <div className="flex justify-center items-center bg-[#8CB6C3] p-3 rounded-2xl w-1/5 ml-2">
            <SiVercel className="text-center w-10 h-10 text-[#D8E9F0]" />
          </div>
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Material Design UI
            </div>
            <p className="text-gray-700 text-lg">
              Clean and refined UI inspired by Google Pixel
            </p>
          </div>
        </div>

        <div className="m-7 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#82A0A2] via-[#b2c9cb] to-[#82A0A2] flex flex-row items-center">
          <div className="flex justify-center items-center bg-[#8CB6C3] p-3 rounded-2xl w-1/5 ml-2">
            <FaPeopleCarry className="text-center w-10 h-10 text-[#D8E9F0]" />
          </div>
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
        <div className="m-7 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#82A0A2] via-[#b2c9cb] to-[#82A0A2] flex flex-row items-center">
          <div className="flex justify-center items-center bg-[#8CB6C3] p-3 rounded-2xl w-1/5 ml-2">
            <FaGithubAlt className="text-center w-10 h-10 text-[#D8E9F0]" />
          </div>
          <div className="text-center px-6 py-4">
            <div className="font-bold text-2xl mb-2 border-gray-500 border-b-2">
              Open Source
            </div>
            <p className="text-gray-700 text-lg">
              Source code of the ROM is available on our GitHub
            </p>
          </div>
        </div>

        <div className=" m-7 max-w-sm  overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#82A0A2] via-[#b2c9cb] to-[#82A0A2] flex flex-row items-center">
          <div className="flex justify-center items-center bg-[#8CB6C3] p-3 rounded-2xl w-1/5 ml-2">
            <PublishedWithChangesIcon className="text-center w-10 h-10 text-[#D8E9F0]" />
          </div>
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
