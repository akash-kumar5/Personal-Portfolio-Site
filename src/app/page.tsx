"use client";

import MangaAbout from "@/components/MangaStyle/MangaAbout";
import FeaturedProjects from "@/components/MangaStyle/MangaFeatures";
import MangaHero from "@/components/MangaStyle/MangaHero";
import TechSection from "@/components/MangaStyle/MangaTech";
import ProjectCard from "@/components/ProjectCard";
import TechMarquee from "@/components/TechMarquee";
import { motion } from "framer-motion";


export default function Home() {
  

  return (
    <main className="min-h-screen ">
      {/* HERO */}
      <MangaHero />
      
      {/* ABOUT */}
      <MangaAbout />

      {/* PROJECTS */}
    <FeaturedProjects />

      {/* TECH */}
<TechSection />
    </main>
  );
}
