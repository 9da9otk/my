import { motion } from 'framer-motion';

const FloatingBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{ x: [0, -100, 0], y: [0, -100, 0], scale: [1, 1.1, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        animate={{ x: [0, 100, 0], y: [0, 100, 0], scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

export default FloatingBlobs;