import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 px-4 border-t border-cyan-500/20 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 text-sm">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
            Apurba Goon
          </h3>
          <p className="text-gray-400">
            Passionate Front-End Developer crafting modern and responsive web applications with React, Tailwind, and Firebase.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#projects"
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} Apurba Goon — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
