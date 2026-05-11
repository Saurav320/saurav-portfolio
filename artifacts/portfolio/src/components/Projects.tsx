import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "FaceRatingAI",
    description:
      "AI powered face rating web application built using Python, TensorFlow and Deep Learning models with modern futuristic UI.",
    imageUrl:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "TensorFlow", "AI", "React"],
    githubUrl: "https://github.com/Saurav320/FaceRatingAI",
    liveUrl: "https://huggingface.co/spaces/Saurav-12/Face-Rating",
  },

  {
    id: 2,
    title: "Spam Email Detector",
    description:
      "Machine learning based spam email detection system that classifies emails as spam or safe using NLP techniques.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "ML", "NLP", "Flask"],
    githubUrl: "https://github.com/Saurav320/spam-email-detector",
    liveUrl: "#",
  },

  {
    id: 3,
    title: "Cybernetic Portfolio",
    description:
      "Modern futuristic portfolio website with cyberpunk UI, animations and responsive design using React and Tailwind.",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    techStack: ["React", "Tailwind", "Vite", "JavaScript"],
    githubUrl: "https://github.com/Saurav320/Saurav320",
    liveUrl: "#",
  },

  {
    id: 4,
    title: "Analog Clock",
    description:
      "Beautiful animated analog clock created using HTML, CSS and JavaScript with clean responsive UI.",
    imageUrl:
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1200&auto=format&fit=crop",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Saurav320/analog-clock",
    liveUrl: "#",
  },

  {
    id: 5,
    title: "Smart Calculator",
    description:
      "Responsive modern calculator project with futuristic interface and smooth button animations.",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    techStack: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Saurav320/calculator",
    liveUrl: "#",
  },

  {
    id: 6,
    title: "Birthday Website",
    description:
      "Creative birthday surprise website with animations, effects and interactive design elements.",
    imageUrl:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1200&auto=format&fit=crop",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Saurav320/birthday",
    liveUrl: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
            Featured Projects

            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]" />
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden border border-cyan-500/10 bg-[#111827]/70 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 border-t border-gray-700 pt-4">

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                  >
                    <Github size={18} />
                    Source Code
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 ml-auto text-gray-300 hover:text-purple-400 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}