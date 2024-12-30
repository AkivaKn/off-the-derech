/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export default function MobileHeader({ isMenuOpen, toggleMenu }) {
  const location = useLocation();
  useEffect(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
  }, [location]);
  return (
    <>
      <header className="fixed -top-1 z-30 flex h-24 w-full items-center justify-between bg-secondaryColor px-6 py-8 sm:px-8 md:px-10 lg:hidden"></header>
      <Link to="/" className="lg:hidden">
        <img
          src={logo}
          className="fixed left-6 top-8 z-50 h-[5vh] sm:left-8 md:left-10"
          alt="website logo"
        />
      </Link>
      <button
        onClick={toggleMenu}
        className="fixed right-6 top-8 z-50 flex items-center gap-2 sm:right-8 md:right-10 lg:hidden"
      >
        <h3>{isMenuOpen ? "Close" : "Menu"}</h3>
        {isMenuOpen ? (
          <MdClose className="text-3xl" />
        ) : (
          <MdMenu className="text-3xl" />
        )}
      </button>
    </>
  );
}
