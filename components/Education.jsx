'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBookOpen } from 'react-icons/fa'

const Education = () => {
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 1])

  const educationData = {
    institution: "Indian Institute of Information Technology Vadodara – ICD",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2022 – 2026",
    location: "Vadodara, Gujarat, India",
    description: "Pursuing comprehensive education in computer science with focus on artificial intelligence, machine learning, and full-stack development.",
    highlights: [
      "Specialization in Generative AI and Machine Learning",
      "Active participation in tech fests and hackathons",
      "Strong foundation in algorithms and data structures",
      "Hands-on experience with modern development frameworks"
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Elements */}
      <motion.div 
        style={{ y: yBg, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent w-full h-full"></div>
      </motion.div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          style={{ y: yText }}
          className="relative z-10 text-center mb-16"
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                type: 'spring',
                damping: 10,
                stiffness: 100
              }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl shadow-blue-500/20"
            >
              <FaGraduationCap className="text-2xl md:text-3xl text-white" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 font-poppins"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Education
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Building a strong foundation in computer science and technology
            </motion.p>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card group p-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-500/20">
                  {educationData.duration}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                {educationData.institution}
              </h3>
              
              <p className="text-base sm:text-lg font-medium text-blue-100 mb-4">
                {educationData.degree}
              </p>
              
              <div className="flex items-center text-sm sm:text-base text-gray-300 mb-6">
                <FaMapMarkerAlt className="mr-2 text-blue-400 flex-shrink-0" />
                <span>{educationData.location}</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                {educationData.description}
              </p>
              
              <div className="mt-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                  Key Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {educationData.highlights.map((highlight, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: 0.4 + (index * 0.1),
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      }}
                      viewport={{ once: true, margin: "-30px" }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-blue-400 mr-2.5 mt-1 text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </span>
                      <span className="text-gray-300 text-sm sm:text-base">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg mt-8"
              />
              <p className="text-xs text-gray-400 text-right mt-2">Expected graduation: 2026</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-blue-600/40 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaBookOpen className="text-2xl text-blue-400" />
            </div>
            <h4 className="text-xl font-semibold text-white text-center mb-2">Specialization</h4>
            <p className="text-blue-300 text-center font-medium">Generative AI & ML</p>
            <div className="mt-4 flex justify-center space-x-2">
              {['AI', 'ML', 'DL', 'NLP'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600/20 to-purple-600/40 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-2xl text-purple-400" />
            </div>
            <h4 className="text-xl font-semibold text-white text-center mb-2">Graduation</h4>
            <p className="text-purple-300 text-center font-medium">Expected 2026</p>
            <div className="w-full bg-gray-700/50 rounded-full h-2 mt-6">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-3/4"></div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">3 of 4 years completed</p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-20 top-1/3 w-60 h-60 bg-purple-500/10 rounded-full filter blur-3xl"></div>
    </section>
  )
}

// Global styles for the education section
const styles = `
  .glass-card {
    background: rgba(15, 23, 42, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -10px rgba(79, 70, 229, 0.3);
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .floating {
    animation: float 6s ease-in-out infinite;
  }
`

// Add styles to the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = styles
  document.head.appendChild(styleElement)
}

export default Education
