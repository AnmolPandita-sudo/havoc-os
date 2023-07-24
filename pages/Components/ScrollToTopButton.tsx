import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BsFillArrowUpCircleFill
      className=" text-[#0040ff] animate-bounce md:w-14 md:h-14 h-8 w-8 bottom-2 right-2 fixed cursor-pointer"
      onClick={handleScrollToTop}
    >
      Scroll to Top
    </BsFillArrowUpCircleFill>
  );
};

export default ScrollToTopButton;
