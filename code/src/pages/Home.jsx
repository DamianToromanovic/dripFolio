import React from "react";
import Hero from "../components/Hero";
import MiniAbout from "../components/MiniAbout";
import FeaturedProjects from "../components/FeaturedProjects";
import ContactShort from "../components/ContactShort";
import PortraitSection from "../components/PeaceGreeting";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <section className="snap-start h-screen">
        <Hero />
      </section>

      <section className="snap-start h-screen">
        <MiniAbout />
      </section>
      <section className="snap-start h-screen">
        <FeaturedProjects />
      </section>
      <section className="snap-start h-screen">
        <ContactShort />
      </section>
    </main>
  );
}
