"use client";
import React from "react";
import { Games } from "@/Data/Games";
import { motion } from "framer-motion";

interface Props {
  Game: Games;
}
const Animation = {
  viewport: {
    once: true,
    amount: 0.5,
  },
  initial: {
    y: 50,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
  transition: { duration: 0.5 },
};
const DetailedPage: React.FC<Props> = ({ Game }) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="space-y-3 my-2 text-center">
        <motion.h1 {...Animation} className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {Game.title}
        </motion.h1>
        <motion.h2 {...Animation} className="text-3xl font-semibold">
          <span className="mark">Author</span> : {Game.author}
        </motion.h2>
        <motion.p {...Animation}>
          {" "}
          <span className="mark">Description</span> : {Game.description}
        </motion.p>
      </div>
      <motion.div {...Animation} className="w-[900px] bg-red-600 aspect-video rounded-2xl">
        <iframe
          src={Game.embedUrl}
          className="w-full h-full border-0"
          allowFullScreen
        >
          <a href={Game.ItchIo}>Play {Game.title} on itch.io</a>
        </iframe>
      </motion.div>
      <div className="mt-2">
        Wanna download the game ?{" "}
        <a href={Game.ItchIo} className="link">
          Link
        </a>
      </div>
    </div>
  );
};

export default DetailedPage;
