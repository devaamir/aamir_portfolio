import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, Code2 } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/devaamir", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sayedmuhammedaamir",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/sayedaamir", label: "X" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="p-2 bg-gradient-to-r from-dark-accent to-dark-purple rounded-lg"
            >
              <Code2 size={20} className="text-white" />
            </motion.div>
            <span className="text-2xl font-bold gradient-text font-mono">
              Dev.Aamir
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? "text-dark-accent bg-dark-accent/10"
                    : "text-text-secondary hover:text-dark-accent hover:bg-white/5"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-dark-accent/10 rounded-lg border border-dark-accent/30"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-2">
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

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary hover:text-dark-accent transition-colors duration-300 rounded-lg hover:bg-white/5"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                      location.pathname === item.path
                        ? "text-dark-accent bg-dark-accent/10 border border-dark-accent/30"
                        : "text-text-secondary hover:text-dark-accent hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-4 pt-4 px-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-dark-accent transition-colors duration-300 rounded-lg hover:bg-white/5"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
