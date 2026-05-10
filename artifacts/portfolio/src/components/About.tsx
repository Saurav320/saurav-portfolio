import { motion } from 'framer-motion';
import { Terminal, GraduationCap, Award, GitMerge } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary neon-border rounded-full" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Terminal / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="glass-panel rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 text-xs text-muted-foreground font-mono">alex_mercer.py</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-foreground">
                <p><span className="text-secondary">class</span> <span className="text-accent font-bold">Developer</span>:</p>
                <p className="pl-4"><span className="text-secondary">def</span> <span className="text-primary">__init__</span>(<span className="text-orange-400">self</span>):</p>
                <p className="pl-8 text-muted-foreground"># Core attributes</p>
                <p className="pl-8"><span className="text-orange-400">self</span>.name = <span className="text-green-400">"Alex Mercer"</span></p>
                <p className="pl-8"><span className="text-orange-400">self</span>.role = <span className="text-green-400">"AI/ML Engineer"</span></p>
                <p className="pl-8"><span className="text-orange-400">self</span>.focus = [<span className="text-green-400">"Deep Learning"</span>, <span className="text-green-400">"NLP"</span>, <span className="text-green-400">"CV"</span>]</p>
                <br/>
                <p className="pl-4"><span className="text-secondary">def</span> <span className="text-primary">execute_mission</span>(<span className="text-orange-400">self</span>):</p>
                <p className="pl-8"><span className="text-secondary">return</span> <span className="text-green-400">"Build intelligent systems that solve real-world problems."</span></p>
                <br/>
                <p className="text-foreground animate-pulse">_</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate AI/ML developer with expertise in deep learning, computer vision, and natural language processing. 
              Currently exploring the boundaries of neural networks and looking for opportunities to deploy models in production environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fascinated by the intersection of AI and human experience, I strive to build ethical, efficient, and scalable machine learning solutions.
            </p>

            <div className="flex items-start gap-4 mb-8 p-4 rounded-lg bg-card border border-border">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg">M.S. in Computer Science</h4>
                <p className="text-muted-foreground text-sm">Stanford University • 2021 - 2023</p>
                <p className="text-sm mt-1">Focus: Artificial Intelligence & Machine Learning</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard icon={<Terminal size={20} />} value="15+" label="Projects" />
              <StatCard icon={<Award size={20} />} value="5+" label="Certifications" />
              <StatCard icon={<GitMerge size={20} />} value="500+" label="Commits" />
              <StatCard icon={<GraduationCap size={20} />} value="3+" label="Publications" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 glass-panel rounded-lg border-border/50 text-center hover:border-primary/50 transition-colors">
      <div className="text-primary mb-2">{icon}</div>
      <div className="font-heading font-bold text-2xl text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}
