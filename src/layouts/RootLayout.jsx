import { useRef, useState, useEffect } from "react";
import Home from "../components/Home";

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
      <section className="fixed bg-transparent w-full border border-green-700">
        <ul
          className={`container border border-red-600 flex items-center ${
            scrollY > 50 ? "py-4" : "py-10"
          }  mx-auto text-center transition-all duration-300`}
        >
          <li className="text-start w-full">
            <p className="font-bold">logo.</p>
          </li>

          {menus.map((menu) => (
            <li
              key={menu.id}
              onClick={() => {
                scrollToSection(menu.ref);
                console.log(menu.ref);
              }}
              className="cursor-pointer w-[350px]"
            >
              {menu.name}
            </li>
          ))}

          <li className="w-full text-end">
            <p className="font-bold">En</p>
          </li>
        </ul>
      </section>

      {/* Home Section =============> */}
      <section>
        <Home ref={home} />
      </section>

      {/* Sahifaning bo'limlari */}
      <div
        // ref={home}
        style={{ height: "1200px", backgroundColor: "lightgray" }}
      >
        Bo'lim 1
      </div>

      <div
        ref={members}
        style={{ height: "1200px", backgroundColor: "lightblue" }}
      >
        Bo'lim 2
      </div>

      <div
        ref={art}
        style={{ height: "1200px", backgroundColor: "lightgreen" }}
      >
        Bo'lim 3
      </div>

      <div
        ref={news}
        style={{ height: "1200px", backgroundColor: "lightgreen" }}
      >
        Bo'lim 4
      </div>

      <div
        ref={contact}
        style={{ height: "1200px", backgroundColor: "lightgreen" }}
      >
        Bo'lim 2
      </div>
    </>
  );
}

export default RootLayout;
