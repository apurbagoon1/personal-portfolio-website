import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Projects
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-12"></div>

        <div className="grid md:gap-4 lg:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.summary}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
