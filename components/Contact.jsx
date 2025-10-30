'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useRef } from 'react'
import { 
  FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt,
  FaCheckCircle, FaExclamationCircle, FaLinkedinIn
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 })
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const formRef = useRef()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'anaypandey1504@gmail.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "anaypandey1504@gmail.com", link: "mailto:anaypandey1504@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "+91 7021273190", link: "tel:+917021273190" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Mumbai, India" },
    { icon: FaGithub, label: "GitHub", value: "@anaypandey1504", link: "https://github.com/anaypandey1504" },
    { icon: FaLinkedinIn, label: "LinkedIn", value: "anaypandey", link: "https://www.linkedin.com/in/anaykumar-pandey-049336259/" },
    { icon: SiLeetcode, label: "LeetCode", value: "anaypandey1504", link: "https://leetcode.com/anaypandey1504/" }
  ]

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 bg-black">
      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
          <motion.h2 variants={item} className="text-4xl font-bold text-white">
            Get In Touch
          </motion.h2>
          <motion.p variants={item} className="text-gray-300 mt-3">
            Let's collaborate — happy to connect!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Cards */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.a key={i} href={info.link || "#"} target="_blank"
                variants={item} className="flex items-center gap-4 p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20">
                <info.icon className="text-2xl text-white" />
                <div>
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form ref={formRef} onSubmit={handleSubmit}
            initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-white/10 border border-white/20 p-6 rounded-xl space-y-4">

            <input name="name" value={formData.name} onChange={handleInputChange}
              placeholder="Your Name" className="w-full p-3 rounded bg-black text-white border border-white/20" />

            <input name="email" value={formData.email} onChange={handleInputChange}
              placeholder="Your Email" className="w-full p-3 rounded bg-black text-white border border-white/20" />

            <textarea name="message" value={formData.message} onChange={handleInputChange}
              placeholder="Message" rows="4" className="w-full p-3 rounded bg-black text-white border border-white/20" />

            <button type="submit" disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded text-white font-semibold">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-green-400">
                <FaCheckCircle /> Message Sent Successfully!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-400">
                <FaExclamationCircle /> Failed! Try again later.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
