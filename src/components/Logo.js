import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-14 h-14 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          scale: [1, 1.1, 1, 1.1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["50%", "50%", "50%", "50%", "50%"],
          backgroundColor: ["#000000", "#51585B", "#000000"],
          boxShadow: [
            "0px 0px 0px rgba(0, 0, 0, 0)",
            "0px 0px 10px rgba(81, 88, 91, 0.5)",
            "0px 0px 20px rgba(81, 88, 91, 1)",
            "0px 0px 10px rgba(81, 88, 91, 0.5)",
            "0px 0px 0px rgba(0, 0, 0, 0)",
          ],
          transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          },
        }}
      >
        AR
      </MotionLink>
    </div>
  );
};

export default Logo;
