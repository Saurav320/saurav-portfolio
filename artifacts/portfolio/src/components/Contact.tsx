import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold inline-block relative">
            Initiate Contact
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary neon-border rounded-full" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-8 rounded-2xl border-border/50">
              <h3 className="text-2xl font-heading font-bold mb-6 text-gradient">Let's build the future together.</h3>
              <p className="text-muted-foreground mb-8">
                Currently open to new opportunities, collaborations, and interesting projects in the AI/ML space.
              </p>
              
              <div className="space-y-6">
                <ContactCard 
                  icon={<Mail size={24} />} 
                  title="Email" 
                  value="alex.mercer@example.com" 
                  href="mailto:alex.mercer@example.com"
                />
                <ContactCard 
                  icon={<Linkedin size={24} />} 
                  title="LinkedIn" 
                  value="linkedin.com/in/alexmercer" 
                  href="#"
                />
                <ContactCard 
                  icon={<Github size={24} />} 
                  title="GitHub" 
                  value="github.com/alexmercer" 
                  href="#"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-panel p-8 rounded-2xl border-border/50">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      {...register("name")}
                      className={`w-full bg-card/50 border ${errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-border focus:border-primary focus:ring-primary/20'} rounded-lg px-4 py-3 outline-none focus:ring-4 transition-all`}
                      placeholder="John Doe"
                      data-testid="input-contact-name"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      {...register("email")}
                      className={`w-full bg-card/50 border ${errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-border focus:border-primary focus:ring-primary/20'} rounded-lg px-4 py-3 outline-none focus:ring-4 transition-all`}
                      placeholder="john@example.com"
                      data-testid="input-contact-email"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-muted-foreground">Subject</label>
                  <input 
                    id="subject"
                    type="text" 
                    {...register("subject")}
                    className={`w-full bg-card/50 border ${errors.subject ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-border focus:border-secondary focus:ring-secondary/20'} rounded-lg px-4 py-3 outline-none focus:ring-4 transition-all`}
                    placeholder="Project Inquiry"
                    data-testid="input-contact-subject"
                  />
                  {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    {...register("message")}
                    className={`w-full bg-card/50 border ${errors.message ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-border focus:border-accent focus:ring-accent/20'} rounded-lg px-4 py-3 outline-none focus:ring-4 transition-all resize-none`}
                    placeholder="Hello, I'd like to discuss..."
                    data-testid="input-contact-message"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Transmission
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) {
  return (
    <a 
      href={href} 
      target={href.startsWith('mailto') ? '_self' : '_blank'} 
      rel="noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-colors group"
      data-testid={`contact-card-${title.toLowerCase()}`}
    >
      <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors text-muted-foreground">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-medium group-hover:text-primary transition-colors">{value}</p>
      </div>
    </a>
  );
}
