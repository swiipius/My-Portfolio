import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(experience.companyImage).url()}
        alt=""
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Preparateur de commande</h4>
        <p className="font-bold text-2xl mt-1">E. Leclerc Drive</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full object-contain "
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toLocaleDateString("fr-FR")} -{" "}
          {experience.isCurrentlyWorkingHere
            ? new Date(experience.dateEnded).toLocaleDateString("fr-FR")
            : "Present"}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-40 overscroll-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#8F0500]/80">
          {experience.points?.map((summary, i) => (
            <li key={i}>{summary}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
