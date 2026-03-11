import { motion } from 'motion/react';

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--accent-pink)', top: '10%', left: '5%' }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--accent-blue)', top: '60%', right: '10%' }}
        animate={{ y: [0, -40, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--accent-yellow)', bottom: '20%', left: '15%' }}
        animate={{ y: [0, 25, 0], x: [0, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
