import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  accentColor?: string;
  className?: string;
}

export function SectionHeader({
  title,
  accentColor = 'var(--accent-pink)',
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-12 sm:mb-14 md:mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">{title}</h2>
      <motion.div
        className="h-1 rounded-full"
        style={{ backgroundColor: accentColor }}
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
