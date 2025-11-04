import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Sayed delivered an exceptional React Native app that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Sayed was a game-changer for our mobile development. He's reliable, skilled, and delivers high-quality code on time.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      company: "InnovateLab",
      content: "Sayed's React Native expertise helped us launch our app successfully. His problem-solving skills and communication are top-notch.",
      rating: 5,
      avatar: "ER"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients have to say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 relative group"
            >
              <Quote className="text-dark-accent mb-4" size={24} />
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-dark-accent text-dark-accent" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-dark-accent to-dark-purple flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
