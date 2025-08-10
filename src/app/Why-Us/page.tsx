import { Metadata } from "next";

//component
import Background2 from "@/components/ui/Background2";
import Content from "@/components/Why-Us-content";

export const metadata: Metadata = {
  title: "About | Hack Club Of STEM Egypt",
  description:
    "Learn more about Hack Club Of STEM Egypt — a student-led community in Egypt where passionate high schoolers explore STEM, code together, and build innovative projects.",
  keywords: [
    "About Hack Club Of STEM Egypt",
    "STEM students Egypt",
    "Student coding community",
    "Hack Club Egypt",
    "STEM education",
    "Technology Club",
    "Student programmers",
  ],
  openGraph: {
    title: "Why | Hack Club Of STEM Egypt",
    description:
      "Get to know the mission behind Hack Club Of STEM Egypt — a tech-driven space for students in Egypt to grow their STEM skills, build projects, and collaborate.",
    url: "https://stemegypt.hackclub.com/Why-Us",
    siteName: " STEM Egypt Hack Club",
    type: "website",
  },
};

export default function page() {
  return (
    <section className="h-fit flex flex-col select-text cursor-default    ">
      <Background2
        color1="from-[#cf2de4]"
        color2="via-[#e42d42]"
        color3="to-[#ce293c]"
        first="We're"
        second="at our best"
        third="when we're"
        fourth="making"
      />
      <Content />
    </section>
  );
}
