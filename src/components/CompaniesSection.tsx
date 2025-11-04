import { motion } from 'framer-motion'

const CompaniesSection = () => {
  const companies = [
    'Google', 'Visa', 'PayPal', 'Spotify', 'Netflix', 'Amazon'
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Cooperation
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto"
        >
          "Worked with startups and global brands delivering scalable mobile solutions."
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-dark-card p-6 rounded-lg border border-dark-accent/20 hover:border-dark-accent transition-all duration-300 group"
            >
              <div className="text-2xl font-bold text-text-secondary group-hover:text-dark-accent transition-colors duration-300">
                {company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesSection
