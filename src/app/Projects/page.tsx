import { Metadata } from "next";
//components
import Card from "@/components/Projects-content";
// import BgProjectPage from "@/components/bgProjectPage";
import Background from "@/components/ui/Background";

export const metadata: Metadata = {
  title: "Projects | Hack Club Of STEM Egypt",
  description:
    "Explore student-built projects from Hack Club Of STEM Egypt — creative tech, coding, and STEM innovations made by young developers in Egypt.",
  keywords: [
    "STEM projects",
    "Student coding projects",
    "Hack Club projects",
    "Hack Club Of STEM Egypt creations",
    "Programming projects by students",
    "Tech projects Egypt",
    "Showcase student work",
    "Student innovation",
  ],
  openGraph: {
    title: "Projects | Hack Club Of STEM Egypt",
    description:
      "Browse creative coding and STEM projects built by students in the Hack Club Of STEM Egypt. See what young minds are building!",

    siteName: " STEM Egypt Hack Club",

    type: "website",
  },
};

export default function page() {
  return (
    <section className="h-fit bg-white dark:bg-black ">
      <Background src="/images/Projects.jpg" title="Our Projects" />
      <Card />
    </section>
  );
}
