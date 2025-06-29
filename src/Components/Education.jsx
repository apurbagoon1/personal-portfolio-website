import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="bg-[#141e36] text-white py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-4"></div>
        <p className="text-gray-300 md:text-lg text-center mb-12">
          My academic journey and educational background
        </p>

        <div className="space-y-8">

          {/* BSC */}
          <div data-aos="fade-up" className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#334155] flex flex-col md:flex-row justify-between gap-6 transition-transform duration-300 hover:shadow-indigo-800">
            <div>
              <h3 className="text-xl font-semibold mb-1">Bachelor of Science in Computer Science & Engineering</h3>
              <p className="text-blue-400 mb-4">American International University-Bangladesh</p>
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                <div>
                  <p className="font-semibold mb-2">Key Highlights:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                      Major in Software Engineering
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                      Focused on building scalable web applications 
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                      Gaining hands-on experience with the MERN stack
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-purple-400" /> 2019 - 2025
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400" />Kuratoli, Khilkhet, Dhaka 1229
              </div>
            </div>
          </div>

          {/* HSC */}
          <div data-aos="fade-up" className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#334155] flex flex-col md:flex-row justify-between gap-6 transition-transform duration-300 hover:shadow-indigo-800">
            <div>
              <h3 className="text-xl font-semibold mb-1">Higher Secondary Certificate (HSC)</h3>
              <p className="text-blue-400 mb-4">Dhaka Imperial College</p>
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                <div>
                  <p className="font-semibold mb-2">Key Highlights:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                      Overcame obstacles to achieve academic milestones
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                      Completed studies despite facing academic challenges
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                      Took part in several science competitions to improve skills and knowledge
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-purple-400" /> 2016 - 2018
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400" /> Jahrul Islam City, Dhaka 1212
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
