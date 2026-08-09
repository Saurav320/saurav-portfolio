import { motion } from 'framer-motion';
import { Trophy, GitCommit } from 'lucide-react';

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 overflow-hidden"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================= */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 blur-[140px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* =========================
            HEADING
        ========================= */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            ease: 'easeOut',
          }}
        >
          <div className="flex items-start gap-5">

            <span className="text-cyan-400 font-mono text-sm tracking-widest mt-2">
              05
            </span>

            <div>
              <p className="text-cyan-400 font-mono text-sm tracking-[0.25em] uppercase mb-3">
                The Journey So Far
              </p>

              <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tight text-white">
                My{' '}
                <span className="text-cyan-400">
                  Achievements
                </span>
              </h2>
            </div>

          </div>
        </motion.div>


        {/* =========================
            MAIN GRID
        ========================= */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-16 items-start">


          {/* ==================================================
              LEFT — ACHIEVEMENTS TIMELINE
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="relative"
          >

            {/* Timeline Line */}
            <div
              className="
                absolute
                left-[21px]
                top-5
                bottom-0
                w-[2px]
                bg-gradient-to-b
                from-cyan-400
                via-cyan-400/70
                to-purple-500
              "
            />


            {/* =========================
                PARANOX 2.0
            ========================= */}
            <motion.div
              className="relative pl-20 pb-20"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: 'easeOut',
              }}
            >

              {/* Timeline Dot */}
              <motion.div
                className="
                  absolute
                  left-[11px]
                  top-0
                  w-5
                  h-5
                  rounded-full
                  border-2
                  border-cyan-400
                  bg-[#050914]
                  shadow-[0_0_20px_rgba(34,211,238,0.8)]
                "
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.25,
                  ease: 'backOut',
                }}
              />

              <span className="text-cyan-400 font-mono text-sm">
                2025
              </span>

              <h3 className="text-2xl md:text-3xl font-medium text-white mt-5 mb-4">
                Paranox 2.0
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
                Participated in a 3-month National Level Innovation
                Hackathon focused on innovation, teamwork, and real-world
                project development.
              </p>

              <div
                className="
                  inline-flex
                  mt-5
                  px-4
                  py-2
                  rounded-full
                  border
                  border-gray-700
                  bg-[#07101c]/70
                  text-gray-500
                  font-mono
                  text-xs
                "
              >
                TechXNinjas&nbsp; · &nbsp;Innovation&nbsp; · &nbsp;Teamwork
              </div>

            </motion.div>


            {/* =========================
                AI & DATA SCIENCE
            ========================= */}
            <motion.div
              className="relative pl-20"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.08,
                ease: 'easeOut',
              }}
            >

              {/* Timeline Dot */}
              <motion.div
                className="
                  absolute
                  left-[11px]
                  top-0
                  w-5
                  h-5
                  rounded-full
                  border-2
                  border-cyan-400
                  bg-[#050914]
                  shadow-[0_0_20px_rgba(34,211,238,0.8)]
                "
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.25,
                  delay: 0.08,
                  ease: 'backOut',
                }}
              />

              <span className="text-cyan-400 font-mono text-sm">
                2026
              </span>

              <h3 className="text-2xl md:text-3xl font-medium text-white mt-5 mb-4">
                AI &amp; Data Science Using Python
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
                Completed the C-DAC Patna training-cum-internship with
                Grade A+, building practical foundations in Python,
                data science, machine learning and AI.
              </p>

              <div
                className="
                  inline-flex
                  mt-5
                  px-4
                  py-2
                  rounded-full
                  border
                  border-gray-700
                  bg-[#07101c]/70
                  text-gray-500
                  font-mono
                  text-xs
                "
              >
                C-DAC Patna&nbsp; · &nbsp;Grade A+
              </div>

            </motion.div>

          </motion.div>


          {/* ==================================================
              RIGHT SIDE
          ================================================== */}
          <div className="flex flex-col gap-10">


            {/* ==================================================
                PROJECTS
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >

              {/* Projects Heading */}
              <div className="flex items-center gap-3 mb-5">

                <Trophy
                  className="text-yellow-400"
                  size={28}
                />

                <h3 className="text-cyan-300 font-bold text-xl">
                  Projects
                </h3>

              </div>


              {/* Face Rating AI */}
              <AchievementCard
                icon={
                  <Trophy
                    size={20}
                    className="text-yellow-400"
                  />
                }
                title="Face Rating AI"
                subtitle="Machine Learning Project"
                date="2025"
                highlight
              />


              {/* Spam Email Detector */}
              <AchievementCard
                icon={
                  <Trophy
                    size={20}
                    className="text-cyan-400"
                  />
                }
                title="Spam Email Detector"
                subtitle="Python ML Project"
                date="2025"
              />

            </motion.div>


            {/* ==================================================
                JOURNEY
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: 'easeOut',
              }}
            >

              {/* Journey Heading */}
              <div className="flex items-center gap-3 mb-5">

                <GitCommit
                  className="text-cyan-400"
                  size={28}
                />

                <h3 className="text-cyan-300 font-bold text-xl">
                  Journey
                </h3>

              </div>


              {/* Journey Card */}
              <div
                className="
                  rounded-2xl
                  border
                  border-cyan-500/10
                  bg-[#111827]/70
                  backdrop-blur-xl
                  p-6
                  shadow-[0_0_30px_rgba(0,0,0,0.15)]
                "
              >

                {/* =========================
                    CONTRIBUTION GRID
                ========================= */}
                <div className="grid grid-cols-7 gap-1.5 mb-7">

                  {Array.from({ length: 35 }).map((_, i) => {

                    const levels = [
                      'bg-gray-700',
                      'bg-cyan-400/40',
                      'bg-cyan-400/60',
                      'bg-cyan-400',
                    ];

                    const level =
                      levels[i % levels.length];

                    return (
                      <motion.div
                        key={i}
                        className={`
                          w-full
                          aspect-square
                          rounded-sm
                          ${level}
                        `}

                        /* Fast appearance */
                        initial={{
                          opacity: 0,
                          scale: 0.25,
                          y: 8,
                        }}

                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}

                        viewport={{
                          once: true,
                        }}

                        transition={{
                          duration: 0.08,
                          delay: i * 0.004,
                          ease: 'easeOut',
                        }}

                        /* Hover Animation */
                        whileHover={{
                          scale: 1.35,
                          boxShadow:
                            '0 0 14px rgba(34,211,238,0.9)',
                          zIndex: 10,
                        }}
                      />
                    );
                  })}

                </div>


                {/* =========================
                    STATS
                ========================= */}
                <div className="space-y-4">


                  {/* Contributions */}
                  <motion.div
                    className="
                      flex
                      justify-between
                      items-center
                      border-b
                      border-gray-700
                      pb-3
                    "
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                    }}
                  >

                    <span className="text-gray-400 text-sm">
                      Contributions
                    </span>

                    <span className="text-cyan-400 font-mono font-bold">
                      300+
                    </span>

                  </motion.div>


                  {/* Repositories */}
                  <motion.div
                    className="
                      flex
                      justify-between
                      items-center
                      border-b
                      border-gray-700
                      pb-3
                    "
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.38,
                    }}
                  >

                    <span className="text-gray-400 text-sm">
                      Repositories
                    </span>

                    <span className="text-blue-400 font-mono font-bold">
                      5+
                    </span>

                  </motion.div>


                  {/* Learning */}
                  <motion.div
                    className="
                      flex
                      justify-between
                      items-center
                    "
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.46,
                    }}
                  >

                    <span className="text-gray-400 text-sm">
                      Learning
                    </span>

                    <span className="text-purple-400 font-mono font-bold">
                      AI/ML
                    </span>

                  </motion.div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}


/* ============================================================
   ACHIEVEMENT CARD
============================================================ */

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
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
      }}
      className={`
        p-5
        rounded-2xl
        border
        flex
        gap-4
        transition-all
        duration-300
        mb-4
        ${
          highlight
            ? 'bg-cyan-500/5 border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]'
            : 'bg-[#111827]/70 border-cyan-500/10'
        }
        hover:border-cyan-400/40
        hover:-translate-y-1
      `}
    >

      {/* ICON */}
      <div
        className="
          mt-1
          p-3
          rounded-full
          bg-black/30
          border
          border-cyan-500/10
          shrink-0
        "
      >
        {icon}
      </div>


      {/* CONTENT */}
      <div>

        <h4 className="font-semibold text-lg text-white mb-1">
          {title}
        </h4>

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-2
            gap-y-1
            text-sm
            text-gray-400
          "
        >

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