import { Hero, NavBar } from "./components";
export default function Home() {
  return (
    <main className="layout">
      <section id="homePage" className="component">
        <div className="container mx-auto">
          <NavBar />
        </div>
        <Hero />
      </section>
      <section id="services" className="component">
        3
      </section>
      <section id="portfolio" className="component">
        4
      </section>
      <section id="contact" className="component">
        5
      </section>
      <section id="about" className="component">
        6
      </section>
      {/* <Test />
      <Test /> */}
    </main>
  );
}
