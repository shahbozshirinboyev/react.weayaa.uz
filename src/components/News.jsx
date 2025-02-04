import React, { forwardRef } from "react";

// news data
import { NewsInfo } from "../data/data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { div } from "framer-motion/client";
import NewsModal from "./NewsModal";

const News = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="container">
      <div>
        <p className="font-semibold text-2xl lg:text-4xl text-center my-[25px] text-mainColor">
          News
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        freeMode={true}
        pagination={{ clickable: true, }}
        modules={[Pagination]} //FreeMode,
        className="mySwiper pb-[40px]"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}

      >
        {NewsInfo.map((news) => (
          <SwiperSlide
            className="border border-mainColor rounded-lg border-opacity-40 cursor-pointer"
            key={news.id}
          >
            <div className="grid grid-cols-1">
              <img
                className="rounded-t-lg w-full object-cover h-[250px]"
                src={news.img}
                alt="news"
              />
              <div className="p-4">
                <h1 className="text-mainColor font-bold text-[18px]">
                  {news.title}
                </h1>
                <h2 className="mb-4 text-mainColor">
                  <span>Post on </span>
                  <span>{news.date}</span>
                  <span> By </span>
                  <span>{news.by}</span>
                </h2>
                <p className="text-mainColor line-clamp-2">{news.description}</p>
                <NewsModal news={news} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default News;
