import { motion } from 'motion/react';

interface PrincipleCardProps {
  number: number;
  title: string;
  description: string;
  color: string;
  index?: number;
}

export function PrincipleCard({ number, title, description, color, index = 0 }: PrincipleCardProps) {
  return (
    <motion.div
      className="flex gap-4 sm:gap-6 items-start"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ x: 8 }}
    >
      <motion.div
        className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-medium"
        style={{ backgroundColor: color }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.4 }}
      >
        {number}
      </motion.div>

      <div className="flex-grow pt-1">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base opacity-70 leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
}
