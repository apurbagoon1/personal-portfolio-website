import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    document.title = "Apurba Goon | About";
  }, []);

  return (
    <section id="projects" className="py-10 md:py-20 bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Projects
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-4"></div>
        <p className="text-gray-300 md:text-lg text-center mb-6 md:mb-12">Here are some of my recent projects that showcase my skills and experience</p>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              className="group flex flex-col bg-[#1e293b]/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition duration-500 hover:shadow-cyan-600/60"
            >
              {/* Swiper Slider */}
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="h-56 sm:h-64 md:h-72 lg:h-80 w-full"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx} className="h-56 sm:h-64 md:h-72 lg:h-80">
                    <img
                      src={img}
                      alt={`${project.name} ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex flex-col flex-grow p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/60 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-1.5 md:px-6 md:py-2 font-medium tracking-wide rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-cyan-500/20 hover:shadow-purple-500/30 hover:brightness-110 hover:scale-[1.03] transition"
                  >
                    View Details <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
