"use client";
import DetailedPage from "@/components/Games/DetailedPage";
import { Games } from "@/Data/Games";
import { notFound, useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams();
  const game = Games.find((b) => b.id.toString() === params.id?.toString());
  if (!game) return notFound();
  return (
    <section className="min-h-screen py-20">
    <DetailedPage Game={game}/>
    </section>
  );
}
