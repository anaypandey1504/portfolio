'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiTensorflow } from 'react-icons/si'
import Image from 'next/image'

// Tech icons to float around profile image
const techIcons = [
  { icon: <SiReact className="text-2xl text-cyan-400" />, size: 'w-12 h-12' },
  { icon: <SiNodedotjs className="text-2xl text-green-500" />, size: 'w-14 h-14' },
  { icon: <SiPython className="text-2xl text-yellow-400" />, size: 'w-12 h-12' },
  { icon: <SiJavascript className="text-2xl text-yellow-300" />, size: 'w-10 h-10' },
  { icon: <SiTensorflow className="text-2xl text-orange-500" />, size: 'w-14 h-14' },
]

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const texts = [
    "Hi, I'm Anay Pandey",
    "GenAI & Full-Stack Developer",
    "Building the future with AI",
    "Transforming ideas into reality"
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText.length < texts[textIndex].length) {
        setCurrentText(texts[textIndex].substring(0, currentText.length + 1))
      } else if (!isDeleting && currentText.length === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText.length > 0) {
        setCurrentText(texts[textIndex].substring(0, currentText.length - 1))
      } else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex, texts])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background with gradient mesh */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent w-full h-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent w-full h-full"></div>
      </motion.div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.3 + 0.1})`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(96, 165, 250, 0.5)`,
            }}
            animate={{
              y: [0, -Math.random() * 40 - 10],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left relative z-10"
            style={{ y: yText }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.3 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
                <h1 className="relative text-6xl md:text-8xl font-bold mb-6 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Anay Pandey
                </h1>
              </div>
              
              <motion.div 
                className="h-20 flex items-center justify-center lg:justify-start mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-2xl md:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
                  {currentText}
                  <motion.span 
                    className="inline-block w-1 h-8 bg-blue-400 ml-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 0.8,
                      repeatType: "reverse"
                    }}
                  />
                </span>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Passionate about building intelligent solutions that bridge the gap between 
              artificial intelligence and modern web development. Currently pursuing B.Tech 
              in Computer Science and Engineering at IIIT Vadodara.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="https://github.com/anaypandey1504"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 bg-gradient-to-r from-blue-600/20 to-blue-400/20 hover:from-blue-600/30 hover:to-blue-400/30 border border-blue-500/30 hover:border-blue-400/50 backdrop-blur-sm"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                />
                <FaGithub className="text-xl text-blue-300 group-hover:text-white transition-colors" />
                <span className="text-blue-100 group-hover:text-white font-medium">GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/anaykumar-pandey-049336259/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 bg-gradient-to-r from-purple-600/20 to-pink-500/20 hover:from-purple-600/30 hover:to-pink-500/30 border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                />
                <FaLinkedin className="text-xl text-purple-300 group-hover:text-white transition-colors" />
                <span className="text-purple-100 group-hover:text-white font-medium">LinkedIn</span>
              </a>
              
              <a
                href="mailto:anaypandey1504@gmail.com"
                className="group relative flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 bg-gradient-to-r from-cyan-600/20 to-teal-500/20 hover:from-cyan-600/30 hover:to-teal-500/30 border border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-sm"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                />
                <FaEnvelope className="text-xl text-cyan-300 group-hover:text-white transition-colors" />
                <span className="text-cyan-100 group-hover:text-white font-medium">Email</span>
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8"
            >
              <motion.button
                onClick={scrollToContact}
                className="relative group px-8 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  Contact Me
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
              
              <motion.button
                onClick={scrollToAbout}
                className="group relative px-8 py-4 rounded-xl overflow-hidden bg-transparent border-2 border-blue-400/30 text-blue-100 font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center">
                  View My Work
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ↓
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative z-10"
            style={{ y: yText }}
          >
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full p-1"
                style={{
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981)',
                  backgroundSize: '300% 300%',
                  animation: 'gradient 8s ease infinite',
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-pulse" />
              
              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/5 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                <Image
                  src="/anay.jpg"
                  alt="Anay Pandey"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover scale-105"
                  priority
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Floating tech icons */}
              {techIcons.map((tech, index) => {
                const angle = (index / techIcons.length) * Math.PI * 2;
                const radius = 180; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={index}
                    className={`${tech.size} absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-lg backdrop-blur-sm`}
                    style={{
                      left: '50%',
                      top: '50%',
                      x: x,
                      y: y,
                    }}
                    animate={{
                      y: [y, y + 10, y],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                );
              })}
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-blue-400/20"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.button
            onClick={scrollToAbout}
            className="group flex flex-col items-center text-gray-300 hover:text-white transition-colors"
            whileHover={{ y: 5 }}
          >
            <span className="text-sm font-medium mb-3 opacity-70 group-hover:opacity-100 transition-opacity">Explore More</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-8 h-12 rounded-full border-2 border-blue-400/50 flex items-start justify-center p-1"
            >
              <motion.div 
                className="w-1 h-3 bg-blue-400 rounded-full"
                animate={{
                  y: [0, 8],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
        
        {/* Add global styles for animations */}
        <style jsx global>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}</style>
      </div>
    </section>
  )
}

export default Hero
