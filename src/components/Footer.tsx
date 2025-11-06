import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Shared/Button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/devaamir" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sayedmuhammedaamir",
    },
    { icon: Twitter, label: "X", href: "https://x.com/sayedaamir" },
  ];

  return (
    <footer className="bg-dark-card/50 border-t border-dark-accent/20">
      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
          >
            Let's Build Something Amazing 🚀
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to turn your ideas into reality? Let's collaborate and create
            something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-dark-accent/20 py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base text-text-secondary">
                © 2025 Sayed Muhammed Aamir. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-4 md:space-x-6">
              <span className="text-sm text-text-secondary">
                Connect with me:
              </span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-text-secondary hover:text-dark-accent transition-all duration-300 rounded-lg hover:bg-white/5"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-dark-accent text-dark-bg p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} className="md:w-6 md:h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
