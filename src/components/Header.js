import React, { useState, useEffect } from "react";
import logoSmall from "../assets/logo_sm.png";
import logoLarge from "../assets/logo_lg.png";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  
  return (
    <div className="fixed w-full">
      <nav className="h-16 flex justify-between items-center mx-auto max-w-7xl px-3">
        <div onClick={() => setNavbarOpen(!navbarOpen)} className="h-12">
          <img
            className="cursor-pointer h-full"
            src={logoLarge}
            alt="Cryptolly"
          />
          {/* <img
            className="cursor-pointer h-full sm:block md:hidden"
            src={logoSmall}
            alt="Cryptolly"
          /> */}
        </div>
          <nav className="hidden lg:flex items-start gap-10">
          <a href="">Exchange</a>
          <a href="">Pricing</a>
          <a href="">Wallet</a>
          <a href="">Company</a>
          <a href="">Blog</a>
          </nav>
          <div className="cta-button hidden lg:flex items-start gap-5">
            <button className="outline-btn md-btn">Sign In</button>
            <button className="grad-btn md-btn">Get Started</button>

          </div>
        <div className="lg:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
          {!navbarOpen ? (
            <FaBarsStaggered className="text-3xl cursor-pointer" />
          ) : (
            <FaXmark className="text-4xl cursor-pointer" />
          )}
        </div>
      </nav>
      <div
        style={{ transform: navbarOpen ? "translateX(0)" : "translateX(-100%)", right: 0 }}
        className={`lg:hidden mt-16 absolute top-0 right-0 min-h-screen w-full bg-slate-900 transition ease-in-out delay-150`}
      >
        <nav className="flex flex-col justify-center items-center">
          <a href="">Exchange</a>
          <a href="">Pricing</a>
          <a href="">Wallet</a>
          <a href="">Company</a>
          <a href="">Blog</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
