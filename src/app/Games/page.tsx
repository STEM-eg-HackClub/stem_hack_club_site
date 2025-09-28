import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games | STEM Hack Club",
  description: "Play games created by STEM Hack Club members",
};

export default function GamesPage() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Games</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Play games created by our talented members</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 bg-gray-100 dark:bg-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Maya</h2>
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
        <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Having trouble with the game? Try playing it directly on{' '}
            <a 
              href="https://itskareem.itch.io/maya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              itch.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
