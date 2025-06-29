import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Layers, Users, Star, Database, TrendingUp } from "lucide-react";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section
            id="about"
            className="bg-[#0f172a] text-white py-20 px-4 md:px-8"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    About Me
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-4"></div>
                <p className="text-gray-300 md:text-lg mb-12">
                    Discover my journey, passions, and what drives me as a developer
                </p>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* My Programming Journey */}
                    <div
                        data-aos="fade-up"
                        className="flex-1 bg-[#1e293b]/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#334155] text-left transition-transform duration-500 hover:shadow-indigo-800"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
                            <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400 animate-gradient-y"></span>
                            My Programming Journey
                        </h3>
                        <div className="space-y-4 text-gray-300 text-justify">
                            <p>
                                My programming journey began in the first semester of university
                                with C/C++, marking my first step into the world of code. While
                                initially challenging, this foundational experience gave me a strong
                                grasp of logic and problem-solving.
                            </p>

                            <p>
                                Later, a web technology course introduced me to{" "}
                                <span className="text-indigo-400 font-medium">
                                    Javascript
                                </span>{" "}
                                — and that changed everything. I was captivated by the creativity
                                and interactivity of the web. Inspired by{" "}
                                <span className="text-purple-400 font-medium">
                                    Anisul Islam Sir's
                                </span>{" "}
                                tutorials, I dove deep into the world of frontend development. It
                                sparked a passion that has only grown stronger with time.
                            </p>

                            <p>
                                My learning truly accelerated when I joined the{" "}
                                <span className="text-cyan-400 font-medium">Programming Hero</span>{" "}
                                community. There, I explored advanced concepts and sharpened my
                                skills through real-world projects, building confidence with modern
                                tools, frameworks, and best practices. I'm a constant learner —
                                always staying updated and building things that matter.
                            </p>
                        </div>
                    </div>

                    {/* What I Enjoy */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="flex-1 bg-[#1e293b]/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#334155] text-left transition-transform duration-500 hover:shadow-indigo-800"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
                            <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400 animate-gradient-y"></span>
                            What I Enjoy
                        </h3>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Code size={18} className="text-cyan-400" />
                                Building scalable and maintainable web applications
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Layers size={18} className="text-purple-400" />
                                Learning new technologies and frameworks
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Users size={18} className="text-indigo-400" />
                                Collaborating with teams to solve challenging problems
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Star size={18} className="text-yellow-400" />
                                Contributing to open-source projects
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Database size={18} className="text-emerald-400" />
                                Exploring database design & optimization
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <TrendingUp size={18} className="text-pink-400" />
                                Continuously improving performance and UX
                            </li>
                        </ul>

                        <h4 className="text-xl font-semibold mb-4">Hobbies & Interests</h4>
                        <div className="flex flex-wrap gap-4">
                            {["Cricket", "Badminton", "Hiking","Travelling", "Photography", "Reading", "Gaming", "Cooking"].map((hobby) => (
                                <span
                                    key={hobby}
                                    className="px-3.5 py-1 border border-indigo-500 rounded-full bg-gradient-to-r from-purple-800 to-cyan-800 text-sm tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-cyan-800 hover:to-purple-800 cursor-pointer"
                                >
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
