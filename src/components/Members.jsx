import { forwardRef } from "react";
import { motion } from "framer-motion";
// import { MembersInfo } from "../data/data";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Members = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const members = t('members', { returnObjects: true });
  return (
    <section ref={ref} className="h-full">

      <p className="container font-semibold text-2xl lg:text-4xl text-center mt-[25px] text-mainColor">{t(`menus.1.name`)}</p>
      <p className="container font-semibold text-md lg:text-xl text-center mt-[10px] mb-[25px] xl:px-40 text-mainColor">{t(`menus.1.title`)}</p>

      <div className="flex overflow-x-hidden items-center relative">

        <div className="bg-gradient-to-r from-white to-transparent w-[70px] h-full  z-[80] absolute left-0"></div>
        <div className="bg-gradient-to-l from-white to-transparent w-[70px] h-full  z-[80] absolute right-0"></div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0">
          {members.map((member, index) => (
            <div
              key={index}
              className={`m-2 border border-mainColor border-opacity-30 w-[200px] lg:w-[260px] rounded-lg grayscale hover:grayscale-0 relative hover:drop-shadow-md cursor-pointer`}
            >
              <img className="w-full h-[260px] lg:h-[320px] object-cover rounded-lg" src={member.img} />
              <div className="absolute bottom-[5px] left-[5px] bg-white bg-opacity-80 w-[190px] lg:w-[250px] rounded-md p-2">
                <h1 className="text-start text-mainColor font-bold"> {member.name} </h1>
                <h4 className="text-start text-mainColor font-bold text-opacity-70 text-[14px]"> {member.label} </h4>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {members.map((member, index) => (
            <div
              key={index}
              className={`m-2 border border-mainColor border-opacity-30 w-[200px] lg:w-[260px] rounded-lg grayscale hover:grayscale-0 relative hover:drop-shadow-md cursor-pointer`}
            >
              <img className="w-full h-[260px] lg:h-[320px] object-cover rounded-lg" src={member.img} />
              <div className="absolute bottom-[5px] left-[5px] bg-white bg-opacity-80 w-[190px] lg:w-[250px] rounded-md p-2">
                <h1 className="text-start text-mainColor font-bold"> {member.name} </h1>
                <h4 className="text-start text-mainColor font-bold text-opacity-70 text-[14px]"> {member.label} </h4>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
});

export default Members;
