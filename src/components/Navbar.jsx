import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const changeHeaderBg = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", changeHeaderBg);
    return () => window.removeEventListener("scroll", changeHeaderBg);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 pt-3">
          {/* Logo */}
          <img src={logo} alt="klass koncepts logo" className="w-16" />

          {/* Desktop Links */}
          <div className="space-x-8 hidden md:flex">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-gray-700 hover:text-purple-600
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:w-0 after:bg-purple-500
                  after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 hidden md:inline-block"
          >
            Get a Quote
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-70 bg-white z-50 shadow-2xl 
        transform transition-transform duration-400 ease-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full ">
          {/* Close Button */}
          <button
            className="self-end text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>

          {/* Links */}
          <div className="mt-10 flex flex-col gap-6 text-lg">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-gray-700 hover:text-purple-600 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 absolute bottom-20"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
