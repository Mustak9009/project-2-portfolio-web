import { Hero, NavBar,Parallax,Services,Portfolio} from "./components";
export default function Home() {
  return (
    <main className="layout">
      <section id="homePage" className="component">
        <div className="container mx-auto ">
          <NavBar />
        </div>
        <Hero />
      </section>
      <section id="services" className="component">
        <Parallax type="services"/>
      </section>
      <section id="portfolio" className="component">
        <Services/>
      </section>
      <section id="contact" className="component">
        <Parallax type="portfolio"/>
      </section>
      <Portfolio/>
      <section id="about" className="component">
        6
      </section>
    </main>
  );
}
