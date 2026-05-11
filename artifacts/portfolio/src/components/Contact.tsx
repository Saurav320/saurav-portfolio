import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  Loader2
} from 'lucide-react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { toast } from 'sonner';

/* =========================
   FORM VALIDATION
========================= */

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(5, "Subject is too short"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/* =========================
   MAIN COMPONENT
========================= */

export function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Data:", data);

    toast.success("Message Sent Successfully 🚀");

    reset();

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-background overflow-hidden"
    >

      <div className="container mx-auto px-4">

        {/* HEADING */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
            Contact Me

            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]" />
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

          {/* LEFT SIDE */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="rounded-3xl border border-cyan-500/10 bg-[#111827]/70 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)]">

              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Let’s Build Something Amazing 🚀
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                I’m currently open for collaborations, AI/ML projects,
                frontend development and creative futuristic web experiences.
              </p>

              <div className="space-y-5">

                <ContactCard
                  icon={<Mail size={22} />}
                  title="Email"
                  value="saurav@example.com"
                  href="mailto:saurav@example.com"
                />

                <ContactCard
                  icon={<Github size={22} />}
                  title="GitHub"
                  value="github.com/Saurav320"
                  href="https://github.com/Saurav320"
                />

                <ContactCard
                  icon={<Linkedin size={22} />}
                  title="LinkedIn"
                  value="linkedin.com/in/saurav"
                  href="https://www.linkedin.com/in/saurav"
                />

                <ContactCard
                  icon={<Instagram size={22} />}
                  title="Instagram"
                  value="@sk.devhub_12"
                  href="https://www.instagram.com/sk.devhub_12/?hl=en"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="rounded-3xl border border-cyan-500/10 bg-[#111827]/70 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)]">

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >

                {/* NAME + EMAIL */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Name
                    </label>

                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-700 focus:border-cyan-400 outline-none text-white"
                    />

                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      {...register("email")}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-700 focus:border-cyan-400 outline-none text-white"
                    />

                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* SUBJECT */}
                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    {...register("subject")}
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-700 focus:border-cyan-400 outline-none text-white"
                  />

                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    {...register("message")}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-700 focus:border-cyan-400 outline-none resize-none text-white"
                  />

                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-[1.02] transition duration-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] disabled:opacity-60"
                >

                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send size={20} />
                      Send Message
                    </div>
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

/* =========================
   CONTACT CARD
========================= */

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 p-4 rounded-2xl border border-gray-700 hover:border-cyan-400 hover:bg-cyan-500/5 transition duration-300 group"
    >

      <div className="p-3 rounded-full bg-black/30 border border-gray-700 text-cyan-400 group-hover:scale-110 transition">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">
          {title}
        </p>

        <p className="text-white group-hover:text-cyan-400 transition">
          {value}
        </p>
      </div>
    </a>
  );
}