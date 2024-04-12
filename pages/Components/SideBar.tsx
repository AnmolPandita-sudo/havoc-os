"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Payment from "@/pages/Components/Payment";
import { FaChevronDown, FaDonate } from "react-icons/fa";
import { AiOutlineHome, AiOutlineMobile } from "react-icons/ai";
import {
  MdGroup,
  MdOutlineScreenshot,
  MdOutlineSegment,
  MdCancel,
} from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import ThoughtOfTheDay from "./ThoughtOfTheDay";
import { HiMenuAlt3 } from "react-icons/hi";

interface ModalProps {
  isOpenByDefault: boolean;
}

const SideBar: React.FC<ModalProps> = ({ isOpenByDefault }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  //   const router = useRouter();
  const [dateTime, setDateTime] = useState(new Date());

  const scrollToSection = () => {
    const section = document.getElementById("ScreenShots");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className=" flex flex-row">
      <div className="bg-[#dcd7d7] rounded-xl h-12 w-32 text-[#2D2CF6] font-light text-lg mt-2">
        <Payment isOpenByDefault={false} />
      </div>
      <div
        className="block px-4 py-2 text-[#2D2CF6] focus:outline-none"
        onClick={handleDropdown}
      >
        <button>
          <HiMenuAlt3
            style={{ fontSize: "2rem" }}
            className="bg-[#dcd7d7] rounded-xl h-12 w-10"
            onClick={openModal}
          />
        </button>

        {isOpen && (
          <div
            className=" absolute right-[14px] mt-2 w-11/12 bg-white rounded-lg shadow-lg z-10  h-11/12 "
            onMouseLeave={handleDropdown}
          >
            <ul className=" list-none p-2  my-10">
              <li
                // onClick={() => {
                //   router.push("/");
                // }}
                className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5"
              >
                {/* <AiOutlineHome className=" mt-0.5" /> */}
                {/* <span className="mx-auto flex flex-row text-white">
                  <AiOutlineHome className=" mt-[3px] mr-1" />
                  Home
                </span> */}

                <Link
                  href="/devices"
                  className="mx-auto flex flex-row text-white"
                >
                  <AiOutlineHome className=" mt-[3px] mr-1" />
                  Home
                </Link>
              </li>
              <li
                // onClick={() => {
                //   router.push("/devices");
                // }}
                className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5"
              >
                {/* <AiOutlineMobile className=" mt-0.5 mr-2" />
                  Devices */}

                {/* <span className="mx-auto flex flex-row text-white">
                  <AiOutlineMobile className=" mt-[3px] mr-1" />
                  Devices
                </span> */}

                <Link
                  href="/devices"
                  className="mx-auto flex flex-row text-white"
                >
                  <AiOutlineMobile className=" mt-[3px] mr-1" />
                  Devices
                </Link>
              </li>
              <li className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5">
                <ScrollLink
                  to="screenshots"
                  smooth={true}
                  duration={500}
                  onClick={scrollToSection}
                  className=" flex flex-row mx-auto"
                >
                  <span className="flex flex-row text-white">
                    <MdOutlineScreenshot className=" mt-[3px] mr-1" />
                    ScreenShots
                  </span>
                </ScrollLink>
              </li>
              <li className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5">
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  className=" flex flex-row mx-auto"
                >
                  {/* <BsFillLightningChargeFill className="mt-0.5 mr-2" />
                    Features */}
                  <span className=" flex flex-row text-white">
                    <BsFillLightningChargeFill className=" mt-[3px] mr-1" />
                    Features
                  </span>
                </ScrollLink>
              </li>
              <li className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5">
                <ScrollLink
                  to="teams"
                  smooth={true}
                  duration={500}
                  className=" flex flex-row mx-auto"
                >
                  {/* <MdGroup className="mt-0.5 mr-2" />
                    Teams */}
                  <span className=" flex flex-row text-white ">
                    <MdGroup className=" mt-[3px] mr-1" />
                    Teams
                  </span>
                </ScrollLink>
              </li>
              <li className="flex flex-row px-4 py-2 text-gray-800 bg-blue-500 cursor-pointer rounded-full mb-5">
                <ScrollLink
                  to="donate"
                  smooth={true}
                  duration={500}
                  className=" flex flex-row mx-auto"
                >
                  {/* <FaDonate className="mt-0.5 mr-2" />
                    Donate */}
                  <span className="flex flex-row text-white">
                    <FaDonate className=" mt-[3px] mr-1" />
                    Donate
                  </span>
                </ScrollLink>
              </li>
            </ul>

            {/* flex md:w-14 md:h-14 h-8 w-8 bottom-2 items-center justify-center cursor-pointer */}

            <div className="flex md:flex-col flex-col space-y-1 text-center justify-center font-crimson text-xl -mt-7">
              <p>
                {dateTime.toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                {dateTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>
            <ThoughtOfTheDay />
            <span
              className="flex items-center justify-center px-4 my-5 "
              onClick={closeModal}
            >
              <MdCancel className=" h-8 w-8 mx-auto md:hidden" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
