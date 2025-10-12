import React from "react";
import { Metadata } from "next";
import MainContent from "@/components/Games/MainContent";
import Background2 from "@/components/ui/Background2";
export const metadata: Metadata = {
  title: "Games | STEM Hack Club",
  description: "Play games created by STEM Hack Club members",
};

export default function GamesPage() {
  return (
    <section>
      <Background2
        color1="from-[#cf2de4]"
        color2="via-[#e42d42]"
        color3="to-[#ce293c]"
        first="Our"
        second="Talented"
        third="Members"
        fourth="Games"
      />
      <MainContent />
    </section>
  );
}
