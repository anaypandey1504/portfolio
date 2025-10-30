'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaLaptopCode, FaCode, FaChartLine, FaBullseye } from 'react-icons/fa'

const Experience = () => {
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  const experiences = [
    {
      id: 1,
      company: "FutureSmart AI",
      position: "GenAI Backend Intern",
      duration: "Jul 2025 – Present",
      location: "Remote",
      type: "Internship",
      description: "Developing cutting-edge RAG-based GenAI systems using LangChain and OpenAI API, focusing on performance optimization and accuracy enhancement.",
      achievements: [
        "Developed RAG-based GenAI systems with LangChain, OpenAI API, Qdrant (35% faster retrieval)",
        "Reduced multimodal input latency by 40% with async optimization",
        "Enhanced model accuracy by 28% with structured tuning",
        "Implemented advanced vector search algorithms for improved semantic matching"
      ],
      technologies: ["Python", "LangChain", "OpenAI API", "Qdrant", "FastAPI", "Docker"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      company: "Illuminati Innovation Pvt. Ltd.",
      position: "Frontend Development Intern",
      duration: "Jun 2025 – Aug 2025",
      location: "Remote",
      type: "Internship",
      description: "Built responsive and accessible frontend modules for SaaS platform Saaskart Lite Forge, focusing on performance optimization and user experience.",
      achievements: [
        "Built 15+ responsive modules for SaaS platform Saaskart Lite Forge",
        "Improved render speed by 20% using React memoization techniques",
        "Created animations and accessibility-first components",
        "Implemented responsive design patterns for mobile and desktop"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Figma", "Git"],
      color: "from-teal-500 to-green-500"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900"
    >
      {/* Background Elements */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent w-full h-full"></div>
      </motion.div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg"
            >
              <FaLaptopCode className="text-3xl text-white" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Experience
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              My professional journey and work experience
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500/30 to-purple-500/30 transform -translate-x-1/2"></div>
            
            {/* Experience Items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute top-6 ${index % 2 === 0 ? '-right-3' : '-left-3'} w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} shadow-lg flex items-center justify-center z-10`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Experience Card */}
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-12' : 'ml-12'}`}>
                    <div className="glass-card p-6 h-full">
                      {/* Company & Duration */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                          <p className="text-blue-300 font-medium">{exp.position}</p>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      
                      {/* Duration & Location */}
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <FaCalendarAlt className="mr-2 text-indigo-400" />
                        <span className="mr-4">{exp.duration}</span>
                        <FaMapMarkerAlt className="mr-1.5 text-indigo-400" />
                        <span>{exp.location}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <FaCode className="mr-2 text-indigo-400" />
                          Key Achievements:
                        </h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li 
                              key={achIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 mr-3 mt-0.5 flex-shrink-0">
                                <span className="text-xs font-bold">{achIndex + 1}</span>
                              </span>
                              <span className="text-gray-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="pt-4 border-t border-white/5">
                        <h5 className="text-sm text-gray-400 mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              className="px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              { value: '2', label: 'Companies', sublabel: 'Worked With', icon: <FaBriefcase className="text-2xl" /> },
              { value: '15+', label: 'Projects', sublabel: 'Completed', icon: <FaCode className="text-2xl" /> },
              { value: '40%', label: 'Performance', sublabel: 'Improvement', icon: <FaChartLine className="text-2xl" /> },
              { value: '28%', label: 'Accuracy', sublabel: 'Enhancement', icon: <FaBullseye className="text-2xl" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600/20 to-indigo-600/40 rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-400">
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold text-white text-center mb-2">{stat.value}</h4>
                <p className="text-indigo-300 text-center font-medium">{stat.label}</p>
                <p className="text-xs text-gray-400 text-center mt-1">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-20 top-1/4 w-60 h-60 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -left-20 bottom-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}

// Global styles for the experience section
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
  
  .skill-badge {
    background: rgba(79, 70, 229, 0.1);
    color: #818cf8;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid rgba(99, 102, 241, 0.2);
    transition: all 0.2s;
  }
  
  .skill-badge:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: translateY(-2px);
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

export default Experience
