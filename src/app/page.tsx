import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hack Club Of STEM Egypt",
  description:
    "Hack Club Of STEM Egypt is a vibrant student-led community where young minds explore, learn, and build projects in STEM fields—especially coding, technology, and innovation.",
  keywords: [
    "STEM",
    "stem",
    "hack club",
    "Hack Club",
    "Coding Club",
    "Programming",
    "Students",
    "Technology",
    "egypt",
  ],
  metadataBase: new URL("https://stemeghackclub.org/"),

  openGraph: {
    type: "website",
    url: "https://stemeghackclub.org/",
    title: "Hack Club Of STEM Egypt - Learn & Code",
    description:
      "Join the Hack Club Of STEM Egypt — a dynamic community of students passionate about STEM, coding, and building cool tech projects together.",
    siteName: " STEM Egypt Hack Club",
  },
};
//component
import Background from "@/components/ui/Background";
import HomeContent from "@/components/Home/Content";
import HomeMemberPic from "@/components/Home/MemberPic";
import Homehackthon from "@/components/Home/Hackathons";

export default function Home() {
  return (
    <section className="text-white">
      <Background
        src="/images/Home_page.jpg"
        title="  Hack Club of STEM Egypt"
        desc="HCSE"
      />
      <section className="overflow-hidden select-text cursor-default  px-5 lg:px-20 py-20 h-fit flex flex-col gap-20 justify-evenly">
        <HomeContent />
        <HomeMemberPic />
        <Homehackthon />
      </section>
    </section>
  );
}
