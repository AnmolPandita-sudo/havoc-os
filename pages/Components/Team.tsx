/* eslint-disable @next/next/no-img-element */
"use client";
import "tailwindcss/tailwind.css";
import React from "react";
import anmol from "@/pages/images/anmol.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsGithub, BsTelegram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Team() {
  const router = useRouter();

  const handleTelegramAnushek = () => {
    router.push("https://t.me/SKULSHADY");
  };
  const handleGitHubAnushek = () => {
    router.push("https://github.com/SKULSHADY");
  };
  const handlEmailAnushek = () => {
    window.location.href = "mailto:anushekprasal@gmail.com";
  };

  const handleTelegramAnmol = () => {
    router.push("https://t.me/VedicSeeker");
  };
  const handleGitHubAnmol = () => {
    router.push("https://github.com/AnmolPandita-sudo");
  };
  const handlEmailAnmol = () => {
    window.location.href = "mailto:anmol.ap12@gmail.com";
  };

  return (
    <div id="teams">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>
      <p> </p> <br />
      <p> </p> <br />
      <p> </p> <br />
      <p> </p> <br />
      <h1 className="text-5xl text-center font-serif">Teams</h1>
      <div className="flex flex-col md:flex-row justify-center mt-10 mb-10 p-5 ">
        <div className="max-w-md md:w-[400px] overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#8aa6a9] via-[#cef0f4] to-[#8aa6a9] flex justify-center items-center h-50 md:mr-10 md:mb-0 mb-5">
          <img
            className=" m-5 w-28 rounded-full"
            src="https://havoc-os.com/src/img/team/anushek.jpg"
            alt="Card Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-3 border-gray-500 border-b-2 text-center">
              Anushek Prasal
            </div>
            <h3 className="text-gray-700 text-center">SKULSHADY</h3>
            <h3 className="text-gray-700 text-center">
              Founder & Lead Developer
            </h3>
            <div className="flex flex-row items-center justify-evenly space-x-2 mt-2">
              <BsTelegram
                onClick={handleTelegramAnushek}
                className="cursor-pointer text-blue-800  h-8 w-8"
              />
              <BsGithub
                onClick={handleGitHubAnushek}
                className="cursor-pointer text-blue-800  h-8 w-8"
              />
              <SiGmail
                onClick={handlEmailAnushek}
                className="cursor-pointer text-blue-800  h-8 w-8"
              />
            </div>
          </div>
        </div>

        <div className="max-w-lg md:w-[400px] overflow-hidden shadow-lg rounded-xl bg-gradient-to-r from-[#8aa6a9] via-[#cef0f4] to-[#8aa6a9] flex justify-center items-center h-50 md:ml-10">
          <Image
            className=" m-5 w-28 rounded-full"
            src={anmol}
            alt="Card Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-3 border-gray-500 border-b-2 text-center">
              Anmol Pandita
            </div>
            <h3 className="text-gray-700 text-center">VedicSeeker</h3>
            <h3 className="text-gray-700 text-center">Developer</h3>
            <div className="flex flex-row items-center justify-center space-x-7 mt-2">
              <BsTelegram
                onClick={handleTelegramAnmol}
                className="cursor-pointer text-blue-800 h-8 w-8"
              />
              <BsGithub
                onClick={handleGitHubAnmol}
                className="cursor-pointer text-blue-800 h-8 w-8"
              />
              <SiGmail
                onClick={handlEmailAnmol}
                className="cursor-pointer text-blue-800 h-8 w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
