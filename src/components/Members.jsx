import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Members = forwardRef((props, ref) => {
  const members = [
    {
      img: "/images/caricature_images/1.jpg",
      name: "Lee Seung Hyun",
      label: "WeaYaa Korea CEO",
    },
    {
      img: "/images/caricature_images/2.jpg",
      name: "Tommy Kim",
      label: "WeaYaa Uzb CEO",
    },
    {
      img: "/images/caricature_images/3.jpg",
      name: "Lee Gyeong Ho",
      label: "WeaYaa Korea COO",
    },
    {
      img: "/images/caricature_images/4.jpg",
      name: "Choi Yeon Soo",
      label: "WeaYaa Korea GM",
    },
    {
      img: "/images/caricature_images/5.jpg",
      name: "Akberdiev Nuriddin",
      label: "WeaYaa Uzb GM",
    },
    {
      img: "/images/caricature_images/6.jpg",
      name: "Shahboz Shirinboyev",
      label: "Leader",
    },
    {
      img: "/images/caricature_images/7.jpg",
      name: "Meyrjan Dauren",
      label: "Designer",
    },
    {
      img: "/images/caricature_images/8.jpg",
      name: "G'alimjan Anarkulov",
      label: "Designer",
    },
    {
      img: "/images/caricature_images/9.jpg",
      name: "Zerda Jursinova",
      label: "Front-End Developer",
    },
    {
      img: "/images/caricature_images/10.jpg",
      name: "Abdulkhay Payziev",
      label: "Back-End Developer",
    },
    {
      img: "/images/caricature_images/11.jpg",
      name: "Seydanov Hamid",
      label: "Designer",
    },
    {
      img: "/images/caricature_images/12.jpg",
      name: "O'lmas Sharifov",
      label: "Designer",
    },
    {
      img: "/images/caricature_images/13.jpg",
      name: "Yo'lchiboyev Botir",
      label: "Designer",
    },
    {
      img: "/images/caricature_images/14.jpg",
      name: "Nastarin Baxromjonova",
      label: "Designer",
    },
  ];
  // Arrayni ikki marta aylanish uchun ikki marta takrorlash
  const doubledMembers = [...members, ...members];
  return (
    <section ref={ref}>
      <div>
        <p className="font-semibold text-[24px] text-center my-[50px] text-mainColor">
          Members
        </p>
      </div>

      <div className="mb-[50px]">
        <div className="flex overflow-x-hidden">
          <motion.div
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
            // style={{ width: "200%" }}
          >
            {doubledMembers.map((member, index) => (
              <div key={index}>
                <img className="h-40 w-56 pr-20" src={member.img} />
                <h4>{member.label}</h4>
                <h1>{member.name}</h1>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Members;
