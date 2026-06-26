import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Kushal Yuva Program (KYP)",
    issuer: "Bihar Skill Development Mission (BSDM)",
    date: "25 April 2023",
    description:
      "Successfully completed BS-CIT, BS-CLS and BS-CSS under the Kushal Yuva Program (KYP).",
    image: "/certificates/kyp-preview.jpg", // Preview image
    verify: "/certificates/KYP-Certificate.pdf", // PDF
  },
];

export function Certificates() {
  return (
    <section
      id="certificates"
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
            Certificates
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]" />
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#111827]/70 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
            >
              <div className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {certificate.title}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 mt-4">
                  {certificate.description}
                </p>

                <p className="text-sm text-gray-500 mt-4">
                  Issued: {certificate.date}
                </p>

                <a
                  href={certificate.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 transition"
                >
                  <Award size={18} />
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}