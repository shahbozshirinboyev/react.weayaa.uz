import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// logo
import logoBlack from "/images/logo/logo-black.png";
import logoWhite from "/images/logo/logo-white.png";

function Navbar({setNavRef}) {
  const menus = [
    {
      id: 1,
      href: "#home",
      name: "Home",
      icon: "bi bi-house",
    },
    {
      id: 2,
      href: "#members",
      name: "Members",
      icon: "bi bi-people",
    },
    {
      id: 3,
      href: "#art",
      name: "Art",
      icon: "bi bi-brush",
    },
    {
      id: 4,
      href: "#news",
      name: "News",
      icon: "bi bi-newspaper",
    },
    {
      id: 5,
      href: "#contact",
      name: "Contact",
      icon: "bi bi-info-circle",
    },
  ];
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [languageBtn, setLanguageBrn] = useState(false);
  const navRef = useRef(null);

useEffect(() => {
  setNavRef(navRef?.current?.offsetHeight)
},[navRef?.current?.offsetHeight])

  useEffect(() => {
    const handleScroll = () => { setScrollY(window.scrollY); };
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, [scrollY]);

  return (
    <section ref={navRef}
      className={`fixed w-full px-2 z-[999] transition-all duration-300 border-2 border-sky-500
        ${scrollY > 50 ? "py-2 bg-white bg-opacity-90" : "py-4 bg-transparent"}`}
    >
      <ul className="container flex items-center mx-auto gap-4 text-center">
        <li className="text-start w-full text-[30px] border border-red-700">
          <img src={scrollY > 50 ? logoBlack : logoWhite} alt="weayaa_logo" className="transition-all duration-300" />
        </li>

        {menus.map((menu) => (
          <li key={menu.id} className="border border-red-700 px-2 py-1">
            <a
              href={menu.href}
              className={`cursor-pointer font-semibold hover:text-opacity-60 transition-all duration-300 hidden md:block
                ${ scrollY > 50 ? "text-mainColor" : "text-white" }`}
            >
              {menu.name}
            </a>
          </li>
        ))}

        <li className="cursor-pointer w-full text-end hidden lg:block border border-red-700">
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
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    O'zbek
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    Korean
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-100"
                      role="menuitem"
                      tabIndex="-1"
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
          onClick={() => setOpen(!open)}
          className={`text-end w-[50px] text-[30px] flex justify-center items-center ${
            scrollY > 50 ? "text-mainColor" : "text-white"
          } md:hidden cursor-pointer transition-all duration-300`}
        >
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
                  className={`text-start text-mainColor font-semibold cursor-pointer my-4 transition-all duration-500`}
                >
                  <a
                    href={menu.href}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <i className={menu.icon}></i> &nbsp;&nbsp; {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;