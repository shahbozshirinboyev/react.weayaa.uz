import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
// data
import { MembersInfo } from "../data/data";

const Members = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="h-full">

        <p className="font-semibold text-[24px] text-center my-[25px] text-mainColor">Members</p>

        <div className="flex overflow-x-hidden h-full items-center border border-red-700">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
            style={{ width: `${MembersInfo.length * 260}px` }}
          >
            {MembersInfo.map((member, index) => (
              <div key={index} className={`m-2 border border-mainColor border-opacity-30 w-[260px] rounded-lg grayscale hover:grayscale-0`} >
                <img className="w-full h-[250px] object-cover rounded-t-lg" src={member.img} />
                <h4 className="text-center text-mainColor font-bold mt-2">{member.label}</h4>
                <h1 className="text-center text-mainColor font-bold text-opacity-60 mb-2">{member.name}</h1>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
            style={{ width: `${MembersInfo.length * 260}px` }}
          >
            {MembersInfo.map((member, index) => (
              <div key={index} className={`m-2 border border-mainColor border-opacity-30 w-[260px] rounded-lg grayscale hover:grayscale-0`} >
                <img className="w-full h-[250px] object-cover rounded-t-lg" src={member.img} />
                <h4 className="text-center text-mainColor font-bold mt-2">{member.label}</h4>
                <h1 className="text-center text-mainColor font-bold text-opacity-60 mb-2">{member.name}</h1>
              </div>
            ))}
          </motion.div>
        </div>
    </section>
  );
});

export default Members;
