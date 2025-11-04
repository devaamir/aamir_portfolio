import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import Button from './Shared/Button'
import profileImage from '../assets/images/profile.jpg'

const HeroSection = () => {
  const techStack = [
    'React Native',
    'HTML',
    'CSS', 
    'ReactJS',
    'Three.js'
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-dark-accent/20 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-dark-purple/20 to-dark-secondary/20 rounded-lg rotate-45"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-dark-accent via-dark-purple to-dark-secondary rounded-full opacity-20 blur-xl"
              />
              
              {/* Main Profile Container */}
              <div className="relative w-96 h-96 rounded-full glass-effect p-2 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full relative overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Sayed Muhammed Aamir" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-accent/20 via-transparent to-dark-purple/20 rounded-full" />
                </div>
              </div>
              
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-dark-accent/40 rounded-full"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-dark-accent">
                <Sparkles size={20} />
                <span className="text-sm font-mono">Available for work</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold">
                Hey, I'm{' '}
                <span className="gradient-text">Aamir</span>{' '}
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block"
                >
                  👋
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-4xl font-semibold font-mono"
            >
              Mobile App{' '}
              <span className="text-dark-accent">{'{'}</span>
              <span className="gradient-text">React Native</span>
              <span className="text-dark-accent">{'}'}</span>{' '}
              Developer
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-dark-accent"
              >
                _
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-text-secondary max-w-2xl leading-relaxed"
            >
              Specializing in{' '}
              <span className="text-dark-accent font-semibold">React Native</span> mobile apps, 
              with experience in web technologies like{' '}
              <span className="text-dark-purple font-semibold">HTML</span>,{' '}
              <span className="text-dark-secondary font-semibold">CSS</span>, and{' '}
              <span className="text-dark-accent font-semibold">ReactJS</span>. 
              Currently exploring{' '}
              <span className="text-dark-purple font-semibold">3D development</span> with Three.js.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      boxShadow: '0 10px 25px rgba(0, 217, 255, 0.2)'
                    }}
                    className="px-4 py-2 glass-effect rounded-xl text-sm font-medium neon-border cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="md">
                View My Work
              </Button>
              <Button variant="outline" size="md">
                Hire Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-text-muted"
        >
          <span className="text-xs mb-2 font-mono">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
