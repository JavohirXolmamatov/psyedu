import React, { useContext, useEffect, useState } from "react";
import { Footer, Header, Navbar } from "../components";
import { Outlet, useNavigate } from "react-router";
import api from "../service/api";
import { UserContext } from "../context/userContext";

function MainLayout() {
  const { setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);

  /*** check access token ***/
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!access_token) {
      navigate("/login");
    }
  }, [access_token, navigate]);

  useEffect(() => {
    if (access_token) {
      api.get("auth/me").then((data) => {
        if (data.statusText == "OK") {
          setUser(data.data);
        }
      });
    }
  }, []);

  return (
    <div className="w-full flex relative overflow-hidden h-screen">
      <aside
        className={`absolute md:relative transition-all duration-300 ${
          isOpen
            ? "md:w-3/12 hidden md:block"
            : "md:w-1/12 w-8/10 z-999 left-0 block"
        } h-screen bg-[#2964c2] ${!isOpen ? "block" : "hidden"} md:block`}
      >
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      </aside>

      <main
        className={`transition-all duration-300 overflow-y-auto ${
          isOpen ? "md:w-9/12 w-full" : "md:w-11/12 w-full"
        } bg-[#E8F1FF]`}
      >
        <header className="w-full px-5">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
        <section className="w-full mx-auto px-5 overflow-y-auto">
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
