import React, { forwardRef } from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// art data
import { galleryInfo } from "../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/free-mode";

import "./art.css";

// import required modules
import { FreeMode } from "swiper/modules";

const Art = forwardRef((props, ref) => {
  const filterTab = (tab) => {
    console.log(tab);
  };
  return (
    <section ref={ref} className="container p-4 pt-0 pb-[25px] select-none">
      <div>
        <p className="font-semibold text-[24px] text-center my-[25px] text-mainColor">
          Art
        </p>
      </div>

      <>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="bg-mainColor bg-opacity-10 px-3 py-2 rounded-lg justify-center"
        >
          {galleryInfo.map((gallery) => (
            <SwiperSlide key={gallery.id }>
              <button
                onClick={() => {
                  filterTab(gallery.counts);
                }}
                className="border border-mainColor font-semibold text-white bg-mainColor px-2 py-1 rounded-lg text-center text"
              >
                {gallery.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
});

export default Art;
