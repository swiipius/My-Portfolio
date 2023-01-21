import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly  mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase pl-[20px] tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/images/pp.jpeg"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover w-32 aspect-square md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#8F0500]/50 underline-offset-8">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base text-justify">
          Quis amet sint qui culpa laborum voluptate duis. Nisi pariatur culpa
          tempor do. Dolore officia nostrud sit reprehenderit pariatur commodo.
          Mollit eu dolor incididunt do est aliqua dolor pariatur adipisicing
          consequat dolore cillum. Magna commodo deserunt dolor amet ut fugiat
          cupidatat eu est non esse in aute. Non elit irure est sunt magna ut
          deserunt aliquip nulla proident. Culpa aliqua id Lorem qui est culpa.
        </p>
      </div>
    </motion.div>
  );
}

export default About;