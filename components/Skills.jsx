"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaServer,
  FaTools,
  FaLaptopCode
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiFastapi,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiStreamlit,
  SiVercel,
  SiLangchain,
  SiPinecone,
  SiAmazonaws,
  SiGooglecloud,
  SiKubernetes
} from "react-icons/si";

const Skills = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]); // ✅ Only once!

  const skillCategories = [ /* --- your array unchanged --- */ ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * i,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const skillVariants = {    // ✅ closed properly
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.08
      }
    })
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900"
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="max-w-7xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          
          {/* ---- HEADER ---- */}
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="inline-flex w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6">
              <FaCode className="text-3xl text-white m-auto" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">My Skills</h2>
            <p className="text-lg text-gray-300 mt-2">Technologies and tools I'm proficient with</p>
          </motion.div>

          {/* ---- GRID ---- */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} custom={categoryIndex} variants={itemVariants} className="group">
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="flex gap-4 mb-6 items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skill.name} custom={skillIndex} variants={skillVariants} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <div className="flex gap-2 items-center">
                          <div className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                            <skill.icon className="text-xs text-white" />
                          </div>
                          <div className="text-white text-sm">{skill.name}</div>
                        </div>
                        <span className="text-xs text-gray-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
