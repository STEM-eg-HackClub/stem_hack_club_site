import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games | STEM Hack Club",
  description: "Play games created by STEM Hack Club members",
};

export default function GamesPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Our <span className="mark"> Games </span>
        </h1>
        <p className="text-xl">Play games created by our talented members</p>
      </div>

      <div className=" border border-red-700 rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 border border-red-600 flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Maya
          </h2>
          <div>
            Made By{" "}
            <a href="https://github.com/DsMans0021" className="link">
              DsMans0021
            </a>
          </div>
        </div>
        <div className="w-full h-[600px]">
          <iframe
            src="https://itch.io/embed-upload/13451657?color=333333"
            className="w-full h-full border-0"
            allowFullScreen
          >
            <a href="https://itskareem.itch.io/maya">Play Maya on itch.io</a>
          </iframe>
        </div>
        <div className="p-4 border border-red-600">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Having trouble with the game? Try playing it directly on{" "}
            <a
              href="https://itskareem.itch.io/maya"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              itch.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
