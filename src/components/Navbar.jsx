import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// logo
import logoBlack from "/images/logo/logo-black.png";
import logoWhite from "/images/logo/logo-white.png";

//i18next
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function Navbar({ setNavRef }) {
  const { t } = useTranslation();
  const menus = t('menus', { returnObjects: true });
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [languageBtn, setLanguageBrn] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setNavRef(navRef?.current?.offsetHeight);
  }, [navRef?.current?.offsetHeight]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menus.map((menu) => document.querySelector(menu.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveId(menus[index].id);
          }
        }
      });

      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageBrn(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <section
      ref={navRef}
      className={`fixed w-full px-2 z-[999] transition-all duration-300
        ${
          scrollY > 50
            ? "py-2 bg-white bg-opacity-[95%] shadow-md"
            : "py-4 bg-transparent shadow-none"
        }`}
    >
      <ul className="container flex justify-between items-center mx-auto gap-4 text-center">
        <li>
          <a
            href="#home"
            className="btn bg-transparent shadow-0 border-0 hover:bg-transparent shadow-none"
          >
            <img
              src={scrollY > 50 ? logoBlack : logoWhite}
              alt="weayaa_logo"
              className="transition-all duration-300 w-[130px]"
            />
          </a>
        </li>

        <div className="flex gap-4">
          {menus.map((menu) => (
            <li key={menu.id} className={`hidden md:flex`}>
              <a
                href={menu.href}
                onClick={() => setActiveId(menu.id)}
                className={`cursor-pointer font-semibold transition-all duration-300 w-[90px] hover:text-white hover:bg-mainColor btn btn-sm border-0 shadow-none whitespace-nowrap
                ${
                  scrollY > 50
                    ? "text-mainColor bg-mainColor bg-opacity-20"
                    : "text-white bg-opacity-0"
                }
                ${activeId === menu.id ? "!bg-mainColor !text-white" : ""}`}
              >
                {t(`menus.${menu.id - 1}.name`)}
              </a>
            </li>
          ))}
        </div>

        <li className="cursor-pointer text-end hidden lg:block">
          <div className="relative inline-block text-left font-bold" ref={dropdownRef}>
            <div className="relative">
              <button
                onClick={() => setLanguageBrn(!languageBtn)}
                type="button"
                className={`${
                  scrollY > 50 ? "text-mainColor" : "text-white"
                } inline-flex w-full justify-center gap-x-1.5 px-3 py-2 active:scale-95 transition-all duration-300 btn bg-transparent border-0 shadow-none btn-sm hover:bg-mainColor hover:text-white`}
              >
                <i className="bi bi-translate"></i>
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
                    onClick={() => i18n.changeLanguage("en")}
                    href="#"
                    className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <img
                    src="/images/language_icons/en.png"
                    className="w-5"
                  />
                  <span>English</span>
                  </a>
                  <a
                    onClick={() => i18n.changeLanguage("uz")}
                    href="#"
                    className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <img
                    src="/images/language_icons/uz.png"
                    className="w-5"
                  />
                  <span>O'zbekcha</span>
                  </a>
                  <a
                    onClick={() => i18n.changeLanguage("ko")}
                    href="#"
                    className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <img
                    src="/images/language_icons/ko.png"
                    className="w-5"
                  />
                  <span>Korean</span>
                  </a>
                  <a
                    onClick={() => i18n.changeLanguage("ru")}
                    href="#"
                    className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <img
                    src="/images/language_icons/ru.png"
                    className="w-5"
                  />
                  <span>Russian</span>
                  </a>

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
            className={`bg-white shadow-md fixed w-[calc(100%-16px)] p-2 md:hidden rounded-md border border-mainColor border-opacity-20 ${
              scrollY > 50 ? "mt-[26px]" : "mt-[26px]"
            }`}
          >
            <ul className="items-center text-center p-2">
              {menus.map((menu) => (
                <li key={menu.id} className="my-2">
                  <a
                    href={menu.href}
                    onClick={() => {
                      setActiveId(menu.id);
                      setOpen(false);
                    }}
                    className={`btn btn-sm w-full transition-all hover:bg-mainColor hover:bg-opacity-40 flex justify-start items-center duration-300 border-0 ${
                      activeId === menu.id
                        ? "text-white bg-mainColor"
                        : "text-mainColor bg-mainColor bg-opacity-20"
                    }`}
                  >
                    <i className={menu.icon}></i>
                    <span>{t(`menus.${menu.id - 1}.name`)}</span>
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
