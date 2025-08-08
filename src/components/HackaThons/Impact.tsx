"use client";
import React from "react";
import AnimatedStatCard from "@/components/ui/AnimatedStatCard";
import { IconType } from "react-icons/lib";
 
interface Impact{
  icon: IconType;
  title: string;
  value: number;
}
interface Props{
  Impact:Impact[]
}
 
const Impact:React.FC<Props> = ({Impact}) => {

  return (
    <section className=" md:flex justify-center items-center gap-10 my-20">
      {Impact.map((item, i) => (
        <AnimatedStatCard
          key={i}
          title={item.title}
          Icon={item.icon}
          value={item.value}
        />
      ))}
    </section>
  );
};

export default Impact;
