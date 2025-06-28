import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/60 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-400">Apurba Goon</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 lg:gap-10 font-medium text-lg">
          <li><a href="#" className="hover:text-purple-300">Home</a></li>
          <li><a href="#about" className="hover:text-purple-300">About</a></li>
          <li><a href="#skills" className="hover:text-purple-300">Skills</a></li>
          <li><a href="#education" className="hover:text-purple-300">Education</a></li>
          <li><a href="#projects" className="hover:text-purple-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-300">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium bg-[#0f172a]/80 backdrop-blur-sm">
          <a href="#about" className="block hover:text-purple-300">About</a>
          <a href="#skills" className="block hover:text-purple-300">Skills</a>
          <a href="#education" className="block hover:text-purple-300">Education</a>
          <a href="#projects" className="block hover:text-purple-300">Projects</a>
          <a href="#contact" className="block hover:text-purple-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
