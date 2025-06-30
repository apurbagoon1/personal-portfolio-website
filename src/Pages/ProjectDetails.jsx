import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaBolt, FaStar, FaMagic } from "react-icons/fa";
import { SiReact, SiFirebase, SiExpress, SiMongodb, SiJsonwebtokens, SiTailwindcss, SiNodedotjs } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const techIcons = {
    "React.js": <SiReact className="text-sky-400 text-2xl" />,
    "Firebase": <SiFirebase className="text-yellow-400 text-2xl" />,
    "Node.js": <SiNodedotjs className="text-green-400 text-2xl" />,
    "Express.js": <SiExpress className="text-gray-400 text-2xl" />,
    "MongoDB": <SiMongodb className="text-green-600 text-2xl" />,
    "JWT": <SiJsonwebtokens className="text-rose-400 text-2xl" />,
    "TailwindCSS": <SiTailwindcss className="text-cyan-400 text-2xl" />,
    "DaisyUI": <SiTailwindcss className="text-pink-400 text-2xl" />,
    "React Router": <SiReact className="text-purple-400 text-2xl" />,
};

const featureIcons = [<FaBolt className="text-yellow-400 mt-1" />, <FaStar className="text-cyan-400 mt-1" />, <FaMagic className="text-purple-400 mt-1" />];

const fadeIn = (direction = "up", delay = 0) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
            x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { delay, duration: 0.6, type: "spring" },
        },
    };
    return variants;
};

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => {
                const selected = data.find(p => p.id === parseInt(id));
                setProject(selected);
            });
    }, [id]);

    if (!project) {
        return <div className="text-center text-3xl font-bold my-20">Loading...</div>;
    }

    return (
        <section className="bg-[#0f172a] text-gray-300 py-16 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Portfolio
                    </Link>
                </motion.div>

                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl md:text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                    {project.name}
                </motion.h2>

                {/* Image Slider */}
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="rounded-xl overflow-hidden shadow-lg"
                    >
                        {project.images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img src={img} alt={`Slide ${idx}`} className="w-full object-cover" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Description */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <p className="leading-relaxed md:text-lg">{project.description}</p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-purple-400">Tech Stack</h3>
                    <div className="flex flex-wrap gap-4">
                        {project.techStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow hover:scale-105 transition"
                            >
                                {techIcons[tech] || <FaBolt className="text-green-400" />}
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-purple-400">Key Features</h3>
                    <ul className="space-y-2 md:space-y-3">
                        {project.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                {featureIcons[idx % featureIcons.length]}
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Challenges */}
                <motion.div
                    variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <h3 className="text-2xl font-semibold mb-3 text-purple-400">Challenges Faced</h3>
                    <ul className="space-y-3 md:space-y-4">
                        {project.challenges.map((c, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                                {c}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Future Plans */}
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    animate="visible"
                    className="mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-3 text-purple-400">Future Plans</h3>
                    <ul className="space-y-3 md:space-y-4">
                        {project.futurePlans.map((f, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                                {f}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Links */}
                <motion.div
                    variants={fadeIn("up", 0.9)}
                    initial="hidden"
                    animate="visible"
                    className="flex gap-6 justify-center"
                >
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-gray-900 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-400 hover:text-black transition"
                    >
                        <FaGithub className="text-xl" /> GitHub
                    </a>
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-gray-900 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
                    >
                        <FaExternalLinkAlt className="text-xl" /> Live Demo
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectDetails;
