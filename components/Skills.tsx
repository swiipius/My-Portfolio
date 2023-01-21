import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillIcon from "./SkillIcon";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col xl:flex-row relative text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 max-auto items-center "
    >
      <h3 className="absolute top-24 uppercase pl-[20px] tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] pl-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
        <SkillIcon />
      </div>
    </motion.div>
  );
}

export default Skills;