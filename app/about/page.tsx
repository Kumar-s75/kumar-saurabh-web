import Contact from "@/components/Contact";
import ExperienceItem from "@/components/ExperienceItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { educationData, experienceData } from "@/data/experience";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background text-neutral-300 font-figtree antialiased selection:bg-pink-500/20 selection:text-white relative overflow-x-hidden min-h-screen">
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Navbar />

      <main className="w-full max-w-4xl mx-auto px-6 py-32 relative">
        {/* Intro */}
        <section className="mb-24 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-figtree font-normal tracking-tight text-white mb-6 leading-tight">
            writing <br />
            <span className="text-pink-500">Code </span> and
            <span className="text-pink-500 ml-2">Building Products</span>
          </h1>
          <p className="text-neutral-400 max-w-xl text-lg leading-relaxed">
            Discover my approach, process, and services in frontend and fullstack Development.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-pink-500"></span>
            Experience
          </h2>
          <div className="flex flex-col">
            {experienceData.map((item, index) => (
              <ExperienceItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-pink-500"></span>
            Education
          </h2>
          <div className="flex flex-col">
            {educationData.map((item, index) => (
              <ExperienceItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
