import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  delay?: number;
  target?: string;
  rel?: string;
}

export function ContactCard({ icon: Icon, label, value, href, delay = 0, target, rel }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-lg transition-all bg-white group flex-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
    >
      <motion.div
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
        style={{ backgroundColor: 'var(--accent-blue)' }}
        whileHover={{ scale: 1.1 }}
      >
        <Icon size={18} />
      </motion.div>
      <div className="min-w-0">
        <div className="text-xs sm:text-sm opacity-60 font-medium">{label}</div>
        <div className="transition-opacity font-light text-sm sm:text-base truncate">{value}</div>
      </div>
    </motion.a>
  );
}
