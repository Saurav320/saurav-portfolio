import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { ParticleBackground } from './ParticleBackground';

export function Hero() {
  const roles = [
    "AI/ML Developer",
    "Deep Learning Engineer",
    "Python Expert",
    "Neural Network Architect"
  ];
  
  const typedText = useTypingEffect(roles, 80, 40, 2000);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">
      <ParticleBackground />
      
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tight">
            Hi, I'm <span className="text-gradient block mt-2">Alex Mercer</span>
          </h1>
          
          <div className="h-12 md:h-16 mb-6">
            <h2 className="text-2xl md:text-4xl text-muted-foreground font-medium">
              {typedText}<span className="animate-pulse text-primary">|</span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Building intelligent systems that learn, adapt, and transform the world. 
            Passionate about turning complex data into actionable insights.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all hover:-translate-y-1" data-testid="button-download-resume">
              <Download size={20} />
              Download Resume
            </button>
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 border border-border bg-card/50 backdrop-blur font-medium rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all hover:-translate-y-1" data-testid="link-view-projects">
              View Projects
              <ArrowRight size={20} className="text-primary" />
            </a>
          </div>
          
          <div className="flex items-center gap-5">
            <SocialLink href="#" icon={<Github size={22} />} label="GitHub" />
            <SocialLink href="#" icon={<Linkedin size={22} />} label="LinkedIn" />
            <SocialLink href="#" icon={<Twitter size={22} />} label="Twitter" />
            <SocialLink href="#" icon={<Mail size={22} />} label="Email" />
          </div>
        </motion.div>
        
        <motion.div 
          className="relative lg:ml-auto w-full max-w-md aspect-square mx-auto lg:mx-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-20 blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="relative w-full h-full rounded-full border-2 border-primary/30 p-4">
            <div className="w-full h-full rounded-full overflow-hidden border border-border bg-card relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent z-10" />
              {/* Replace with actual image later */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Orbital accents */}
            <div className="absolute top-0 right-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,212,255,1)]" />
            <div className="absolute bottom-10 left-0 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(247,37,133,1)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      aria-label={label}
      className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
      data-testid={`social-link-${label.toLowerCase()}`}
    >
      {icon}
    </a>
  );
}
