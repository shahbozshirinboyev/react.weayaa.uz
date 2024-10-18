import { useRef } from "react";

function RootLayout() {
  const home = useRef(null);
  const about = useRef(null);
  const design = useRef(null);
  const menus = [
    {
        id: 1,
        refName: 'home',
        name: 'Home'
    },
    {
        id: 1,
        refName: 'members',
        name: 'Members'
    },
    {
        id: 1,
        refName: 'art',
        name: 'Art'
    },
    {
        id: 1,
        refName: 'news',
        name: 'News'
    },
    {
        id: 1,
        refName: 'contact',
        name: 'Contact'
    },
]
  const scrollToSection = (sectionRef) => { if (sectionRef.current) { sectionRef.current.scrollIntoView({ behavior: 'smooth' }); } };


  return (
    <>
     <nav>
        <ul>
          <li><button onClick={() => scrollToSection(home)}>Home</button></li>
          <li><button onClick={() => scrollToSection(about)}>About</button></li>
          <li><button onClick={() => scrollToSection(design)}>design</button></li>
        </ul>
      </nav>

        
    {/* Sahifaning bo'limlari */}
    <div ref={home} style={{ height: '600px', backgroundColor: 'lightgray' }}>
        Bo'lim 1
      </div>

      <div ref={about} style={{ height: '600px', backgroundColor: 'lightblue' }}>
        Bo'lim 2
      </div>

      <div ref={design} style={{ height: '600px', backgroundColor: 'lightgreen' }}>
        Bo'lim 3
      </div>
      

      
    </>
  )
}

export default RootLayout