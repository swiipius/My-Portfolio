import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full justify-evenly  mx-auto items-center overflow-hidden z-0"
    >
      <h3 className="absolute top-24 uppercase pl-[20px] tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/10 scrollbar-thumb-[#8F0500]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 xl:p-44 h-100 overflow-y-scroll"
          >
            <img
              src={urlFor(projects[i].image).url()}
              alt=""
              className="max-w-40 max-h-40 rounded-2xl"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#8F0500]/50 underline-offset-4">
                  Project {i + 1} of {projects.length} :
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex flex-row space-x-5 justify-left items-center">
                {project?.technologies.map((technology, i) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    className="h-7 w-17 object-contain"
                  />
                ))}
              </div>

              <p className="text-justify text-lg hidden sm:flex">
                {project.summary}
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
