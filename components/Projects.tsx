import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly  mx-auto items-center overflow-hidden z-0"
    >
      <h3 className="absolute top-24 uppercase pl-[20px] tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="/images/pp.jpeg"
              alt=""
              className="max-w-80 max-h-80"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#8F0500]/50 underline-offset-4">
                  Project {i + 1} of {projects.length} :
                </span>{" "}
                Test 1
              </h4>

              <p className="text-justify text-lg">
                Dolore deserunt minim est consequat qui ad cillum anim consequat
                incididunt. Consectetur ut cillum velit aliquip culpa sunt
                commodo consectetur anim. Ad duis aute proident quis excepteur
                in cillum. Fugiat exercitation enim voluptate officia veniam
                nostrud quis labore aute fugiat reprehenderit sint et. Lorem
                dolor eiusmod mollit anim ex. Lorem duis sint in aute sint
                laborum proident nulla ut irure sint anim eiusmod magna.
                Deserunt aliquip deserunt do tempor ut eu duis.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#8F0500]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
