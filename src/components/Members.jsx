import { forwardRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { MembersInfo } from "../data/data";

const Members = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({ x: "-100%" });
  };

  return (
    <section ref={ref} className="h-full">
      <p className="font-semibold text-[24px] text-center my-[25px] text-mainColor">
        Members
      </p>

      <div className="flex overflow-x-hidden h-full items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={controls}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
          style={{ width: `${MembersInfo.length * 260}px` }}
        >
          {MembersInfo.map((member, index) => (
            <div
              key={index}
              className={`m-2 border border-mainColor border-opacity-30 w-[260px] rounded-lg grayscale hover:grayscale-0`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="w-full h-[250px] object-cover rounded-t-lg"
                src={member.img}
              />
              <h4 className="text-center text-mainColor font-bold mt-2">
                {member.label}
              </h4>
              <h1 className="text-center text-mainColor font-bold text-opacity-60 mb-2">
                {member.name}
              </h1>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={controls}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
          style={{ width: `${MembersInfo.length * 260}px` }}
        >
          {MembersInfo.map((member, index) => (
            <div
              key={index}
              className={`m-2 border border-mainColor border-opacity-30 w-[260px] rounded-lg grayscale hover:grayscale-0`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="w-full h-[250px] object-cover rounded-t-lg"
                src={member.img}
              />
              <h4 className="text-center text-mainColor font-bold mt-2">
                {member.label}
              </h4>
              <h1 className="text-center text-mainColor font-bold text-opacity-60 mb-2">
                {member.name}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Members;
