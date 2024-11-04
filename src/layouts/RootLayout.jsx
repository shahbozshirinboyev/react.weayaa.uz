import { useRef, useState, useEffect } from "react";
// motion framer
import { motion, AnimatePresence } from "framer-motion";

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
import { div } from "framer-motion/client";

function RootLayout() {
  const home = useRef(null);
  const members = useRef(null);
  const art = useRef(null);
  const news = useRef(null);
  const contact = useRef(null);

  // Loading -- Start
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(!loader);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  // Loading -- End

  const menus = [
    {
      id: 1,
      ref: home,
      name: "Home",
      icon: "bi bi-house",
    },
    {
      id: 2,
      ref: members,
      name: "Members",
      icon: "bi bi-people",
    },
    {
      id: 3,
      ref: art,
      name: "Art",
      icon: "bi bi-brush",
    },
    {
      id: 4,
      ref: news,
      name: "News",
      icon: "bi bi-newspaper",
    },
    {
      id: 5,
      ref: contact,
      name: "Contact",
      icon: "bi bi-info-circle",
    },
  ];

  const [activeRef, setActiveRef] = useState(home);

  const [open, setOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [languageBtn, setLanguageBrn] = useState(false);

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
    if (scrollY === 0) {
      setActiveRef(home);
    }
    console.log("scrollY: " + scrollY);
  }, [scrollY]);

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
      {/* Loader start */}
      <section
        className={`fixed flex z-[1000] overflow-hidden transition-all ease-in-out duration-500 justify-center items-center bg-black w-full ${
          loader
            ? "max-h-screen h-screen opacity-100"
            : "max-h-0 h-screen opacity-0"
        }`}
      >
        <div className="p-6 block mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex justify-center items-center w-[300px] h-[300px]"
          >
            <div className="loader"></div>
          </motion.div>
        </div>
      </section>
      {/* Loader end */}

      {/* Navbar Section =============> */}
      <section
        className={`fixed w-full px-2 ${
          scrollY > 50 ? "py-2 bg-white bg-opacity-90" : "py-4 bg-transparent"
        } transition-all duration-500`}
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
              className={`cursor-pointer w-[480px] font-semibold hover:text-opacity-60 transition-all duration-300 ${
                scrollY > 50 ? "text-mainColor" : "text-white"
              } hidden md:block ${
                activeRef === menu.ref ? "text-opacity-60" : "text-opacity-100"
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
                  className={`${
                    scrollY > 50 ? "text-mainColor" : "text-white"
                  } inline-flex w-full justify-center gap-x-1.5 hover:text-mainColor px-3 py-2 transition-all duration-300`}
                >
                  En
                  {!languageBtn && <i className="bi bi-chevron-down"></i>}
                  {languageBtn && <i className="bi bi-chevron-up"></i>}
                </button>
              </div>

              {languageBtn && (
                <div
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
                </div>
              )}
            </div>
          </li>

          <li
            onClick={() => {
              setOpen(!open);
            }}
            className={`text-end w-[50px] text-[30px] flex justify-center items-center  ${
              scrollY > 50 ? "text-mainColor" : "text-white"
            } md:hidden cursor-pointer transition-all duration-300`}
          >
            {/* { !open &&  <i className="bi bi-list font-bold"></i>}
            { open && <i className="bi bi-x-lg font-bold"></i>} */}
            {!open && (
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <i className="bi bi-list font-bold"></i>
                </motion.div>
              </AnimatePresence>
            )}
            {open && (
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <i className="bi bi-x-lg font-bold"></i>
                </motion.div>
              </AnimatePresence>
            )}
          </li>
        </ul>

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -300 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className={`bg-white shadow-md fixed w-[calc(100%-16px)] ${
                scrollY > 50 ? "mt-[26px]" : "mt-[26px]"
              } p-4 md:hidden rounded-md`}
            >
              <ul className="items-center text-center p-2">
                {menus.map((menu) => (
                  <li
                    key={menu.id}
                    onClick={() => {
                      scrollToSection(menu.ref);
                    }}
                    className={`text-start text-mainColor font-semibold cursor-pointer my-4
                    ${
                      activeRef === menu.ref
                        ? "text-opacity-60"
                        : "text-opacity-100"
                    }
                    transition-all duration-500`}
                  >
                    <i className={menu.icon}></i> &nbsp;&nbsp; {menu.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* {openMenus && (
          <div
            className={`bg-red-300 fixed w-[calc(100%-16px)] ${
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
        )} */}
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
