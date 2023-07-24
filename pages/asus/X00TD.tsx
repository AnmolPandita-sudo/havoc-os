/* eslint-disable @next/next/no-img-element */
import "tailwindcss/tailwind.css";
import React from "react";
import hlogo from "@/pages/images/havoc-os-logo.png";
import glogo from "@/pages/images/google logo.png";
import Header from "@/pages/Components/Header";
import Footer from "@/pages/Components/Footer";
import Link from "next/link";
import { SiTelegram } from "react-icons/si";
import Image from "next/image";
import { MdOutlineArchive } from "react-icons/md";

function I002D() {
  return (
    <div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Asus(X00TD) - Havoc-OS</title>
      </head>
      <div className="bg-gradient-to-r from-[#f1f5f9] via-[#fdd7aa] to-[#f1f5f9]">
        <Header />
        <main>
          <div className="container mx-auto bg-gradient-to-r from-[#f1f5f9] via-[#fdd7aa] to-[#f1f5f9] p-8 rounded shadow">
            <div className=" bg-gradient-to-r from-[#ffa638] via-[#fdd6a2] to-[#ffa638] rounded-3xl">
              <div className=" m-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Box 1 */}
                <div className="flex md:flex-row flex-col">
                  <div className="md:mt-20">
                    <p className="text-center sm:text-left text-2xl font-bold">
                      Asus ZenFone Max Pro M1
                    </p>
                    <p className="text-center sm:text-left">X00TD</p>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Havoc-OS/Devices/thirteen/images/X00TD.png"
                    alt="Image 1"
                    className="w-[220px] h-52 md:mt-3 md:ml-3"
                  />
                </div>

                <div className="flex flex-row md:space-x-20 space-x-3 md:mt-12">
                  {/* Box 2 */}
                  <div>
                    <div className="mt-4">
                      <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                        Maintained By:
                      </p>
                      <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                        Latest Version:
                      </p>
                      <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                        Last Updated on:
                      </p>
                    </div>
                  </div>

                  {/* Box 3 */}
                  <div>
                    <div className="mt-4">
                      <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                        Atharv Sutar
                      </p>
                      <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                        6.0
                      </p>
                      <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold md:mt-0">
                        2023-07-15
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <Link
                  href={"https://t.me/havocofficial"}
                  className="bg-blue-500 hover:bg-blue-700 text-white  py-2 md:w-52 w-36 rounded-3xl items-center justify-center md:h-10 text-center flex flex-col md:mt-10 md:flex-row space-x-5 mb-3"
                >
                  <SiTelegram className="hidden md:block mr-5" />
                  Telegram Group
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
              <div className="bg-[#b8cadd] text-center rounded-[100px] md:rounded-[50px]">
                <div className="mt-4 flex flex-col justify-center items-center">
                  <Image src={hlogo} alt="" width={100} />
                  <p className="text-xl font-semibold">Vanilla</p>
                  <p>Havoc-OS + AOSP Apps</p>
                  <h1 className="text-center mt-10 font-medium">Unavailable</h1>
                  {/* <div className="flex flex-row md:space-x-20 space-x-3 md:mt-12">
                    <div>
                      <div className="mt-4">
                        <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                          Build Date:
                        </p>
                        <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                          File Size:
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="mt-4">
                        <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-crimson">
                          2023-03-04
                        </p>
                        <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-crimson">
                          839.71 MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={
                      "https://sourceforge.net/projects/havoc-os/files/X01BD/"
                    }
                    className="bg-blue-500 hover:bg-blue-700 text-white  py-2 w-32 rounded-3xl items-center justify-center md:h-10 text-center flex flex-col md:mt-10 mt-5 md:flex-row space-x-5 mb-3"
                  >
                    Download
                  </Link> */}
                </div>
              </div>

              <div className="bg-[#b8cadd] text-center rounded-[100px] md:rounded-[50px]">
                <div className="mt-4 flex flex-col justify-center items-center">
                  <Image src={glogo} alt="" width={100} />
                  <p className="text-xl font-semibold">GApps</p>
                  <p>Havoc-OS + Google Apps</p>
                  <div className="flex flex-row md:space-x-20 space-x-3 md:mt-12">
                    <div>
                      <div className="mt-4">
                        <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                          Build Date:
                        </p>
                        <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-semibold">
                          File Size:
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="mt-4">
                        <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-crimson">
                          2023-07-15
                        </p>
                        <p className="border-gray-500 border-b-2 sm:border-none md:text-xl md:font-crimson">
                          1.6 GB
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={
                      "https://sourceforge.net/projects/havoc-os/files/X00TD/Havoc-OS-v6.0-20230717-X00TD-Official-GApps.zip/download"
                    }
                    className="bg-blue-500 hover:bg-blue-700 text-white  py-2 w-32 rounded-3xl items-center justify-center md:h-10 text-center flex flex-col md:mt-10 mt-5 md:flex-row space-x-5 mb-3"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-[#b8cadd] text-center rounded-[100px] md:rounded-[50px]">
                <div className="mt-4 flex flex-col justify-center items-center">
                  <MdOutlineArchive size={100} />
                  <p className=" font-serif text-3xl font-semibold">
                    Archived Builds
                  </p>
                  <p className="">Havoc-OS</p>
                  <Link
                    href={
                      "https://sourceforge.net/projects/havoc-os/files/X00TD/"
                    }
                    className="bg-blue-500 hover:bg-blue-700 text-white  py-2 w-32 rounded-3xl items-center justify-center md:h-10 text-center flex flex-col md:mt-10 mt-5 md:flex-row space-x-5 mb-3"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default I002D;