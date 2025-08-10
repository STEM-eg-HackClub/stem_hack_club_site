import Background2 from "@/components/ui/Background2";
import TeenHackCompetition from "@/components/TeenHackCompetition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teen Hack Competition | Hack Club Of STEM Egypt",
  description:
    "Join the Teen Hack Competition by Hack Club Of STEM Egypt — a student-driven coding challenge in Egypt designed to spark creativity, collaboration, and innovation among teens passionate about technology.",
  keywords: [
    "Teen Hack Competition",
    "Hackathon Egypt",
    "Student coding challenge",
    "STEM competition",
    "Hack Club Egypt",
    "Teen programmers",
    "Tech event for students",
    "Hack Club Of STEM Egypt competition",
  ],
  openGraph: {
    title: "Teen Hack Competition | Hack Club Of STEM Egypt",
    description:
      "A thrilling hackathon for teenagers in Egypt! Compete, learn, and build cool projects with fellow student coders.",
    url: "https://stemegypt.hackclub.com/Teen-hack-competition",
    siteName: " STEM Egypt Hack Club",

    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Background2
        color1="from-cyan-500"
        color2="via-[#e42d42]"
        color3="to-[#ce293c]"
        first="Teen"
        second="Hack club"
        third="Competitive"
        fourth="Challenge"
      />
      <TeenHackCompetition />
    </>
  );
}
