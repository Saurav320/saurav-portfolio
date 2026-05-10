import { motion } from 'framer-motion';
import { Award, Trophy, GitCommit, BookOpen, Star, Code2, Cpu } from 'lucide-react';

export function Achievements() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="achievements" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold inline-block relative">
            Milestones & Achievements
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary neon-border rounded-full" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Certifications */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-primary" size={28} />
              <h3 className="text-2xl font-heading font-bold">Certifications</h3>
            </div>
            
            <AchievementCard 
              icon={<Star size={20} className="text-yellow-400" />}
              title="TensorFlow Developer Certificate"
              subtitle="Google"
              date="2023"
            />
            <AchievementCard 
              icon={<BookOpen size={20} className="text-primary" />}
              title="Machine Learning Specialization"
              subtitle="Coursera / Stanford"
              date="2022"
            />
            <AchievementCard 
              icon={<Cpu size={20} className="text-secondary" />}
              title="Deep Learning Specialization"
              subtitle="deeplearning.ai"
              date="2022"
            />
            <AchievementCard 
              icon={<Code2 size={20} className="text-accent" />}
              title="Google Cloud ML Engineer"
              subtitle="Google Cloud"
              date="2024"
            />
          </motion.div>

          {/* Hackathons */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:mt-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-secondary" size={28} />
              <h3 className="text-2xl font-heading font-bold">Hackathons</h3>
            </div>
            
            <AchievementCard 
              icon={<Trophy size={20} className="text-yellow-400" />}
              title="AI Hackathon 2024"
              subtitle="Top 10 Finalist"
              date="2024"
              highlight
            />
            <AchievementCard 
              icon={<Trophy size={20} className="text-gray-300" />}
              title="ML Challenge 2023"
              subtitle="Best Innovation Award"
              date="2023"
            />
            <AchievementCard 
              icon={<Trophy size={20} className="text-yellow-600" />}
              title="National Coding Sprint"
              subtitle="1st Place"
              date="2022"
            />
          </motion.div>

          {/* Learning Journey */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:mt-24"
          >
            <div className="flex items-center gap-3 mb-4">
              <GitCommit className="text-accent" size={28} />
              <h3 className="text-2xl font-heading font-bold">Journey</h3>
            </div>
            
            <div className="glass-panel p-6 rounded-xl border border-border">
              <div className="grid grid-cols-7 gap-1 mb-4 opacity-70">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-full aspect-square rounded-sm ${Math.random() > 0.5 ? 'bg-primary' : Math.random() > 0.3 ? 'bg-primary/50' : 'bg-muted'}`}
                  />
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-muted-foreground text-sm">Contributions</span>
                  <span className="text-primary font-mono font-bold">500+</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-muted-foreground text-sm">Repositories</span>
                  <span className="text-secondary font-mono font-bold">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">ML Research</span>
                  <span className="text-accent font-mono font-bold">2+ Years</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function AchievementCard({ icon, title, subtitle, date, highlight = false }: { icon: React.ReactNode, title: string, subtitle: string, date: string, highlight?: boolean }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className={`p-5 rounded-xl border flex gap-4 ${highlight ? 'bg-primary/5 border-primary/30 shadow-[0_0_15px_rgba(0,212,255,0.1)]' : 'glass-panel border-border/50'} hover:border-primary/50 transition-colors group`}
    >
      <div className="mt-1 p-2 rounded-full bg-card border border-border group-hover:border-primary/50 transition-colors shrink-0 h-min">
        {icon}
      </div>
      <div>
        <h4 className="font-heading font-semibold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">{title}</h4>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span>{subtitle}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span className="font-mono text-xs">{date}</span>
        </div>
      </div>
    </motion.div>
  );
}
