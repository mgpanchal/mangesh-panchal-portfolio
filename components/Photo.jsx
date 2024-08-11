"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >

        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute"
        >
          
          <img src="/assets/my-photo.png" alt=""/>
          
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[250px] xl:w-[400px] h-[250px] xl:h-[400px]"
          fill="transparent"
          viewBox="0 0 498 498"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="245"
            stroke="#00ff99"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"25 10 0 0"}}
            animate={{
              strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
              rotate: [120,360],
            }}
            transition={{
                duration:20,
                repeat:Infinity,
                repeatType:"mirror"
            }}
          />
        </motion.svg>

      </motion.div>
    </div>
  );
};

export default Photo;
