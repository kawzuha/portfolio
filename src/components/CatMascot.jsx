import { motion } from 'framer-motion';
import kittyImage from '../assets/kitty.png';

export default function CatMascot({ size = 'md', className = '' }) {
  const dimensions = {
    nav: 'h-11 w-11',
    sm: 'h-20 w-20',
    md: 'h-32 w-32',
    lg: 'h-44 w-44'
  };

  return (
    <motion.img
      src={kittyImage}
      alt="Cute cat with laptop"
      className={`${dimensions[size]} cat-mascot object-contain drop-shadow-xl ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      draggable="false"
    />
  );
}
