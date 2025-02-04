import React, { forwardRef } from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// motion framer
import { motion } from "framer-motion";

// art data
import { galleryInfo } from "../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/free-mode";

import "./art.css";

// npm install yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// import required modules
import { FreeMode } from "swiper/modules";

const Art = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState(galleryInfo[0].counts);
  const filterTab = (tab) => {
    setImages(tab);
    // console.log(tab);
    console.log(images);
  };
  const [open, setOpen] = useState(false);
  const slides = images.map((item) => ({ src: item.img }));
  const handleImageClick = (img) => {
    const imgIndex = slides.findIndex((slide) => slide.src === img); // Rasmni slides massividan topish
    setActiveImg(img);
    setOpen(true);
  };

  const [activeImg, setActiveImg] = useState("");
  return (
    <section ref={ref} className="container h-full">
      <div>
        <p className="font-semibold text-2xl lg:text-4xl text-center my-[25px] border-2 border-red-700 text-mainColor">
          Art
        </p>
      </div>

      <>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="bg-mainColor bg-opacity-10 px-3 py-2 rounded-lg justify-center max-w-[850px]"
        >
          {galleryInfo.map((gallery) => (
            <SwiperSlide key={gallery.id}>
              <button
                onClick={() => {
                  filterTab(gallery.counts);
                  setActiveTab(gallery.id);
                }}
                className={`border-transparent font-semibold ${
                  activeTab === gallery.id
                    ? "text-white bg-mainColor"
                    : "text-mainColor bg-mainColor bg-opacity-30"
                } transition-all duration-300  px-2 py-1 rounded-lg text-center text`}
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
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              key={item.id}
              className="m-2 transition-all duration-300 cursor-pointer"
            >
              <img
                onClick={() => handleImageClick(item.img)}
                className="w-full transition-all duration-300 rounded-lg shadow-md hover:opacity-50"
                src={item.img}
                alt={item.title}
              />
            </motion.div>
          ))}
        </div>
      </>
      <>
        <Lightbox
          open={open}
          plugins={[Zoom]}
          close={() => setOpen(false)}
          slides={slides} // slidesni bu yerga beramiz
          index={slides.findIndex((slide) => slide.src === activeImg)}
          carousel={{ finite: true }}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          // render={{
          //   buttonPrev: () => null, // Chapga o'tkazuvchi tugmani o'chiradi
          //   buttonNext: () => null, // O'ngga o'tkazuvchi tugmani o'chiradi
          // }}
          zoom={{
            maxZoomPixelRatio: 5, // Zoom imkoniyatlarini oshiradi (bu qiymatni oshirishingiz mumkin)
            zoomInMultiplier: 2, // Zoom bosqichlari tezligini boshqaradi
            doubleTapDelay: 300, // Ikki marta bosish uchun kechikish vaqti (ms)
            doubleClickDelay: 300, // Ikki marta bosish uchun kechikish vaqti (ms)
            scrollToZoom: true, // Skrin qilish orqali zoom qilish imkoniyati
          }}
        />
      </>
    </section>
  );
});

export default Art;
