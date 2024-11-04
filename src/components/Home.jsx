import React, { useState, useEffect, forwardRef } from "react";

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
      className="min-h-screen flex items-center justify-center transition-all duration-500"
    >
      <div className="container mx-auto text-center text-white">
        <h1 className=" text-4xl lg:text-6xl font-bold mb-4">
          Welcome to WEAYAA
        </h1>
        <p className="text-xl xl:text-3xl font-bold text-green-300">
          Global Contents Development Company
        </p>
        <p className="text-md lg:text-xl lg:mx-32 my-4 font-semibold">
          WeaYaa is the best content development company in Uzbekistan. We are
          located in Korea and Uzbekistan, and we are developing all visual
          contents (games, animations, movies, interiors, architecture,
          products, promotions) with the best effort. We aim to become a global
          company that leads the market based on constant challenge and
          beautiful sense.
        </p>
      </div>
    </section>
  );
});

export default Home;
