import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  disabled = false,
  type = 'button',
  className = '' 
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-dark-accent to-dark-purple text-white hover:shadow-lg hover:shadow-dark-accent/30 hover:scale-105',
    secondary: 'bg-dark-card text-white border border-gray-700 hover:bg-gray-700',
    outline: 'border-2 border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg',
    ghost: 'text-dark-accent hover:bg-dark-accent/10'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm md:px-4',
    md: 'px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base',
    lg: 'px-6 py-3 text-base md:px-8 md:py-4 md:text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  const content = (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
  
  if (href && !disabled) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    )
  }
  
  return content
}

export default Button
