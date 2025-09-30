"use client";
import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
const Games = () => {
  return (
    <motion.div
      viewport={{
        once: true,
        amount: 0.5,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-neutral-700 py-10 px-16 rounded-2xl w-fit mx-auto flex flex-col justify-center items-center gap-10 text-center"
    >
      <Image
        src="/Games/Maya.png"
        alt="Hello world"
        width={500}
        height={500}
        className="rounded-2xl"
      />
      <h1>
        Try Our <span className="mark"> Talented </span> Members Games
      </h1>
      <Button title="Discover" href="/Games" />
    </motion.div>
  );
};

export default Games;
