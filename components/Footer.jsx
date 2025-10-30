'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaHeart, 
  FaArrowUp,
  FaCode,
  FaRocket
} from 'react-icons/fa'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/anaypandey1504',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/anaykumar-pandey-049336259/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:anaypandey1504@gmail.com',
      color: 'hover:text-red-400'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="bg-gradient-to-t from-navy-900 to-navy-800 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <FaCode className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-poppins">
                      Anay Pandey
                    </h3>
                    <p className="text-gray-400 text-sm">
                      GenAI & Full-Stack Developer
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Passionate about building intelligent solutions that bridge the gap between 
                  artificial intelligence and modern web development. Creating the future, 
                  one line of code at a time.
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20 hover:border-white/30`}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                      >
                        <FaRocket className="text-xs text-blue-400" />
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:anaypandey1504@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      anaypandey1504@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a
                      href="tel:+917021273190"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +91 7021273190
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-gray-300">Mumbai,Maharashtra, India</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/10 py-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Anay Pandey. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                <span>and modern web technologies.</span>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <FaArrowUp className="text-sm" />
                <span className="text-sm font-medium">Back to Top</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Tech Stack Badge */}
          <motion.div
            variants={itemVariants}
            className="py-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-gray-400 text-sm">Built with</span>
              <span className="text-blue-400 font-medium text-sm">Next.js</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-cyan-400 font-medium text-sm">Tailwind CSS</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-purple-400 font-medium text-sm">Framer Motion</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
