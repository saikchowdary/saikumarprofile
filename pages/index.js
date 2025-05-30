
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../animations/loop.json'
import DarkModeToggle from '../components/DarkModeToggle'
import ScrollToTop from '../components/ScrollToTop'
import { Linkedin, Instagram, Mail, X } from 'lucide-react'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Silica Extraction from Rice Husk",
      desc: "Optimized yield and purity by 15% using alkaline leaching and data analysis.",
      img: "/images/project1.jpg",
      details: "Conducted chemical process simulations and yield optimization via statistical analysis."
    },
    {
      title: "ANN Reactor Fault Diagnosis",
      desc: "Built 2-stage ML model with LDA and Python for real-time fault detection.",
      img: "/images/project2.jpg",
      details: "Utilized supervised learning for fault classification and early-warning detection."
    },
    {
      title: "Heat Exchanger Design",
      desc: "Designed carbon capture exchanger in UNISIM improving efficiency by 15%.",
      img: "/images/project3.jpg",
      details: "Performed energy integration and simulation-based sizing for sustainable thermal systems."
    },
    {
      title: "GaN Solubility Modeling",
      desc: "Trained ML models (RF, XGB) using 19 studies with SHAP + feature engineering.",
      img: "/images/project4.jpg",
      details: "Implemented moisture content ranking, interaction terms and universal solubility trend derivation."
    }
  ]

  return (
    <>
      <Head><title>Saikumar Portfolio</title></Head>
      <div className="bg-gradient-to-b from-yellow-200 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <header className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-3xl font-extrabold text-primary dark:text-yellow-300">Saikumar</h1>
            <div className="flex gap-4 items-center">
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <DarkModeToggle />
            </div>
          </div>
        </header>

        <motion.section
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto"
        >
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-5xl font-bold text-yellow-500 dark:text-yellow-300 mb-4">Hi, I'm Saikumar</h2>
            <p className="text-xl">
              MSc Clean Energy Processes | ML Enthusiast | Materials Scientist
            </p>
            <div className="flex gap-4 justify-center md:justify-start mt-6 text-xl">
              <a href="https://www.linkedin.com/in/saikumar183" target="_blank"><Linkedin /></a>
              <a href="https://www.instagram.com/sai.k.chowdary" target="_blank"><Instagram /></a>
              <a href="mailto:saikumarckr@gmail.com"><Mail /></a>
            </div>
          </div>
          <div className="w-64 h-64">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto px-4 py-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedProject(proj)}>
                <Image src={proj.img} alt={proj.title} width={600} height={350} />
                <div className="p-4">
                  <h3 className="font-bold text-xl">{proj.title}</h3>
                  <p className="text-sm mt-1">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center bg-yellow-100 dark:bg-gray-700 py-12 px-4"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p>Email: <a href="mailto:saikumarckr@gmail.com" className="underline">saikumarckr@gmail.com</a></p>
        </motion.section>

        <footer className="text-center py-6 bg-yellow-300 dark:bg-gray-800 text-gray-900 dark:text-white">
          <p>Hasta la vista</p>
        </footer>

        <ScrollToTop />

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative">
              <button className="absolute top-2 right-2" onClick={() => setSelectedProject(null)}>
                <X />
              </button>
              <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-sm">{selectedProject.details}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
