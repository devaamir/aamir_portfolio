import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-dark-accent">Me</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Passionate React Native developer with 4+ years of experience building scalable mobile applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-card p-8 rounded-xl border border-dark-accent/20"
        >
          <h2 className="text-2xl font-semibold mb-6 text-dark-accent">My Journey</h2>
          <div className="space-y-6 text-text-secondary">
            <p>
              I'm Sayed Muhammed Aamir, a passionate React Native Developer currently working at Core Cognitics 
              (formerly Freston Analytics). With over 4 years of experience in mobile app development, I specialize 
              in creating high-performance, user-friendly applications that solve real-world problems.
            </p>
            <p>
              My expertise spans across React Native, JavaScript, TypeScript, Firebase, and various modern 
              development tools. I'm passionate about clean code, performance optimization, and creating 
              seamless user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
