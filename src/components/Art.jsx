import React, { forwardRef } from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Mousewheel } from "swiper/modules";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

// motion framer
import { motion } from "framer-motion";

// art data
// import { galleryInfo } from "../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// npm install yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// import required modules

const Art = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const arts = t('arts', { returnObjects: true });

  const [activeTab, setActiveTab] = useState(1);
  const [images, setImages] = useState(arts[0].counts);
  const filterTab = (tab) => {
    setImages(tab);
    // console.log(tab);
    // console.log(images);
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

      <p className="font-semibold text-2xl lg:text-4xl text-center mt-[25px] text-mainColor">{t(`menus.2.name`)}</p>

      <>
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[FreeMode, Mousewheel]}
          mousewheel={true}
          className="bg-mainColor bg-opacity-5 shadow-md px-4 py-3 mt-[10px] mb-[25px] rounded-lg justify-center select-none"
        >
          {arts.map((gallery) => (
            <SwiperSlide key={gallery.id} className="w-auto">
              <button
                onClick={() => { filterTab(gallery.counts); setActiveTab(gallery.id); }}
                className={`border-transparent font-medium ${
                  activeTab === gallery.id
                    ? "text-white bg-mainColor hover:text-mainColor"
                    : "text-mainColor bg-mainColor bg-opacity-20"
                } btn btn-sm text hover:bg-mainColor hover:bg-opacity-40 border-0`}
              >
                {gallery.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <>
        <div className="columns-2 lg:columns-3 xl:columns-4">
          {images.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              key={item.id}
              className="m-2 transition-all duration-300 cursor-pointer relative group"
            >
              <img
                onClick={() => handleImageClick(item.img)}
                className="w-full transition-all duration-300 rounded-lg shadow-md"
                src={item.img}
                alt={item.title}
              />
              <div onClick={() => handleImageClick(item.img)} className="w-full h-full absolute top-0 left-0 flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 bg-black/20 backdrop-blur-sm bg-opacity-30 transition-all duration-300">
              <i className="bi bi-search text-[60px] text-white flex justify-center items-center"></i>
              </div>
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
