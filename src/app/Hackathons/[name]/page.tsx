"use client";
import React from "react";
import Impact from "@/components/HackaThons/Impact";
import Content from "@/components/HackaThons/Content";
import Participant from "@/components/HackaThons/Participant";
import Timeline from "@/components/HackaThons/Timeline";
import Background from "@/components/ui/Background";
import Highlights from "@/components/HackaThons/Highlights";
import { useParams } from "next/navigation";
import Hackathons from "@/Data/HackaThons";
import notfound from "@/app/not-found";
import Prizes from "@/components/HackaThons/Prizes";
import Sponsors from "@/components/HackaThons/Sponsors";
import Projects from "@/components/HackaThons/Projects";
export default function page() {
  const params = useParams();
  const item = Hackathons.find((b) => b.name.toString() === params.name);

  if (!item) return notfound();
  return ( 
    <section>
      <Background
        desc={item.Hero.desc}
        title={item.Hero.title}
        src={item.Hero.src}
      />

      <div className="px-5 lg:px-10 2xl:px-20 my-16">
        <Impact Impact={item.impact} />
        <Content
          title={item.Content.title}
          Link={item.Content.Link}
          desc_1={item.Content.Desc_1}
          desc_2={item.Content.Desc_2}
          desc_3={item.Content.Desc_3}
          desc_4={item.Content.Desc_4}
          image={item.Content.Image}
        />
        <Participant Items={item.Participant}/>
        <Timeline card={item.timeline}/>
        <Highlights  Highlights={item.Highlights}/> 
        <Prizes Prizes={item.Prizes} />
        <Projects podium={item.podium} projectLinks={item.projectsLink}/>
        <Sponsors sponsors={item.Sponsors}/>
      </div>
    </section>
  );
}
