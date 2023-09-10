import React from "react";
import { motion } from "framer-motion";
import { skills } from "../content/content";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
  px-6 py-3 shadow-dark cursor-pointer absolute
  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:bg-transparent
  sm:text-dark sm:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 sm:mt-16">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 sm:text-xs sm:p-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.5 }}
        >
          Web
        </motion.div>
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;
