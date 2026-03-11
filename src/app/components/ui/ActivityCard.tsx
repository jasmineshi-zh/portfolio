import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
  index?: number;
}

export function ActivityCard({ icon: Icon, label, value, color, index = 0 }: ActivityCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center gap-2 sm:gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white cursor-pointer"
        style={{ backgroundColor: color }}
      >
        <Icon size={24} />
      </motion.div>
      <div>
        <div className="text-xs sm:text-sm font-medium mb-1">{label}</div>
        <div className="text-xs opacity-60 font-light">{value}</div>
      </div>
    </motion.div>
  );
}
