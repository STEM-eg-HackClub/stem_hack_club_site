"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Games } from "@/Data/Games";

const MotionLink = motion.create(Link);

const MainContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-red-900 via-red-600 to-red-300 bg-clip-text text-transparent">
          Our Games
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full" />
        <p className="text-lg sm:text-xl dark:text-neutral-300 text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Discover amazing games crafted by our talented community of creators
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {Games.map((game, i) => (
          <MotionLink
            key={i}
            href={`/Games/${game.id}`}
            variants={itemVariants}
            whileHover={{
              y: -12,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group relative h-full overflow-hidden rounded-2xl  border border-neutral-700 hover:border-red-500 shadow-xl duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            <div className="relative w-full h-56 overflow-hidden bg-neutral-800">
              <Image
                src={game.thumbnail}
                alt={game.title}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                priority={i < 3}
              />
            </div>

            <div className="relative z-20 p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-neutral-800 group-hover:text-red-600 transition-colors duration-300">
                  {game.title}
                </h2>
                {game.description && (
                  <p className="text-sm dark:text-neutral-300 text-neutral-500 line-clamp-2 group-hover:text-neutral-200 transition-colors duration-300">
                    {game.description}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 pt-4 border-t border-neutral-700">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  By {game.author}
                </span>
              </div>
            </div>

            <div className="absolute -inset-full top-0 h-full w-1/3 translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700 z-30" />
          </MotionLink>
        ))}
      </motion.div>

      {Games.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-neutral-400">
            No games available yet. Check back soon!
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default MainContent;
