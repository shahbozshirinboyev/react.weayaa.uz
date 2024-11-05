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
  const [images, setImages] = useState(galleryInfo[0].counts);
  const filterTab = (tab) => {
    setImages(tab);
    // console.log(tab);
    console.log(images);
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
            <SwiperSlide key={gallery.id}>
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
      <>
      <div className="columns-2 lg:columns-3 xl:columns-4 py-8">
          {images.map((item) => (
            <div key={item.id} className="m-2 transition-all duration-300">
              <img className="w-full transition-all duration-300 rounded-lg shadow-md hover:opacity-50" src={item.img} alt={item.title} />
            </div>
          ))}
      </div>
      </>
    </section>
  );
});

export default Art;
