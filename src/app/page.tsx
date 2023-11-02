import type { Metadata } from "next";
import {Hero,NavBar,Parallax,Services,Portfolio,Contact,Whatsapp,Cursor} from "./components";
export const metadata: Metadata = {
  title: "Full stack web Developer - Mustak",
  description:
    "Skilled Full Stack Web Developer: Proficient in front-end and back-end technologies, creating dynamic, secure, and responsive web applications. nextjs,reactjs",
};

export default function Home() {
  return (
    <main className="layout">
      <Cursor/>
      <section id="homePage" className="component">
        <div className="container mx-auto ">
          <NavBar />
        </div>
        <Hero />
      </section>
      <section id="services" className="component">
        <Parallax type="services" />
      </section>
      <section id="portfolio" className="lg:h-screen snap-start lg:snap-center">
        <Services />
      </section>
      <section id="contact" className="component">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="about" className="component">
        <Contact />
      </section>
      <Whatsapp/>
    </main>
  );
}
