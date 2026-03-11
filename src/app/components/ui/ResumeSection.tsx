import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ResumeSectionProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  children: ReactNode;
  delay?: number;
}

export function ResumeSection({ title, icon: Icon, iconColor, children, delay = 0 }: ResumeSectionProps) {
  return (
    <motion.section
      className="mb-12 pb-12 border-b"
      style={{ borderColor: 'var(--warm-gray)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 flex items-center gap-3">
        <Icon size={24} style={{ color: iconColor }} />
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
