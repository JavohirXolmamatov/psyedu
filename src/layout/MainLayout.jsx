import React, { useState } from "react";
import { Footer, Header, Navbar } from "../components";
import { Outlet } from "react-router";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);
  3;
  return (
    <div className="w-full flex">
      <aside
        className={`${isOpen ? "w-2/10" : "w-[5%]"}  h-screen bg-[#2964c2]`}
      >
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      </aside>
      <main className={`${isOpen ? "w-8/10" : "w-[95%]"} bg-[#E8F1FF]`}>
        <header>
          <Header />
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
