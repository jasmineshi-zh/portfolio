import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navLinks = [
    { label: 'Work', id: 'work', color: 'var(--accent-blue)' },
    { label: 'Story', id: 'about', color: 'var(--accent-yellow)' },
    { label: 'Process', id: 'principles', color: 'var(--accent-pink)' },
    { label: 'Connect', id: 'contact', color: 'var(--accent-yellow)' },
  ];

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-900 text-white rounded-full px-6 py-3 flex items-center gap-6 shadow-lg backdrop-blur-sm bg-opacity-95">
        {navLinks.map(({ label, id, color }) => (
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-sm transition-colors relative pb-1"
            style={{ '--nav-color': color } as React.CSSProperties}
            whileHover={{ color }}
          >
            {label}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: color, transformOrigin: 'left' }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
