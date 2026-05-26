import React, { useState } from "react";
import logo from "../assets/logo.svg";
import iconHamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-15 bg-white shadow-sm md:h-20">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <img src={logo} alt="Easybank Logo" className="h-5" />

        <nav className="hidden h-full space-x-8 text-base text-gray-400 md:flex">
          {navLinks.map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              className="relative flex h-full items-center px-1 transition-colors
               text-black after:absolute after:bottom-7 after:left-0 after:h-0.5
               after:w-full after:origin-center after:scale-x-0 after:bg-linear-to-r after:from-[hsl(136,64%,51%)]
                after:to-[hsl(192,69%,51%)] after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="hidden rounded-full bg-linear-to-r from-[hsl(136,64%,51%)] to-[hsl(192,69%,51%)] px-8 py-3 text-sm font-medium text-white shadow-md transition-opacity duration-200 hover:opacity-70 md:block">
          Request invite
        </button>

        <button
          className="z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <img
            src={isOpen ? iconClose : iconHamburger}
            alt=""
            className="h-5 w-6 object-contain"
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-15 bg-linear-to-b from-black/50 to-transparent md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="mx-4 mt-6 space-y-6 rounded-md bg-white py-8 text-center font-medium text-slate-800 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                href={`#${link.toLowerCase()}`}
                key={link}
                onClick={() => setIsOpen(false)}
                className="block text-lg transition-colors hover:text-black"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
