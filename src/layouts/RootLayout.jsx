import { useState } from "react";
// components
import Home from "../components/Home";
import Members from "../components/Members";
import Art from "../components/Art";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function RootLayout() {
  const [navRef, setNavRef] = useState(0);
  return (
    <>
      <main>
        <Navbar setNavRef={setNavRef} />

        <section id="home">
          <Home />
        </section>

        <section
          id="members"
          // className="h-screen"
          style={{ paddingTop: `${navRef}px`,
          // paddingBottom: `${navRef}px`
        }}
        // className="border-2 border-sky-600"
        >
          <Members />
        </section>

        <section
          id="art"
          style={{ paddingTop: `${navRef}px`,
          // paddingBottom: `${navRef}px`
        }}
        // className="border-2 border-sky-600"
        >
          <Art />
        </section>

        <section
          id="news"
          // className="h-screen"
          style={{ paddingTop: `${navRef}px`,
          // paddingBottom: `${navRef}px`
        }}
        >
          <News />
        </section>

        <section
          id="contact"
          // className="h-screen border-2 border-sky-600"
          style={{ paddingTop: `${navRef}px`,
          // paddingBottom: `${navRef}px`
         }}
        >
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default RootLayout;
