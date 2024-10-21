import { useRef } from "react";

function RootLayout() {
  const home = useRef(null);
  const members = useRef(null);
  const art = useRef(null);
  const news = useRef(null);
  const contact = useRef(null);

  const menus = [
    {
      id: 1,
      refName: "home",
      name: "Home",
    },
    {
      id: 2,
      refName: "members",
      name: "Members",
    },
    {
      id: 3,
      refName: "art",
      name: "Art",
    },
    {
      id: 4,
      refName: "news",
      name: "News",
    },
    {
      id: 5,
      refName: "contact",
      name: "Contact",
    },
  ];
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="bg-lime-200 sticky top-0">
        <div className="container flex justify-center items-center py-4 sticky top-0">
          <div>
            <p className="font-bold">logo.</p>
          </div>

          <ul className="grid grid-cols-5 mx-auto text-center gap-24">
            {menus.map((menu) => (
              <li
                key={menu.id}
                onClick={() => {scrollToSection(news)}}
                className="cursor-pointer"
              >
                {menu.name}
              </li>
            ))}
          </ul>

          <div>
            <p className="font-bold">En</p>
          </div>
        </div>
      </section>

      {/* Sahifaning bo'limlari */}
      <div
        ref={home}
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
