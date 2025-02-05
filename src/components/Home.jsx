import { useState, useEffect, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Home = forwardRef((props, ref) => {
  const { t } = useTranslation();
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
        <h1 className="text-3xl lg:text-4xl font-bold mb-1">
          {t(`home.0.title`)}
        </h1>
        <p className="text-lg xl:text-2xl font-bold text-green-300">
          {t('home.0.info')}
        </p>
        <p className="text-md lg:text-xl lg:mx-16 my-3 font-semibold">
          {t('home.0.description')}
        </p>
      </div>

    </section>
  );
});

export default Home;
