import { forwardRef } from "react";
import { motion } from "framer-motion";
import { MembersInfo } from "../data/data";

const Members = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="h-full">
      <p className="container font-semibold text-2xl lg:text-4xl text-center my-[25px] border-2 border-red-700 text-mainColor">
        Members
      </p>
      <p className="container font-semibold text-md lg:text-xl text-center my-[25px] xl:px-40 text-mainColor border-2 border-red-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quidem impedit optio eius sed sunt aut quisquam corporis.
      </p>

      <div className="flex overflow-x-hidden items-center border-2 border-red-700 relative bg-white">
      <div class="bg-gradient-to-r from-white to-transparent w-[70px] h-full  z-[999] absolute left-0"></div>
      <div class="bg-gradient-to-l from-white to-transparent w-[70px] h-full  z-[999] absolute right-0"></div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0">
          {MembersInfo.map((member, index) => (
            <div
              key={index}
              className={`m-2 border border-mainColor border-opacity-30 w-[260px] rounded-lg grayscale hover:grayscale-0 relative hover:drop-shadow-md cursor-pointer`}
            >
              <img className="w-full h-[320px] object-cover rounded-lg" src={member.img} />
              <div className="absolute bottom-[5px] left-[5px] bg-white bg-opacity-80 w-[250px] rounded-md p-2">
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
          {MembersInfo.map((member, index) => (
            <div
            key={index}
            className={`m-2 border border-mainColor border-opacity-30 w-[260px] rounded-lg grayscale hover:grayscale-0 relative hover:drop-shadow-md cursor-pointer`}
          >
            <img className="w-full h-[320px] object-cover rounded-lg" src={member.img} />
            <div className="absolute bottom-[5px] left-[5px] bg-white bg-opacity-80 w-[250px] rounded-md p-2">
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
