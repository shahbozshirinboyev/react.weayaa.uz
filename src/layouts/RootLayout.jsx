import { useRef, useState, useEffect } from "react";

// components
import Home from "../components/Home";
import Members from "../components/Members";
import Art from "../components/Art";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function RootLayout() {
  const home = useRef(null);
  const members = useRef(null);
  const art = useRef(null);
  const news = useRef(null);
  const contact = useRef(null);

  const menus = [
    {
      id: 1,
      ref: home,
      name: "Home",
    },
    {
      id: 2,
      ref: members,
      name: "Members",
    },
    {
      id: 3,
      ref: art,
      name: "Art",
    },
    {
      id: 4,
      ref: news,
      name: "News",
    },
    {
      id: 5,
      ref: contact,
      name: "Contact",
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar Section =============> */}
      <section
        className={`fixed bg-transparent w-full ${
          scrollY > 50 ? "py-4 bg-white" : "py-10"
        } transition-all duration-300 border border-green-700`}
      >
        <ul className="container flex items-center mx-auto text-center border border-red-700">
          <li className="text-start w-full">
            <p className="font-bold border border-sky-800">logo.</p>
          </li>

          {menus.map((menu) => (
            <li
              key={menu.id}
              onClick={() => {
                scrollToSection(menu.ref);
              }}
              className="cursor-pointer w-[480px] border border-sky-500"
            >
              {menu.name}
            </li>
          ))}

          <li className="w-full text-end border border-sky-800">
            <p className="font-bold">En</p>
          </li>
        </ul>
      </section>

      {/* Home Section =============> */}
      <section>
        <Home ref={home} />
      </section>

      {/* Members Section =============> */}
      <section>
        <Members ref={members} />
      </section>

      {/* Art Section =============> */}
      <section>
        <Art ref={art} />
      </section>

      {/* News Section =============> */}
      <section>
        <News ref={news} />
      </section>

      {/* Contact Section =============> */}
      <section>
        <Contact ref={contact} />
      </section>

      {/* Contact Section =============> */}
      <section>
        <Footer />
      </section>
    </>
  );
}

export default RootLayout;
