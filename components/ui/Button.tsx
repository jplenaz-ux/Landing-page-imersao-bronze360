import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', fullWidth = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(198, 132, 69, 0.3)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        bg-gradient-gold text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg shadow-lg
        transition-all duration-300 border border-white/20 relative overflow-hidden group
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    </motion.button>
  );
};

export default Button;