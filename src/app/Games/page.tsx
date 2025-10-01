import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Games | STEM Hack Club",
  description: "Play games created by STEM Hack Club members",
};

const games = [
  {
    id: 1,
    title: "Maya",
    embedUrl: "https://itch.io/embed-upload/13451657?color=333333",
    playUrl: "https://itskareem.itch.io/maya",
    description: "An exciting adventure game."
  },
  {
    id: 2,
    title: "Prince DsMans0021",
    embedUrl: "https://itch.io/embed-upload/14653017?color=333333",
    playUrl: "https://daniel-geo.itch.io/prince-dsmans0021",
    description: "You're a valiant knight on a mission to rescue Prince DsMans0021."
  },
  {
    id: 3,
    title: "Pong game",
    embedUrl: "https://itch.io/embed-upload/14847101?color=333333",
    playUrl: "https://daniel-geo.itch.io/pong",
    description: "A simple 2 players Pong game with a scoring system."
  },
  {
    id: 4,
    title: "The Lego Advinture",
    embedUrl: "https://itch.io/embed-upload/14846426?color=333333",
    playUrl: "https://daniel-geo.itch.io/lego",
    description: "Description coming soon"
  },
  {
    id: 5,
    title: "Tiny Quest",
    embedUrl: "https://itch.io/embed-upload/14918388?color=333333",
    playUrl: "https://daniel-geo.itch.io/tiny-quest",
    description: "A small adventure game where you try to find a hidden treasure chest guarded by aggressive slimes."
  },
  {
    id: 6,
    title: "Flappy bird",
    embedUrl: "https://itch.io/embed-upload/14198405?color=333333",
    playUrl: "https://alyalgendy.itch.io/flappy-bird",
    description: "Description coming soon"
  },
  {
    id: 7,
    title: "Try to Die",
    embedUrl: "https://itch.io/embed-upload/14931189?color=333333",
    playUrl: "https://3maar.itch.io/final-project",
    description: "A game where you try to die to reach the next level."
  }
];

export default function GamesPage() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Games</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Play games created by our talented members</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {games.map((game) => (
          <div key={game.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="p-4 bg-gray-100 dark:bg-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{game.title}</h2>
              {game.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{game.description}</p>
              )}
            </div>
            <div className="w-full aspect-video">
              <iframe 
                src={game.embedUrl}
                className="w-full h-full border-0"
                allowFullScreen
              >
                <a href={game.playUrl}>Play {game.title} on itch.io</a>
              </iframe>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
              <p className="text-center text-gray-600 dark:text-gray-300">
                {game.playUrl !== '#' ? (
                  <>
                    Having trouble? Try playing directly on{' '}
                    <a 
                      href={game.playUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      itch.io
                    </a>
                  </>
                ) : (
                  <span>Direct play link coming soon</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
