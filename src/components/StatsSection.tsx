import { motion } from 'framer-motion'

const StatsSection = () => {
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '5+', label: 'Achievements' }
  ]

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(61, 202, 115, 0.3)'
              }}
              className="bg-dark-card p-4 md:p-8 rounded-xl border border-dark-accent/20 text-center group hover:border-dark-accent transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-accent mb-1 md:mb-2 group-hover:animate-pulse"
              >
                {stat.number}
              </motion.div>
              <div className="text-xs md:text-sm lg:text-base text-text-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
