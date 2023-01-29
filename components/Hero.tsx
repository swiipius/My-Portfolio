import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`${pageInfo?.name}`],
    loop: true,
    delaySpeed: 500,
    deleteSpeed: 100,
  });
  return (
    <div className="h-screen flex flex-col space-y-8  items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo.heroImage).url()}
        alt="profil picture"
        width={100}
        height={100}
        className="relative rounded-full mx-auto object-cover select-none"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          {pageInfo.role}
        </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10 select-none">
          <div className="mx-auto inline-block">
            <p className="mr-3">Hi my name is</p>
            <div className="max-h-max">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </div>
          </div>
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
