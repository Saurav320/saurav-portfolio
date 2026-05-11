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
    "AI/ML Developer",
    "Python Developer",
    "React Developer",
    "Machine Learning Enthusiast"
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
            🚀 Open For Opportunities
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
              href="#"
              icon={<Linkedin size={22} />}
              label="LinkedIn"
            />

            <SocialLink
              href="#"
              icon={<Instagram size={22} />}
              label="Instagram"
            />

            <SocialLink
              href="mailto:example@gmail.com"
              icon={<Mail size={22} />}
              label="Email"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="relative lg:ml-auto w-full max-w-md aspect-square mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-3xl animate-pulse" />

          {/* Image Container */}
          <div className="relative w-full h-full rounded-full border border-cyan-400/30 p-4 backdrop-blur-xl">

            <div className="w-full h-full rounded-full overflow-hidden border border-gray-700 bg-[#111827]">

              <img
                src="/my_image.jpeg"
                alt="Saurav Kumar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>

            {/* Floating Dots */}
            <div className="absolute top-10 right-5 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] animate-bounce" />

            <div className="absolute bottom-10 left-5 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,1)] animate-ping" />
          </div>
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