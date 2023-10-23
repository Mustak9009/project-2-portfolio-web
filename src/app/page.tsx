import { NavBar } from "./components";
export default function Home() {
  return (
    <main className="layout container mx-auto">
      <section id="homePage" className="component">
        <NavBar />
      </section>
      <section id="services" className="component">3</section>
      <section id="portfolio" className="component">4</section>
      <section id="contact" className="component">5</section>
      <section id="about" className="component">6</section>
      {/* <Test />
      <Test /> */}
    </main>
  );
}
