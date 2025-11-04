import { motion } from 'framer-motion'
import ProjectsSection from '../components/ProjectsSection'

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            My <span className="text-dark-accent">Projects</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive showcase of my work in mobile and web development
          </p>
        </motion.div>
      </div>
      <ProjectsSection />
    </div>
  )
}

export default Projects
