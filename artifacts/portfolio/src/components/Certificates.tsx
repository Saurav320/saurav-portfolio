import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface CertificatesProps {
  showAll?: boolean;
}

const certificates = [
  {
    id: 1,
    title: "AI & Data Science Using Python",
    issuer:
      "C-DAC Patna (Ministry of Electronics & Information Technology, Government of India)",
    date: "15 May 2026",
    description:
      "Successfully completed the AI & Data Science Using Python Training-cum-Internship conducted by C-DAC Patna with Grade A+. Gained practical knowledge in Python programming, data science fundamentals, machine learning concepts, data analysis, and AI applications through hands-on training.",
    skills: [
      "Python",
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analysis",
      "Problem Solving",
    ],
    image: "/certificates/cdac-preview.jpg",
    verify: "/certificates/CDAC-AI-Data-Science-Certificate.pdf",
  },

  {
    id: 2,
    title: "Paranox 2.0",
    issuer: "TechXNinjas",
    date: "16 November 2025",
    description:
      "Participated in Paranox 2.0, a 3-month National Level Innovation Hackathon focused on innovation, teamwork, and real-world project development.",
    skills: [
      "Innovation",
      "Hackathon",
      "Teamwork",
      "Problem Solving",
    ],
    image: "/certificates/paranox-preview.jpg",
    verify: "/certificates/Paranox-Certificate.pdf",
  },

  {
    id: 3,
    title: "Certificate of Participation",
    issuer: "Unstop × TechXNinjas",
    date: "16 November 2025",
    description:
      "Received a Certificate of Participation for successfully participating in Paranox 2.0, a National Level Innovation Hackathon hosted on Unstop and organized by TechXNinjas. Demonstrated teamwork, innovation, and problem-solving skills through collaborative project development.",
    skills: [
      "Innovation",
      "Hackathon",
      "Teamwork",
      "Problem Solving",
      "Project Development",
    ],
    image: "/certificates/unstop-preview.jpg",
    verify: "/certificates/Unstop-Certificate.pdf",
  },

  {
    id: 4,
    title: "Kushal Yuva Program (KYP)",
    issuer: "Bihar Skill Development Mission (BSDM)",
    date: "25 April 2023",
    description:
      "Successfully completed BS-CIT, BS-CLS, and BS-CSS under the Kushal Yuva Program (KYP), gaining computer literacy, communication, digital proficiency, and workplace soft skills.",
    skills: [
      "Computer Literacy",
      "Communication",
      "Soft Skills",
      "Digital Skills",
    ],
    image: "/certificates/kyp-preview.jpg",
    verify: "/certificates/KYP-Certificate.pdf",
  },
];

export function Certificates({
  showAll = false,
}: CertificatesProps) {
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

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {(showAll
            ? certificates
            : certificates.slice(0, 2)
          ).map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group relative rounded-3xl overflow-hidden border border-cyan-500/10 bg-[#111827]/70 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition">
                  {certificate.title}
                </h3>

                <p className="text-cyan-400 text-sm font-medium">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 leading-relaxed mt-4">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6 mb-6">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center border-t border-gray-700 pt-4">

                  <span className="text-gray-500 text-sm">
                    {certificate.date}
                  </span>

                  <a
                    href={certificate.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 ml-auto text-gray-300 hover:text-cyan-400 transition"
                  >
                    <Award size={18} />
                    View Certificate
                    <ExternalLink size={18} />
                  </a>

                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Certificates Button */}
      {!showAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-14"
        >
          <Link
            to="/certificates"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
          >
            <span className="relative z-10">
              View All Certificates
            </span>

            <ExternalLink
              size={20}
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            />

            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
      )}
    </section>
  );
}