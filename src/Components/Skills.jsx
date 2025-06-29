import React from "react";
import {
    SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiReact,
    SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiFigma, SiCanva, SiVercel,
    SiGit
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const Skills = () => {
    const frontendSkills = [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ];

    const toolsSkills = [
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
        { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ];

    const renderSkills = (skills) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-[#1e293b]/70 border border-[#334155] rounded-xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
                </div>
            ))}
        </div>
    );

    return (
        <section id="skills" className="bg-[#0f172a] text-white py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Skills</h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-4"></div>
                <p className="text-gray-300 md:text-lg  mb-12 max-w-2xl mx-auto">
                    A snapshot of my technical toolkit — the languages, frameworks, and tools that power my projects.
                </p>

                <div className="mb-12" data-aos="fade-up">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-left">Frontend</h3>
                    {renderSkills(frontendSkills)}
                </div>

                <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-left">Backend</h3>
                    {renderSkills(backendSkills)}
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-left">Tools & Technologies</h3>
                    {renderSkills(toolsSkills)}
                </div>
            </div>
        </section>
    );
};

export default Skills;
