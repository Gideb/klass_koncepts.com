import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const changeHeaderBg = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", changeHeaderBg);
    return () => window.removeEventListener("scroll", changeHeaderBg);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 mt-7">
        {/* Logo */}
        <img src={logo} alt="klass koncepts logo" className="w-15" />

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-semibold text-gray-700  hover:text-[#884DED] 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:h-0.5 after:w-0 after:bg-purple-500
                 after:transition-all after:duration-400
                 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="bg-linear-to-r from-purple-700 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
