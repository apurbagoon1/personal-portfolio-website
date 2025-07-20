import React from "react";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { LuSparkles } from "react-icons/lu";


const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#0f172a] text-white pt-24 md:pt-48 px-4 md:px-8"
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
                {/* Left Content */}
                <motion.div
                    className="space-y-6 max-w-2xl"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-purple-800 px-5 py-1 bg-[#13203f] md:text-lg font-medium">
                        <LuSparkles /> Welcome to my portfolio!
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Hi, I’m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            Apurba Goon
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-300">
                        Full Stack Web Developer | MERN Stack Enthusiast
                    </h2>

                    <p className="text-gray-400 md:text-lg leading-relaxed text-justify">
                        Passionate about building real-world projects that solve real problems. With a strong focus for JavaScript and UI/UX, I bring your ideas to life through clean code and thoughtful
                        design.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1moU2wjy2MYvBX2A7dlDl8r4g0xXHY-Ha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 md:text-lg rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                        >
                            <FiDownload size={20} /> Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-2 md:text-lg rounded-lg border border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
                        >
                            <BsEnvelope size={20} /> Get In Touch
                        </a>
                    </div>
                    {/* Social Icons */}
                    <div className="flex opacity-50 gap-6 md:gap-8 mb-6 md:mb-0 md:mt-10">
                        <a
                            href="https://github.com/apurbagoon1"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-purple-400 hover:scale-110 transition-colors duration-300 text-xl md:text-2xl"
                            title="GitHub"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/apurbagoon1"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-blue-400 hover:scale-110 transition-colors duration-300 text-xl md:text-2xl"
                            title="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="mailto:apurbagoon1@gmail.com"
                            className="text-white hover:text-pink-400 hover:scale-110 transition-colors duration-300 text-xl md:text-2xl"
                            title="Email"
                        >
                            <FiMail />
                        </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96 md:-mt-10 mb-5"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.25, 0.5, 0.25],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-600 blur-2xl"
                    />

                    <div className="absolute w-full h-full rounded-full border-[6px] border-transparent bg-gradient-to-tr from-purple-700 to-indigo-700 p-1" />

                    {/* Profile Image */}
                    <img
                        src={profile}
                        alt="Profile"
                        className="relative z-10 w-full h-full object-cover rounded-full border-[4px] border-[#1e293b] shadow-2xl"
                    />

                    {/* Arrows */}
                    <svg
                        className="absolute left-[-50px] top-0 w-12 h-12 animate-pulse text-purple-600 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15 19l-7-7 7-7" />
                    </svg>

                    <div className="absolute right-[-50px] bottom-0 flex items-center text-purple-600 opacity-50">
                        <span className="text-3xl md:text-4xl font-semibold absolute bottom-2 md:-left-2">/</span>
                        <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
