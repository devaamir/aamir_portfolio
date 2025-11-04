import { motion } from 'framer-motion'
import { ArrowUp, Mail, Phone } from 'lucide-react'
import Button from './Shared/Button'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-card/50 border-t border-dark-accent/20">
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Let's Build Something Amazing 🚀
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Ready to turn your ideas into reality? Let's collaborate and create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <Button variant="primary" size="lg">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-dark-accent/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-text-secondary">
                © 2025 Sayed Muhammed Aamir. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="mailto:sayed@example.com"
                className="text-text-secondary hover:text-dark-accent transition-colors duration-300 flex items-center"
              >
                <Mail size={16} className="mr-2" />
                sayed@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="text-text-secondary hover:text-dark-accent transition-colors duration-300 flex items-center"
              >
                <Phone size={16} className="mr-2" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-dark-accent text-dark-bg p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  )
}

export default Footer
