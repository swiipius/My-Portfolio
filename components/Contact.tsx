import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { getPageStaticInfo } from "next/dist/build/analysis/get-page-static-info";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nom: string;
  prenom: string;
  sujet: string;
  email: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(`${formData.nom}`);
    window.location.href = `mailto:pierre.simond@edu.ece.fr?subject=${formData.sujet}&body=Bonjour je suis ${formData.prenom} ${formData.nom}.\n ${formData.message} (${formData.email})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly  mx-auto items-center overflow-hidden z-0"
    >
      <h3 className="absolute top-24 uppercase pl-[20px] tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <br />{" "}
          <span className="underline decoration-[#8F0500]/50 underline-offset-4">
            Let's talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#8F0500] h-7 w-7 animate-pulse" />
            <p className="text-2xl">0670050334</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#8F0500] h-7 w-7 animate-pulse" />
            <p className="text-2xl">bonsoir@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#8F0500] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Pas ici</p>
          </div>
        </div>

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("nom")}
              placeholder="Nom"
              className="contactInput"
              type="text"
            />
            <input
              {...register("prenom")}
              placeholder="Prénom"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("sujet")}
            placeholder="Sujet"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="E-mail"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#8F0500] py-5 px-10 rounded-md text-black font-bold"
          >
            {" "}
            Submit
          </button>
        </form> */}
      </div>
    </motion.div>
  );
}

export default Contact;
