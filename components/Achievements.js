'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaTrophy, FaMedal, FaAward, FaCalendarAlt,
  FaGraduationCap, FaBrain
} from 'react-icons/fa'
import { SiNvidia } from 'react-icons/si'

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

// ✅ renamed from `item` → `cardVariant`
const cardVariant = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6 }
  }
}

export default function Achievements() {

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef })
  useTransform(scrollYProgress, [0,1], [0,100])

  const achievements = [
    {
      id: 1,
      title: "2nd Rank - AI Demos Hackathon",
      description: "Ranked 2nd among 500+ participants with 1022 community votes.",
      type: "Hackathon",
      date: "2024",
      icon: FaTrophy,
      bgColor: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
    },
    {
      id: 2,
      title: "1st Rank - Scenario Showdown",
      description: "Won scenario-based tech competition at IIITV-ICD Horizon.",
      type: "TechFest",
      date: "2024",
      icon: FaMedal,
      bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-600/20",
      borderColor: "border-amber-500/30",
    },
    {
      id: 3,
      title: "Google Developer Student Club Core Member",
      description: "Core tech mentor & event organizer at GDSC IIITV-ICD.",
      type: "Leadership",
      date: "2023-2024",
      icon: FaBrain,
      bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-700/20",
      borderColor: "border-blue-500/30",
    }
  ]

  const certifications = [
    {
      id: 1,
      title: "Executive PG in Data Science & AI",
      institution: "IIT Roorkee & Intellipaat",
      icon: FaGraduationCap,
      description: "Advanced program in AI & Data Science.",
      date: "2024",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      title: "NVIDIA Deep Learning Certification",
      institution: "NVIDIA DLI",
      icon: SiNvidia,
      description: "Deep learning fundamentals & GPU workflows.",
      date: "2024",
      bgColor: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    },
    
  ]

  return (
    <section id="achievements" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-20">
        <motion.div variants={cardVariant} className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl mb-6">
          <FaAward className="text-3xl text-white" />
        </motion.div>
        <motion.h2 variants={cardVariant} className="text-4xl font-bold text-white">
          Achievements & Certifications
        </motion.h2>
        <motion.p variants={cardVariant} className="text-gray-300 max-w-2xl mx-auto mt-3">
          A track record of excellence, innovation & leadership
        </motion.p>
      </motion.div>

      <div className="container mx-auto px-6">

        {/* Awards */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-2xl text-white font-bold mb-8 text-center">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map(a => (
              <motion.div 
                key={a.id} 
                variants={cardVariant} 
                whileHover={{ y: -8 }} 
                className={`p-6 rounded-2xl border ${a.borderColor} glass-card`}
              >
                <div className={`w-12 h-12 ${a.bgColor} flex items-center justify-center rounded-xl mb-4`}>
                  <a.icon className="text-xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">{a.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{a.description}</p>
                <div className="border-t border-gray-700 mt-4 pt-3 flex items-center text-gray-400 text-sm">
                  <FaCalendarAlt className="mr-2" /> {a.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-24">
          <h3 className="text-2xl text-white font-bold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map(cert => (
              <motion.div 
                key={cert.id} 
                variants={cardVariant} 
                whileHover={{ y: -8 }} 
                className={`p-6 rounded-2xl border ${cert.borderColor} glass-card`}
              >
                <div className={`w-12 h-12 ${cert.bgColor} flex items-center justify-center rounded-xl mb-4`}>
                  <cert.icon className="text-xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                <p className="text-blue-300 text-sm">{cert.institution}</p>
                <p className="text-gray-300 text-sm mt-2">{cert.description}</p>
                <div className="border-t border-gray-700 mt-4 pt-3 flex items-center text-gray-400 text-sm">
                  <FaCalendarAlt className="mr-2" /> {cert.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
