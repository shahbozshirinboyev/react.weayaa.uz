import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
// data
import { MembersInfo } from "../data/data";

const Members = forwardRef((props, ref) => {
  // Arrayni ikki marta aylanish uchun ikki marta takrorlash
  const doubledMembers = [...MembersInfo, ...MembersInfo];
  return (
    <section ref={ref} className="h-full">

        <p className="font-semibold text-[24px] text-center my-[25px] text-mainColor">Members</p>

        <div className="flex overflow-x-hidden h-full items-center">
          <motion.div
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
            // style={{ width: "200%" }}
          >
            {doubledMembers.map((member, index) => (
              <div key={index} className={`m-2 border border-mainColor border-opacity-30 w-[230px] rounded-lg ${ index % 2 === 0 ? "mt-56" : "mb-56"}`} >
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
