import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "ReactJS",
    x: "-22vw",
    y: "2vw",
  },
  {
    name: "NextJS",
    x: "-5vw",
    y: "-10vw",
  },
  {
    name: "Express",
    x: "18vw",
    y: "6vw",
  },
  {
    name: "MySQL",
    x: "3vw",
    y: "14vw",
  },
  {
    name: "Node",
    x: "-20vw",
    y: "-15vw",
  },
  {
    name: "HTML",
    x: "15vw",
    y: "-12vw",
  },
  {
    name: "CSS",
    x: "32vw",
    y: "-5vw",
  },
  {
    name: "AWS",
    x: "0vw",
    y: "-20vw",
  },
  {
    name: "GraphQL",
    x: "-25vw",
    y: "18vw",
  },
  {
    name: "CMS",
    x: "16vw",
    y: "18vw",
  },
  {
    name: "Ownership",
    x: "-24vw",
    y: "-8vw",
  },
  {
    name: "Tailwind",
    x: "-5vw",
    y: "20vw",
  },
  {
    name: "DSA",
    x: "-11vw",
    y: "10vw",
  },
  {
    name: "Diligence",
    x: "13vw",
    y: "-3vw",
  },
  {
    name: "Leadership",
    x: "25vw",
    y: "12vw",
  },
];

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
  px-6 py-3 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
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
