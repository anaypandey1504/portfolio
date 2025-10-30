'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaRocket, 
  FaBrain, 
  FaDatabase,
  FaLayerGroup,
  FaSearch,
  FaServer,
  FaLightbulb,
  FaArrowRight,
  FaTimes
} from 'react-icons/fa'
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiFastapi, SiDocker, SiRedis, SiTailwindcss } from 'react-icons/si'

const Projects = () => {
  const sectionRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  
  const projects = [
    {
      id: 1,
      title: "Multimodal RAG System",
      description: "Advanced Retrieval-Augmented Generation system that processes multiple data types including text, images, and documents for intelligent question answering.",
      longDescription: "Built a sophisticated RAG system using LangChain and FAISS for efficient vector storage and retrieval. The system processes multimodal inputs and provides accurate, context-aware responses by combining retrieval and generation techniques.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "LangChain", "FAISS", "Streamlit", "OpenAI API", "Pinecone"],
      github: "https://github.com/anaypandey1504/multimodal-rag",
      live: "#",
      features: [
        "Multimodal data processing (text, images, PDFs)",
        "Advanced vector search with FAISS",
        "Real-time question answering",
        "Interactive Streamlit interface",
        "Context-aware response generation"
      ],
      icon: FaBrain,
      color: "from-purple-500 to-pink-500",
      category: "AI/ML",
      techIcons: [
        { icon: SiPython, name: "Python" },
        { icon: FaBrain, name: "LangChain" },
        { icon: FaSearch, name: "FAISS" },
        { icon: SiReact, name: "Streamlit" }
      ]
    },
    {
      id: 2,
      title: "UINest - SaaS Platform",
      description: "Comprehensive SaaS platform for UI component management with drag-and-drop interface, real-time collaboration, and version control.",
      longDescription: "Developed a full-stack SaaS platform using React.js and Node.js with MongoDB for data persistence. Features include component library management, team collaboration tools, and automated deployment pipelines.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Socket.io"],
      github: "https://github.com/anaypandey1504/UINest",
      live: "#",
      features: [
        "Drag-and-drop component builder",
        "Real-time collaboration",
        "Component version control",
        "Team management system",
        "Automated deployment"
      ],
      icon: FaRocket,
      color: "from-blue-500 to-cyan-500",
      category: "Full-Stack",
      techIcons: [
        { icon: SiReact, name: "React" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiTailwindcss, name: "Tailwind" }
      ]
    },
    {
      id: 3,
      title: "LLM Semantic Query Engine",
      description: "High-performance semantic search engine powered by Large Language Models with advanced query processing and intelligent ranking algorithms.",
      longDescription: "Built a semantic query engine using FastAPI and Gemini API with Pinecone for vector storage. The system provides intelligent search capabilities with natural language processing and context understanding.",
      image: "/api/placeholder/600/400",
      technologies: ["FastAPI", "Gemini API", "Pinecone", "Python", "Docker", "Redis"],
      github: "https://github.com/anaypandey1504/semantic-query-engine",
      live: "#",
      features: [
        "Natural language query processing",
        "Semantic similarity matching",
        "Intelligent ranking algorithms",
        "High-performance vector search",
        "RESTful API with FastAPI"
      ],
      icon: FaDatabase,
      color: "from-green-500 to-teal-500",
      category: "AI/ML",
      techIcons: [
        { icon: SiPython, name: "Python" },
        { icon: SiFastapi, name: "FastAPI" },
        { icon: FaServer, name: "Docker" },
        { icon: SiRedis, name: "Redis" }
      ]
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto' // Re-enable scrolling
    setTimeout(() => setSelectedProject(null), 300) // Wait for animation to complete
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
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  }

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null
    
    return (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-10 p-6 bg-gradient-to-r from-gray-900 to-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 rounded-t-2xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-1">{project.description}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="text-gray-400 hover:text-white text-xl" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700/50 text-sm rounded-full text-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Modal Body */}
          <div className="p-6">
            {/* Project Image */}
            <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-gray-800 to-gray-900 h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/20" />
              <project.icon className={`text-8xl bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
            </div>
            
            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-white mb-4">Project Overview</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.longDescription}
                </p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-3 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:col-span-1">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaLayerGroup className="mr-2 text-blue-400" />
                    Tech Stack
                  </h4>
                  <div className="space-y-4">
                    {project.techIcons.map((tech, i) => (
                      <div key={i} className="flex items-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                        <tech.icon className={`text-2xl mr-3 ${tech.name === 'Python' ? 'text-blue-400' : tech.name === 'React' ? 'text-cyan-400' : tech.name === 'Node.js' ? 'text-green-500' : 'text-purple-400'}`} />
                        <div>
                          <div className="font-medium text-white">{tech.name}</div>
                          <div className="text-xs text-gray-400">{project.technologies.find(t => t.includes(tech.name)) || 'Core Technology'}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <FaLightbulb className="mr-2 text-yellow-400" />
                      Project Links
                    </h4>
                    <div className="space-y-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center">
                          <FaGithub className="text-xl mr-3 text-gray-300 group-hover:text-white" />
                          <span className="font-medium text-gray-200 group-hover:text-white">View on GitHub</span>
                        </div>
                        <FaArrowRight className="text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center">
                          <FaExternalLinkAlt className="text-lg mr-3 text-white" />
                          <span className="font-medium text-white">Live Demo</span>
                        </div>
                        <FaArrowRight className="text-white/80 group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modal Footer */}
          <div className="p-4 bg-gray-900/50 border-t border-gray-700/50 rounded-b-2xl">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-700/50 hover:bg-gray-600/70 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl font-bold text-white mb-4">My Projects</motion.h2>
          <motion.div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { 
                  duration: 0.3,
                } 
              }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="overflow-hidden h-48 bg-gray-900">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                  <project.icon className={`text-7xl ${project.color} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-800/50 rounded-full text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <button
                    onClick={() => openModal(project)}
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center group"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full hover:opacity-90 transition-all transform hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  )
}

export default Projects;
