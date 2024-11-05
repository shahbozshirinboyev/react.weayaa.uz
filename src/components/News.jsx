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

const News = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="container">
      <div>
        <p className="font-semibold text-[24px] text-center my-[25px] mb-0 text-mainColor">
          News
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={35}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]} //FreeMode,
        className="mySwiper p-7 pb-10 pt-[25px]"
        breakpoints={{
          320: {
            // Telefon o'lchami
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            // Kichik planshet o'lchami
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            // Katta planshet o'lchami
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            // Katta ekranlar
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            // Katta ekranlar
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {NewsInfo.map((news) => (
          <SwiperSlide className="border border-mainColor rounded-lg border-opacity-40" key={news.id}>
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
                <p className="text-mainColor">
                  {news.description}
                </p>
                <button className="border border-mainColor border-opacity-40 text-mainColor w-[120px] rounded-lg px-2 py-1 mt-4">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default News;
