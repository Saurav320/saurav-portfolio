import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-heading font-bold text-gradient mb-2">ALEX.AI</h2>
            <p className="text-muted-foreground max-w-xs">
              Building intelligent systems that learn, adapt, and transform the world.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <SocialIcon href="#" icon={<Github size={20} />} label="GitHub" />
            <SocialIcon href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialIcon href="#" icon={<Twitter size={20} />} label="Twitter" />
            <SocialIcon href="#" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Alex Mercer. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & <span className="text-accent animate-pulse">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,212,255,0.3)]"
      data-testid={`footer-social-${label.toLowerCase()}`}
    >
      {icon}
    </a>
  );
}
