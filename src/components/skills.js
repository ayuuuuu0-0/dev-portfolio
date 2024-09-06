import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center font-mont">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Flutter
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="10vw" />
        <Skill name="Javascript" x="20vw" y="19vw" />
        <Skill name="ReactJS" x="9vw" y="11vw" />
        <Skill name="NodeJS" x="-15vw" y="-20vw" />
        <Skill name="NextJS" x="12vw" y="-13vw" />
        <Skill name="Firebase" x="-20vw" y="-15vw" />
        <Skill name="Figma" x="32vw" y="-5vw" />
        <Skill name="Tailwind" x="0vw" y="20vw" />
        <Skill name="Kotlin" x="-29vw" y="12vw" />
        <Skill name="Python" x="20vw" y="-22vw" />
      </div>
    </>
  );
};

export default Skills;
