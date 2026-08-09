import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  ArrowRight
} from 'lucide-react';

import { useTypingEffect } from '@/hooks/useTypingEffect';
import { ParticleBackground } from './ParticleBackground';

export function Hero() {
  const roles = [
    "Self-Taught Developer",
    "Python Learner",
    "React Enthusiast",
    "Exploring Machine Learning"
  ];

  const typedText = useTypingEffect(roles, 80, 40, 2000);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
    >
      <ParticleBackground />

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          className="flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm font-medium backdrop-blur">
            🚀 Building Projects & Learning
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent block mt-2">
              Saurav Kumar
            </span>
          </h1>

          {/* Typing Effect */}
          <div className="h-14 mb-6">
            <h2 className="text-2xl md:text-4xl text-gray-300 font-medium">
              {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-8">
            Passionate AI & Web Developer from India building futuristic
            projects using Python, React, JavaScript and Machine Learning.
            I love creating modern interfaces and intelligent systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">

            <button className="flex items-center gap-2 px-7 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(34,211,238,0.5)]">
              <Download size={20} />
              Download Resume
            </button>

            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3 rounded-xl border border-gray-700 bg-[#111827]/60 backdrop-blur hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
            >
              View Projects
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <SocialLink
              href="https://github.com/Saurav320"
              icon={<Github size={22} />}
              label="GitHub"
            />

            <SocialLink
              href="https://www.linkedin.com/in/saurav-kumar-122835332/"
              icon={<Linkedin size={22} />}
              label="LinkedIn"
            />

            <SocialLink
              href="https://www.instagram.com/sk.devhub_12/?hl=en"
              icon={<Instagram size={22} />}
              label="Instagram"
            />

            <SocialLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saurav456skk@gmail.com&su=Portfolio%20Contact"
              icon={<Mail size={22} />}
              label="Email"
            />
          </div>
        </motion.div>

      {/* RIGHT SIDE IMAGE */}
<motion.div
  className="relative lg:ml-auto w-full max-w-md mx-auto pb-16"
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* IMAGE / ORBIT AREA */}
  <div className="relative aspect-square w-full">

    {/* Soft Outer Glow */}
    <motion.div
      className="absolute inset-4 rounded-full bg-cyan-400/10 blur-3xl"
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Horizontal Orbit */}
    <motion.div
      className="absolute left-[-5%] top-1/2 w-[110%] h-32 rounded-[50%] border border-cyan-400/20"
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Vertical Orbit */}
    <motion.div
      className="absolute left-1/2 top-[5%] w-32 h-[90%] rounded-[50%] border border-blue-400/10"
      animate={{ rotate: -360 }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Main Photo */}
    <motion.div
      className="absolute inset-5 rounded-full"
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Outer Cyan Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />

      {/* Inner Ring */}
      <div className="absolute inset-3 rounded-full border border-cyan-400/20" />

      {/* Actual Image */}
      <div className="absolute inset-4 rounded-full overflow-hidden bg-[#071522]">
        <img
          src="/my_image.jpeg"
          alt="Saurav Kumar"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

    {/* Cyan Dot */}
    <motion.div
      className="absolute top-[17%] right-[6%] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)]"
      animate={{
        y: [-8, 8, -8],
        x: [0, 4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Purple Dot */}
    <motion.div
      className="absolute bottom-[20%] left-[7%] w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)]"
      animate={{
        y: [8, -8, 8],
        x: [0, -4, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Small Blue Dot */}
    <motion.div
      className="absolute top-[10%] left-[20%] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,1)]"
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.3, 0.8],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>

  {/* Availability */}
  <motion.div
    className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-[#071522]/95 backdrop-blur-xl whitespace-nowrap"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
    </span>

    <span className="text-sm text-gray-400">
      Available for learning &amp; collaboration
    </span>
  </motion.div>
</motion.div>
      </div>
    </section>
  );
}

/* SOCIAL COMPONENT */

function SocialLink({
  href,
  icon,
  label
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-3 rounded-full border border-gray-700 bg-[#111827]/70 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition duration-300"
    >
      {icon}
    </a>
  );
}