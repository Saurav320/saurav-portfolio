import { motion } from "framer-motion";
import { Projects } from "../components/Projects";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">All </span>
              <span className="text-cyan-400">Projects</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
              Explore my complete collection of web development, AI,
              Machine Learning, and frontend projects built using modern
              technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <Projects showAll />
    </main>
  );
};

export default ProjectsPage;