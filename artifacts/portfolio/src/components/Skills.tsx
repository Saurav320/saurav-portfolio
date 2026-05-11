import { motion } from 'framer-motion';

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub
} from 'react-icons/fa';

import {
  SiTensorflow,
  SiTailwindcss,
  SiVite,
  SiFigma
} from 'react-icons/si';

const skills = [
  {
    name: "Python",
    level: 65,
    icon: FaPython,
    category: "Programming",
  },
  {
    name: "React JS",
    level: 65,
    icon: FaReact,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    level: 70,
    icon: FaJsSquare,
    category: "Web",
  },
  {
    name: "HTML5",
    level: 85,
    icon: FaHtml5,
    category: "Frontend",
  },
  {
    name: "GitHub",
    level: 75,
    icon: FaGithub,
    category: "Tools",
  },
];
export function Skills() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 relative bg-[#0b1120] overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADING */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold inline-block relative">

            Technical Arsenal

            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]" />
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build futuristic web experiences,
            AI systems and modern responsive applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={item}
                className="group relative p-6 rounded-3xl border border-cyan-500/10 bg-[#111827]/70 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)] transition-all duration-500"
              >

                {/* TOP */}
                <div className="flex items-center justify-between mb-6">

                  <div className="p-4 rounded-2xl bg-black/30 border border-cyan-500/10 text-cyan-400 group-hover:scale-110 transition duration-300">
                    <Icon size={28} />
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                    {skill.category}
                  </span>
                </div>

                {/* NAME */}
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition">
                  {skill.name}
                </h3>

                {/* PROGRESS */}
                <div>

                  <div className="flex justify-between text-sm mb-2">

                    <span className="text-gray-400">
                      Proficiency
                    </span>

                    <span className="text-cyan-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">

                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                      }}
                    />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/5 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}