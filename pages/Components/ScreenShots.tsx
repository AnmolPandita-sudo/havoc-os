// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// import Image from "next/image";

// function ScreenShots() {
//   const slideImages = [
//     "https://havoc-os.com/src/img/screenshots/Screenshot_1.png",
//     "https://havoc-os.com/src/img/screenshots/Screenshot_2.png",
//     "https://havoc-os.com/src/img/screenshots/Screenshot_3.png",
//     "https://havoc-os.com/src/img/screenshots/Screenshot_4.png",
//     "https://havoc-os.com/src/img/screenshots/Screenshot_5.png",
//     "https://havoc-os.com/src/img/screenshots/Screenshot_6.png",
//     "https://havoc-os.com/src/img/screenshots/Screenshot_7.png",
//     "https://havoc-os.com/src/img/screenshots/Screenshot_8.png",
//   ];
//   return (
//     <div id="screenshots">
//       <head>
//         <script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
//           crossOrigin="anonymous"
//         ></script>
//         <title>Havoc-OS</title>
//       </head>
//       <div className="w-[90%] md:w-1/2 items-center mt-16 m-auto">
//         <h1 className="text-5xl text-center mb-14 ml-3">ScreenShots</h1>
//         <div className="swiper-wrapper">
//           <div className=""></div>
//         </div>
//         <Swiper
//           spaceBetween={1}
//           slidesPerView={"auto"}
//           navigation
//           loop={true}
//           autoplay={{ delay: 600 }}
//           speed={1000}
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           pagination={{ el: ".swiper-pagination", clickable: true }}
//           modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
//           className=" p-8 flex items-center justify-center relative object-cover"
//         >
//           {slideImages.map((slide, index) => (
//             <SwiperSlide
//               key={index}
//               className="flex items-center justify-center w-50 mb-10 sticky filter:drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));"
//             >
//               <Image
//                 src={slide}
//                 alt={`Slide ${index + 1}`}
//                 width={200}
//                 height={100}
//                 className="sticky flex-row mx-auto items-center justify-center flex border-black rounded-xl "
//               />
//             </SwiperSlide>
//           ))}
//           <style jsx global>
//             {`
//               .swiper-button-prev,
//               .swiper-button-next {
//                 display: none !important;
//               }
//             `}
//           </style>
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default ScreenShots;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import Image from "next/image";

function ScreenShots() {
  const slideImages = [
    "https://havoc-os.com/src/img/screenshots/Screenshot_1.png",
    "https://havoc-os.com/src/img/screenshots/Screenshot_2.png",
    "https://havoc-os.com/src/img/screenshots/Screenshot_3.png",
    "https://havoc-os.com/src/img/screenshots/Screenshot_4.png",
    "https://havoc-os.com/src/img/screenshots/Screenshot_5.png",
    "https://havoc-os.com/src/img/screenshots/Screenshot_6.png",
    "https://havoc-os.com/src/img/screenshots/Screenshot_7.png",
    "https://havoc-os.com/src/img/screenshots/Screenshot_8.png",
  ];
  return (
    <div id="screenshots">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9269892900308647"
          crossOrigin="anonymous"
        ></script>
        <title>Havoc-OS</title>
      </head>
      <div className="md:w-1/3 h-fit mx-auto">
        <p> </p> <br />
        <p> </p> <br />
        <p> </p> <br />
        <p> </p> <br />
        <h1 className="text-5xl text-center mb-14 ml-3">ScreenShots</h1>
        <div className="swiper-wrapper">
          <div className=""></div>
        </div>
        <Swiper
          spaceBetween={1}
          slidesPerView={"auto"}
          navigation
          loop={true}
          autoplay={{ delay: 600 }}
          speed={1000}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className=" p-8 flex items-center justify-center relative object-cover"
          onInit={(swiper) => {
            swiper.params.virtual = {
              addSlidesBefore: 2,
              addSlidesAfter: 2,
            };
            swiper.update();
          }}
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center w-50 mb-10 sticky filter:drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));"
            >
              <div className="bg-blur absolute inset-0 z-[-1]">
                <Image
                  src={slideImages[index - 1]}
                  alt={`Previous Slide ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-50 h-10 w-10" // Adjust height here
                />
                <Image
                  src={slideImages[index + 1]}
                  alt={`Next Slide ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-50 h-10 w-10" // Adjust height here
                />
              </div>
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                width={200}
                height={100}
                className="sticky flex-row mx-auto items-center justify-center flex border-black rounded-xl "
              />
            </SwiperSlide>
          ))}
          <style jsx global>
            {`
              .swiper-button-prev,
              .swiper-button-next {
                display: none !important;
              }

              .bg-blur {
                filter: blur(5px);
              }
            `}
          </style>
        </Swiper>
      </div>
    </div>
  );
}

export default ScreenShots;
