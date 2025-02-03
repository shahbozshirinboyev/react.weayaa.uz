import { forwardRef } from "react";
import { motion } from "framer-motion";
import { MembersInfo } from "../data/data";

const Members = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="h-full">
      <p className="font-semibold text-[24px] text-center my-[25px] text-mainColor">
        Members
      </p>

      <div className="flex overflow-x-hidden h-full items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {MembersInfo.map((member, index) => (
            <div
              key={index}
              className={`m-2 border border-mainColor border-opacity-30 w-[260px] rounded-lg grayscale hover:grayscale-0 relative hover:drop-shadow-lg`}
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
            className={`m-2 border border-mainColor border-opacity-30 w-[260px] rounded-lg grayscale hover:grayscale-0 relative hover:drop-shadow-lg`}
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
