import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react'
import Button from '../components/Shared/Button'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sayed@example.com',
      href: 'mailto:sayed@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (234) 567-890',
      href: 'tel:+1234567890'
    }
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/sayedaamir' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sayedaamir' },
    { icon: Twitter, label: 'X', href: 'https://x.com/sayedaamir' }
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
            Get In <span className="text-dark-accent">Touch</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-dark-accent">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center p-4 bg-dark-card rounded-xl border border-dark-accent/20 hover:border-dark-accent transition-all duration-300 group"
                >
                  <info.icon size={24} className="text-dark-accent mr-4" />
                  <div>
                    <p className="font-medium group-hover:text-dark-accent transition-colors duration-300">
                      {info.label}
                    </p>
                    <p className="text-text-secondary">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <h3 className="text-lg font-semibold mb-4 text-dark-accent">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-card rounded-lg border border-dark-accent/20 hover:border-dark-accent hover:bg-dark-accent/10 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-card p-8 rounded-xl border border-dark-accent/20"
          >
            <h2 className="text-2xl font-semibold mb-6 text-dark-accent">Send Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-accent/30 rounded-lg focus:border-dark-accent focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-accent/30 rounded-lg focus:border-dark-accent focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-accent/30 rounded-lg focus:border-dark-accent focus:outline-none transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-accent/30 rounded-lg focus:border-dark-accent focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button variant="primary" size="md" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
