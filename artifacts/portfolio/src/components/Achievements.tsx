import { motion } from 'framer-motion';

import {
  Award,
  Trophy,
  GitCommit,
  BookOpen,
  Code2,
  Cpu
} from 'lucide-react';

export function Achievements() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="achievements"
      className="py-24 relative bg-[#0b1120] overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADING */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold inline-block relative text-cyan-300 dark:text-cyan-300">
            Learning Journey

            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]" />
          </h2>

          <p className="text-cyan-400 font-mono mt-6 tracking-[0.3em] text-sm uppercase">
            SAURAV://AI
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEARNING */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >

            <div className="flex items-center gap-3 mb-4">

              <Award className="text-cyan-400" size={28} />

              <h3 className="text-cyan-300 font-bold">
                Learning
              </h3>
            </div>

            <AchievementCard
              icon={<BookOpen size={20} className="text-cyan-400" />}
              title="Python Programming"
              subtitle="Self Learning"
              date="2025"
            />

            <AchievementCard
              icon={<Code2 size={20} className="text-blue-400" />}
              title="React & Frontend Development"
              subtitle="Projects Based Learning"
              date="2025"
            />

            <AchievementCard
              icon={<Cpu size={20} className="text-purple-400" />}
              title="Machine Learning Basics"
              subtitle="AI/ML Learning Journey"
              date="2025"
            />
          </motion.div>

          {/* PROJECTS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:mt-12"
          >

            <div className="flex items-center gap-3 mb-4">

              <Trophy className="text-yellow-400" size={28} />

              <h3 className="text-cyan-300 font-bold">
                Projects
              </h3>
            </div>

            <AchievementCard
              icon={<Trophy size={20} className="text-yellow-400" />}
              title="Face Rating AI"
              subtitle="Machine Learning Project"
              date="2025"
              highlight
            />

            <AchievementCard
              icon={<Trophy size={20} className="text-cyan-400" />}
              title="Spam Email Detector"
              subtitle="Python ML Project"
              date="2025"
            />
          </motion.div>

          {/* JOURNEY */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:mt-24"
          >

            <div className="flex items-center gap-3 mb-4">

              <GitCommit className="text-cyan-400" size={28} />

              <h3 className="text-cyan-300 font-bold">
                Journey
              </h3>
            </div>

            <div className="rounded-2xl border border-cyan-500/10 bg-[#111827]/70 backdrop-blur-xl p-6">

              {/* Activity Grid */}
              <div className="grid grid-cols-7 gap-1 mb-6 opacity-80">

                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-full aspect-square rounded-sm ${Math.random() > 0.5
                      ? 'bg-cyan-400'
                      : Math.random() > 0.3
                        ? 'bg-cyan-400/50'
                        : 'bg-gray-700'
                      }`}
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="space-y-4">

                <div className="flex justify-between items-center border-b border-gray-700 pb-2">

                  <span className="text-gray-400 text-sm">
                    Contributions
                  </span>

                  <span className="text-cyan-400 font-mono font-bold">
                    300+
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-700 pb-2">

                  <span className="text-gray-400 text-sm">
                    Repositories
                  </span>

                  <span className="text-blue-400 font-mono font-bold">
                    5+
                  </span>
                </div>

                <div className="flex justify-between items-center">

                  <span className="text-gray-400 text-sm">
                    Learning
                  </span>

                  <span className="text-purple-400 font-mono font-bold">
                    AI/ML
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({
  icon,
  title,
  subtitle,
  date,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
  highlight?: boolean;
}) {

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className={`p-5 rounded-2xl border flex gap-4 transition-all duration-300 ${highlight
        ? 'bg-cyan-500/5 border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]'
        : 'bg-[#111827]/70 border-cyan-500/10'
        } hover:border-cyan-400/40`}
    >

      {/* ICON */}
      <div className="mt-1 p-3 rounded-full bg-black/30 border border-cyan-500/10 shrink-0">

        {icon}
      </div>

      {/* CONTENT */}
      <div>

        <h4 className="font-semibold text-lg text-white mb-1">
          {title}
        </h4>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400">

          <span>
            {subtitle}
          </span>

          <span className="w-1 h-1 rounded-full bg-gray-500" />

          <span className="font-mono text-xs">
            {date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}