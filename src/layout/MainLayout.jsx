import React, { useState } from "react";
import { Footer, Header, Navbar } from "../components";
import { Outlet } from "react-router";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full flex relative">
      <aside
        className={`absolute md:relative transition-all duration-300 ${
          isOpen
            ? "md:w-2/10 hidden md:block"
            : "md:w-[5%] w-8/10 z-999 left-0 block"
        } h-screen bg-[#2964c2] ${!isOpen ? "block" : "hidden"} md:block`}
      >
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      </aside>

      <main
        className={`transition-all duration-300 ${
          isOpen ? "md:w-8/10 w-full" : "md:w-[95%] w-full"
        } bg-[#E8F1FF]`}
      >
        <header>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
        <section className="w-[90%] mx-auto">
          <Outlet />
        </section>
        <footer className="bg-[#154DA6]">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default MainLayout;
