import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Button from '../components/Shared/Button'
import { web3formsConfig } from '../config/web3forms'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/sayedaamir' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sayedmuhammedaamir' },
    { icon: Twitter, label: 'X', href: 'https://x.com/sayedaamir' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (web3formsConfig.accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        // Demo mode
        console.log('Web3Forms not configured. Form data:', formData)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Submit to Web3Forms
        const response = await fetch(web3formsConfig.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3formsConfig.accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          })
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          throw new Error('Failed to submit')
        }
      }
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-dark-accent">Connect</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-dark-accent">Get in Touch</h2>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-dark-card rounded-xl border border-dark-accent/20"
                >
                  <h3 className="text-lg font-medium mb-3">Available for Work</h3>
                  <p className="text-text-secondary leading-relaxed">
                    I'm currently available for freelance projects and full-time opportunities. 
                    Whether you need a mobile app, web application, or consultation, I'm here to help.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 bg-dark-card rounded-xl border border-dark-accent/20"
                >
                  <h3 className="text-lg font-medium mb-3">Response Time</h3>
                  <p className="text-text-secondary">
                    I typically respond to messages within 24 hours. For urgent projects, 
                    feel free to mention it in your message.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-dark-accent">Connect on Social</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-dark-card rounded-lg border border-dark-accent/20 hover:border-dark-accent hover:bg-dark-accent/10 transition-all duration-300 group"
                  >
                    <social.icon size={24} className="group-hover:text-dark-accent transition-colors duration-300" />
                  </motion.a>
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
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center"
              >
                <CheckCircle size={20} className="text-green-500 mr-3" />
                <span className="text-green-500">Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center"
              >
                <AlertCircle size={20} className="text-red-500 mr-3" />
                <span className="text-red-500">Failed to send message. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-accent/30 rounded-lg focus:border-dark-accent focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-accent/30 rounded-lg focus:border-dark-accent focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-accent/30 rounded-lg focus:border-dark-accent focus:outline-none transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-accent/30 rounded-lg focus:border-dark-accent focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
              </div>
              
              <Button 
                type="submit"
                variant="primary" 
                size="md" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>

            {/* Web3Forms Setup Notice */}
            {web3formsConfig.accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
              >
                <p className="text-yellow-500 text-sm">
                  <strong>Note:</strong> Web3Forms is not configured yet. The form will simulate sending for demo purposes. 
                  Check <code>src/config/web3forms.ts</code> to set up email functionality.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
