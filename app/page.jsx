import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyWorkWithMe from "../components/WhyWorkWithMe";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Results from "../components/Results";
import About from "../components/About";
import FinalCTA from "../components/FinalCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <Portfolio />
        <Testimonials />
        <Results />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
