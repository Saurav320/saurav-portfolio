import {
  Github,
  Linkedin,
  Instagram,
  Mail
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-cyan-500/10 pt-16 pb-8 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/10 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10">

          {/* LEFT */}
          <div className="text-center md:text-left">

            <h2 className="text-3xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
              SAURAV://AI
            </h2>

            <p className="text-gray-400 max-w-sm leading-relaxed">
              Building futuristic AI systems, modern web experiences and
              intelligent applications using React, Python and Machine Learning.
            </p>
          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">

            <SocialIcon
              href="https://github.com/Saurav320"
              icon={<Github size={20} />}
              label="GitHub"
            />

            <SocialIcon
              href="#"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />

            <SocialIcon
              href="#"
              icon={<Instagram size={20} />}
              label="Instagram"
            />

            <SocialIcon
              href="mailto:saurav@example.com"
              icon={<Mail size={20} />}
              label="Email"
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-cyan-500/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Saurav Kumar. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with React, TypeScript &

            <span className="text-cyan-400 animate-pulse">
              ❤️
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
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
      className="p-3 rounded-full bg-[#111827]/70 border border-cyan-500/10 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}