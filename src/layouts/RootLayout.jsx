import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// components
import Home from "../components/Home";
import Members from "../components/Members";
import Art from "../components/Art";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function RootLayout() {
  const [navRef, setNavRef] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.slice(1).forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
        }
      );
    });
  }, []);

  return (
    <>
      <main>
        <Navbar setNavRef={setNavRef} />

        <section id="home" ref={(el) => (sectionsRef.current[0] = el)}>
          <Home />
        </section>

        <section
          id="members"
          ref={(el) => (sectionsRef.current[1] = el)}
          style={{ paddingTop: `${navRef}px` }}
        >
          <Members />
        </section>

        <section
          id="art"
          ref={(el) => (sectionsRef.current[2] = el)}
          style={{ paddingTop: `${navRef}px` }}
        >
          <Art />
        </section>

        <section
          id="news"
          ref={(el) => (sectionsRef.current[3] = el)}
          style={{ paddingTop: `${navRef}px` }}
        >
          <News />
        </section>

        <section
          id="contact"
          ref={(el) => (sectionsRef.current[4] = el)}
          style={{ paddingTop: `${navRef}px` }}
        >
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default RootLayout;
