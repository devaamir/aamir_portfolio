import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const Resume = () => {
  const experience = [
    {
      title: 'React Native Developer',
      company: 'Core Cognitics',
      period: 'Jan 2025 - Present',
      description: 'Leading mobile app development projects using React Native, TypeScript, and Firebase.'
    },
    {
      title: 'React Native Developer',
      company: 'Ruppells Solutions',
      period: 'Nov 2023 - Oct 2024',
      description: 'Developed cross-platform mobile applications with modern UI/UX implementations.'
    },
    {
      title: 'UI Engineer',
      company: 'Tegain',
      period: 'Jul 2021 - Oct 2023',
      description: 'Designed and implemented user interfaces with focus on responsive design and user experience.'
    },
    {
      title: 'Software Engineer',
      company: 'Talrop',
      period: 'Dec 2020 - Jul 2021',
      description: 'Built software solutions and contributed to full-stack development projects.'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University Name',
      period: '2016 - 2020',
      description: 'Focused on software engineering and mobile application development.'
    }
  ]

  const skills = [
    'React Native', 'JavaScript', 'TypeScript', 'Firebase', 'Node.js',
    'React.js', 'Redux', 'Git', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'
  ]

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-dark-accent">Resume</span>
          </h1>
          <p className="text-text-secondary text-lg">React Native Developer & Mobile App Specialist</p>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center text-dark-accent">
            <Briefcase size={24} className="mr-3" />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-dark-card p-6 rounded-xl border border-dark-accent/20">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-dark-accent font-medium mb-2">{exp.company}</p>
                <p className="text-text-secondary text-sm mb-3">{exp.period}</p>
                <p className="text-text-secondary">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center text-dark-accent">
            <GraduationCap size={24} className="mr-3" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-dark-card p-6 rounded-xl border border-dark-accent/20">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-dark-accent font-medium mb-2">{edu.institution}</p>
                <p className="text-text-secondary text-sm mb-3">{edu.period}</p>
                <p className="text-text-secondary">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-dark-accent">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 bg-dark-card border border-dark-accent/30 rounded-lg text-sm font-medium hover:border-dark-accent transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Resume
