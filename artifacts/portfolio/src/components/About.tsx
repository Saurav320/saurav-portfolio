import { motion } from 'framer-motion';
import {
  Terminal,
  GraduationCap,
  Award,
  GitMerge
} from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#0f172a]/70 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)]">

              {/* Terminal Top */}
              <div className="px-4 py-3 border-b border-cyan-500/10 flex items-center gap-2 bg-black/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-gray-400 font-mono">
                  saurav_kumar.py
                </span>
              </div>

              {/* Code Section */}
              <div className="p-6 font-mono text-sm md:text-base leading-8 text-gray-300 overflow-x-auto">

                <p>
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-cyan-400 font-bold">Developer</span>:
                </p>

                <p className="pl-4">
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-blue-400">__init__</span>(self):
                </p>

                <p className="pl-8 text-gray-500">
                  # Basic Information
                </p>

                <p className="pl-8">
                  self.name ={" "}
                  <span className="text-green-400">
                    "Saurav Kumar"
                  </span>
                </p>

                <p className="pl-8">
                  self.location ={" "}
                  <span className="text-green-400">
                    "Bihar, India"
                  </span>
                </p>

                <p className="pl-8">
                  self.role ={" "}
                  <span className="text-green-400">
                    "AI/ML & Web Developer"
                  </span>
                </p>

                <p className="pl-8">
                  self.skills = [
                  <span className="text-green-400">
                    "Python",
                    "React",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "Machine Learning"
                  </span>
                  ]
                </p>

                <br />

                <p className="pl-4">
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-blue-400">build_projects</span>(self):
                </p>

                <p className="pl-8">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-green-400">
                    "Create futuristic AI & Web experiences."
                  </span>
                </p>

                <br />

                <p className="pl-4">
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-blue-400">goal</span>(self):
                </p>

                <p className="pl-8">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-green-400">
                    "Become a successful AI Engineer & Full Stack Developer."
                  </span>
                </p>

                <br />

                <p className="text-cyan-400 animate-pulse">_</p>

              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              I'm Saurav Kumar from Bihar, India. I enjoy learning web development
              and building simple projects using Python, React, HTML, CSS and JavaScript.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Currently improving my frontend and programming skills while exploring
              basic Machine Learning concepts and modern web technologies through practice projects.
            </p>
            {/* Education Card */}
            <div className="flex items-start gap-4 mb-8 p-5 rounded-2xl border border-cyan-500/20 bg-[#111827]/70 backdrop-blur">

              <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
                <GraduationCap size={24} />
              </div>

              <div>
                <h4 className="font-semibold text-xl text-white">
                  Student & Self Learner
                </h4>

                <p className="text-gray-400 text-sm">
                  Exploring AI, Web Development & Modern Technologies
                </p>

                <p className="text-sm mt-2 text-gray-500">
                  Focus: Machine Learning, React, Python & Creative UI Design
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

              <StatCard
                icon={<Terminal size={20} />}
                value="10+"
                label="Projects"
              />

              <StatCard
                icon={<Award size={20} />}
                value="5+"
                label="Skills"
              />

              <StatCard
                icon={<GitMerge size={20} />}
                value="20+"
                label="Commits"
              />

              <StatCard
                icon={<GraduationCap size={20} />}
                value="AI"
                label="Focused"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-2xl border border-cyan-500/10 bg-[#111827]/70 backdrop-blur hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition duration-300">

      <div className="text-cyan-400 mb-2">
        {icon}
      </div>

      <div className="font-bold text-2xl text-white">
        {value}
      </div>

      <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">
        {label}
      </div>
    </div>
  );
}