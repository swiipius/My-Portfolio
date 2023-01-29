import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function SkillIcon({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        animate={{ x: 0, opacity: 1 }}
        src={urlFor(skill.image).url()}
        alt=""
        className="rounded-full h-12 w-12 xl:w-32 xl:h-32 md:w-20 md:h-20 object-contain border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 xl:w-32 xl:h-32 md:w-12 md:h-12 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm md:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillIcon;
