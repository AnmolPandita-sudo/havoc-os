"use client";
import "tailwindcss/tailwind.css";
import "./globals.css";
import React from "react";
import Link from "next/link";
import Header from "../pages/Components/Header";
import HomeScreen from "@/pages/Components/HomeScreen";
import Features from "@/pages/Components/Features";
import Footer from "@/pages/Components/Footer";
import Team from "@/pages/Components/Team";
import ScreenShots from "@/pages/Components/ScreenShots";
import PopularDevices from "@/pages/Components/PopularDevices";
import Donate from "@/pages/Components/Donate";
import ScrollToTopButton from "@/pages/Components/ScrollToTopButton";

function Home() {
  return (
    <div className="bg-[#D6E8FE]">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>
      <Header />
      <HomeScreen />
      <ScrollToTopButton />
      <PopularDevices />
      <ScreenShots />
      <Features />
      <Team />
      <Donate />
      <Footer />
    </div>
  );
}

export default Home;
