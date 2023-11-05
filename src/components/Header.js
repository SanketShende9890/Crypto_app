import React, { useState, useEffect } from "react";
import logoLarge from "../assets/logo_lg.png";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const navbarStyle = {
    zIndex: '99',
    backgroundColor: scrolling ? "rgb(47, 50, 65)" : "transparent",
    transition: "all 0.5s",
    boxShadow: scrolling ? '0 0 5px rgba(0, 0, 0, 0.5)' : 'none',
  };

  const MenuList = () => {
    const linkClass =
      "w-full flex justify-center items-center p-2.5 text-2xl lg:text-base mb-5 lg:mb-0 uppercase lg:hover:bg-transparent lg:hover:underline hover:bg-blue-900 transition-all";
    return (
      <>
        <Link className={linkClass} to="/exchange">
          Exchange
        </Link>
        <Link className={linkClass} to="/pricing">
          Pricing
        </Link>
        <Link className={linkClass} to="/wallet">
          Wallet
        </Link>
        <Link className={linkClass} to="/company">
          Company
        </Link>
        <Link className={linkClass} to="/blog">
          Blog
        </Link>
      </>
    );
  };

  return (
    <header style={navbarStyle} className="fixed w-full">
      <nav className="w-full h-16 flex justify-between items-center mx-auto max-w-7xl px-4">
        <div onClick={() => setNavbarOpen(!navbarOpen)} className="h-12">
          <Link to="/">
            <img
              className="cursor-pointer h-full"
              src={logoLarge}
              alt="Cryptolly"
            />
          </Link>
        </div>
        <div className="cta-button hidden lg:flex justify-center items-center gap-4">
          <MenuList />
          <div className="flex justify-center items-center gap-4 w-full">
            <button className="outline-btn md-btn w-28">Sign In</button>
            <button className="grad-btn md-btn w-36">Get Started</button>
          </div>
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
        style={{
          transform: navbarOpen ? "translateX(0)" : "translateX(-100%)",
          right: 0,
        }}
        className={`lg:hidden mt-16 absolute top-0 right-0 min-h-screen w-full bg-blue-950 transition ease-in-out delay-150`}
      >
        <nav className="flex flex-col justify-center items-center pt-7 px-10">
          <MenuList />
          <button className="outline-btn md-btn mb-6 w-full sm:w-1/2">
            Sign In
          </button>
          <button className="grad-btn md-btn w-full sm:w-1/2">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
