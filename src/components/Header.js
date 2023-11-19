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
      "w-full flex justify-center items-center p-2.5 text-2xl lg:text-base mb-5 lg:mb-0 uppercase lg:hover:bg-transparent lg:hover:underline hover:bg-slate-800 transition-all";
    return (
      <>
        <Link onClick={() => setNavbarOpen(false)} className={linkClass} to="/market">
          Market
        </Link>
        <Link onClick={() => setNavbarOpen(false)} className={linkClass} to="/pricing">
          Pricing
        </Link>
        <Link onClick={() => setNavbarOpen(false)} className={linkClass} to="/wallet">
          Wallet
        </Link>
        <Link onClick={() => setNavbarOpen(false)} className={linkClass} to="/company">
          Company
        </Link>
        <Link onClick={() => setNavbarOpen(false)} className={linkClass} to="/blog">
          Blog
        </Link>
      </>
    );
  };

  return (
    <header style={navbarStyle} className="fixed w-full">
      <nav className="w-full h-16 flex justify-between items-center mx-auto max-w-7xl px-4">
        <div className="h-12">
          <Link onClick={() => setNavbarOpen(false)} to="/">
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
            <Link onClick={() => setNavbarOpen(false)} to="/login">
            <button className="outline-btn md-btn w-28">Login</button>
            </Link>
            <Link onClick={() => setNavbarOpen(false)}>
            <button className="grad-btn md-btn w-36">Get Started</button>
            </Link>
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
        className={`lg:hidden mt-16 absolute top-0 right-0 min-h-screen w-full bg-slate-900 transition ease-in-out delay-150`}
      >
        <nav className="flex flex-col justify-center items-center pt-7 px-10">
          <MenuList />
          <Link onClick={() => setNavbarOpen(false)} to='/login'>
          <button className="outline-btn md-btn mb-6 w-40">
            Login
          </button>
          </Link>
          <Link onClick={() => setNavbarOpen(false)} >
          <button className="grad-btn md-btn w-40">
            Get Started
          </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
