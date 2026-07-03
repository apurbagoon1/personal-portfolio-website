import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);

    const scrollPosition = window.scrollY + 120;

    for (const item of navItems) {
      const section = document.getElementById(item.id);

      if (!section) continue;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {
        setActiveSection(item.id);
        break;
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const handleNavClick = (id) => {
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-[#0f172a]/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="text-3xl md:text-4xl font-logo font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          Apurba Goon
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-10 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-purple-400"
                    : "text-white hover:text-purple-300"
                }`}
              >
                {item.label}

                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu cursor-pointer"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : {}}
            className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 cursor-pointer"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : {}}
            className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 cursor-pointer"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : {}}
            className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mb-4 rounded-2xl border border-white/10 bg-[#111c34]/95 backdrop-blur-xl shadow-xl overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-6 py-4 transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-purple-400 bg-white/5"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
