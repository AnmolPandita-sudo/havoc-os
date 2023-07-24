import React, { Fragment, useState } from "react";
import { FaDonate } from "react-icons/fa";
import Image from "next/image";
import paypal from "@/pages/images/paypal.png";
import gpay from "@/pages/images/6124998.png";
import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";

interface ModalProps {
  isOpenByDefault: boolean;
}

const Payment: React.FC<ModalProps> = ({ isOpenByDefault }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const router = useRouter();
  const handlePayPal = () => {
    router.push("https://www.paypal.com/paypalme/ANUSHEK");
  };

  return (
    <div className="block">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>
      <button
        className="hover:cursor-pointer transition ease-in-out duration-1000 hover:border-gray-500 hover:border-b-2 hover:mt-[1px] text-md w-full md:w-auto flex flex-row"
        onClick={openModal}
      >
        <FaDonate className="mt-1 mr-2" />
        Donate
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#e4c67c] rounded-[50px] p-8">
            <h2 className="text-2xl  mb-4 text-center font-dancing-script">
              Donate To Keep Us Alive
            </h2>
            <div className="flex flex-row m-5">
              <div className="m-5 bg-[#c8c6b9] text-center rounded-3xl mb-3 md:w-64 flex flex-col justify-center items-center cursor-pointer">
                <Image
                  src={paypal}
                  alt=""
                  className="p-5 w-60 h-20 items-center"
                  onClick={handlePayPal}
                />
                <h1 className="p-2 font-pacifico" onClick={handlePayPal}>
                  paypal.me/ANUSHEK
                </h1>
              </div>
              <div className="m-5 bg-[#c8c6b9] text-center rounded-3xl mb-3 md:w-64 flex flex-col justify-center items-center cursor-pointer">
                <Image
                  src={gpay}
                  alt=""
                  className="p-5 w-36 h-20 items-center"
                />
                <h1 className="p-2 font-pacifico">
                  upi: anushekprasal@okhdfcbank
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button
                className="bg-[#c3ae63] hover:bg-[#e9c863] text-white py-2 px-4 mt-4 font-pacifico rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
