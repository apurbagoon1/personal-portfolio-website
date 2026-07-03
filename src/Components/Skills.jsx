import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
  SiPostman,
  SiTrello,
  SiFigma,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiDocker
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    {
      name: "JavaScript (ES6+)",
      icon: <SiJavascript className="text-yellow-400" />,
    },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React.js", icon: <SiReact className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap 5", icon: <SiBootstrap className="text-purple-600" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "REST APIs", icon: <TbApi className="text-cyan-400" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "Prisma", icon: <SiPrisma className="text-white" /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "npm", icon: <SiNpm className="text-red-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Trello", icon: <SiTrello className="text-blue-500" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  ];

  const renderSkills = (skills) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
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
    <section
      id="skills"
      className="bg-[#0f172a] text-white py-10 md:py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
        </h2>
        <div className="h-1 w-16 md:w-24 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-4"></div>
        <p className="text-gray-300 md:text-xl mb-6 md:mb-12 max-w-2xl mx-auto">
          A snapshot of my technical toolkit — the languages, frameworks, and
          tools that power my projects.
        </p>

        <div className="mb-6 md:mb-12" data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-left">
            Frontend
          </h3>
          {renderSkills(frontendSkills)}
        </div>

        <div className="mb-6 md:mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-left">
            Backend
          </h3>
          {renderSkills(backendSkills)}
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-left">
            Tools & Technologies
          </h3>
          {renderSkills(toolsSkills)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
