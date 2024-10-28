import { useRef, useState, useEffect } from "react";

// components
import Home from "../components/Home";
import Members from "../components/Members";
import Art from "../components/Art";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// logo
import logoBlack from "/img/logo/logo-black.png";
import logoWhite from "/img/logo/logo-white.png";

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

  const [activeRef, setActiveRef] = useState(home);

  const [openMenus, setOpenMenus] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [languageBtn, setLanguageBrn] = useState(false)

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Reflar orqali har bir bo'limga yetganda active refni o'zgartirish
      menus.forEach((menu) => {
        const sectionTop = menu.ref.current?.offsetTop;
        const sectionHeight = menu.ref.current?.offsetHeight;
        if (
          sectionTop &&
          sectionHeight &&
          window.scrollY >= sectionTop - sectionHeight / 2 &&
          window.scrollY < sectionTop + sectionHeight / 2
        ) {
          setActiveRef(menu.ref);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menus]);

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
        className={`fixed w-full px-2 ${
          scrollY > 50 ? "py-4 bg-white" : "py-8 bg-transparent"
        } transition-all duration-300`}
      >
        <ul className="container flex items-center mx-auto gap-4 text-center">
          <li className="text-start w-full text-[30px]">
            <img
              src={scrollY > 50 ? logoBlack : logoWhite}
              alt="Logo"
              className="transition-all duration-300"
            />
          </li>

          {menus.map((menu) => (
            <li
              key={menu.id}
              onClick={() => {
                scrollToSection(menu.ref);
                setActiveRef(menu.ref);
              }}
              className={`cursor-pointer w-[480px] font-bold hover:text-green-700 transition-all duration-300 ${
                scrollY > 50 ? "text-green" : "text-white"
              } hidden md:block ${
                activeRef === menu.ref ? "text-green-700" : "text-black"
              }`}
            >
              {menu.name}
            </li>
          ))}

          <li className="cursor-pointer w-full text-end hidden lg:block">
      
            <div className="relative inline-block text-left font-bold">

              <div className="relative">
                <button
                onClick={() => setLanguageBrn(!languageBtn)}
                  type="button"
                  className={`${ scrollY > 50 ? "text-black" : "text-white" } inline-flex w-full justify-center gap-x-1.5 hover:text-green-700 px-3 py-2 transition-all duration-300`}
                >
                  En
                { !languageBtn && <i className="bi bi-chevron-down"></i>}
                { languageBtn && <i className="bi bi-chevron-up"></i>}
                </button>
              </div>

              { languageBtn && <div
                className="absolute right-0 z-10 mt-2 w-[150px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    O'zbek
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Korean
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-100"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Russian
                    </button>
                  </form>
                </div>
              </div>}

            </div>
            
          </li>

          <li
            onClick={() => {
              setOpenMenus(!openMenus);
            }}
            className="text-end border w-[50px] text-[30px] flex justify-center items-center  text-black md:hidden cursor-pointer"
          >
            <i className="bi bi-list font-bold"></i>
          </li>
        </ul>
      </section>

      {openMenus && (
        <div
          className={`bg-red-300 fixed w-[calc(100%-16px)] ml-2 mr-2 ${
            scrollY > 50 ? "mt-[90px]" : "mt-[120px]"
          } transition-all duration-300 p-4 md:hidden`}
        >
          <ul className="items-center text-center p-2 border border-red-700">
            <li className="text-start text-[20px] w-[250px] mt-4">
              <p className="font-bold border border-sky-800">Menu:</p>
            </li>

            {menus.map((menu) => (
              <li
                key={menu.id}
                onClick={() => {
                  scrollToSection(menu.ref);
                }}
                className="cursor-pointer border mt-4 w-[250px] border-sky-500"
              >
                {menu.name}
              </li>
            ))}

            <li className="border border-sky-800 mt-4 mb-4 w-[250px]">
              <p className="font-bold">En </p>
            </li>
          </ul>
        </div>
      )}

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
