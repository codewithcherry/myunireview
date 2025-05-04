'use client';

import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import TopUniversities from "@/components/home/TopUniversities";
import UniversitySearch from "@/components/home/UniversitySearch";


export default function Home() {
  return (
    <div className="text-center text-3xl bg-gray-50 text-black dark:bg-zinc-900 dark:text-white min-h-screen">
      <HeroSection />
      <UniversitySearch />
      <HowItWorks />
      <TopUniversities />   
    </div>
  );
}
