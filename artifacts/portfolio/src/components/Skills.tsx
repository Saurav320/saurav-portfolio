import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold inline-block relative">
            Technical Arsenal
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-secondary neon-border rounded-full" />
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={skill.name} 
                variants={item}
                className="glass-panel glass-panel-hover p-6 rounded-xl flex flex-col"
                data-testid={`skill-card-${skill.name.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-background border border-border text-primary">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground border border-border">
                    {skill.category}
                  </span>
                </div>
                
                <h3 className="font-heading font-semibold text-lg mb-4">{skill.name}</h3>
                
                <div className="mt-auto">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
