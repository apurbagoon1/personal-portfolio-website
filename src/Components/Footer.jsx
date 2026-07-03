import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiDownload,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    
    "about",
    "skills",
    "education",
    "projects"
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const capitalize = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <footer className="relative border-t border-white/10 bg-[#0f172a]">
      <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500" />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-logo font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Apurba Goon
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Full Stack Software Engineer passionate about building
              scalable, high-performance web applications with modern
              JavaScript technologies and thoughtful user experiences.
            </p>

            <div className="flex gap-5 mt-8 text-2xl">

              <a
                href="https://github.com/apurbagoon1"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FiGithub />
              </a>

              <a
                href="https://linkedin.com/in/apurbagoon1"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:apurbagoon1@gmail.com"
                className="hover:text-pink-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FiMail />
              </a>

            </div>
          </div>

          {/* Middle */}
          <div className="lg:ml-20">
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScroll(item)}
                    className="text-gray-400 hover:text-purple-400 transition duration-300 cursor-pointer"
                  >
                    {capitalize(item)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Let's Build Something Amazing
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Have an exciting project or opportunity?
              I'd love to hear about it.
              Let's create something impactful together.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => handleScroll("contact")}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition duration-300 cursor-pointer"
              >
                Get In Touch
              </button>

              <a
                href="https://drive.google.com/uc?export=download&id=1moU2wjy2MYvBX2A7dlDl8r4g0xXHY-Ha"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-white/20 hover:border-purple-400 flex items-center gap-2 transition duration-300"
              >
                <FiDownload />
                Resume
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Apurba Goon. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Built with React • Tailwind CSS • Framer Motion
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition duration-300 flex items-center justify-center cursor-pointer"
          >
            <FiArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;