import { motion } from "framer-motion";
import { Certificates } from "../components/Certificates";

const CertificatesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-center">
              All <span className="text-cyan-400">Certificates</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <Certificates showAll />
    </main>
  );
};

export default CertificatesPage;