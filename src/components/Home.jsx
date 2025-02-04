import React, { useState, useEffect, forwardRef } from "react";
import { HomeInfo } from "../data/data";

const Home = forwardRef((props, ref) => {
  // background change img start
  const [bgImage, setBgImage] = useState("/images/background/img1.jpg");

  useEffect(() => {
    const images = [
      "/images/background/img1.jpg",
      "/images/background/img2.jpg",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setBgImage(images[index]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  // background change img end

  return (
    <section
      ref={ref}
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-screen flex items-center justify-center transition-all duration-500 bg-no-repeat bg-cover relative"
    >
      <div className="bg-sky-950 bg-opacity-30 absolute top-0 left-0 w-full h-screen z-[10]"></div>

      <div className="container mx-auto text-center text-white z-[20]">
        <h1 className=" text-4xl lg:text-6xl font-bold mb-4">
          {HomeInfo[0].title}
        </h1>
        <p className="text-xl xl:text-3xl font-bold text-green-300">
          {HomeInfo[0].info}
        </p>
        <p className="text-md lg:text-xl lg:mx-32 my-4 font-semibold">
          {HomeInfo[0].description}
        </p>
      </div>

    </section>
  );
});

export default Home;
