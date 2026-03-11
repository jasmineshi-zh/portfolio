import { motion, AnimatePresence, useMotionValue } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useIsTablet } from '../../hooks/useMediaQuery';

interface ProjectCardProps {
  title: string;
  role: string;
  tags?: string[];
  year: string;
  description?: string;
  accentColor: string;
  tagColor?: string;
  accentBg?: string;
  coverImage?: string;
  coverElement?: React.ReactNode;
  onClick: () => void;
  index?: number;
}

export function ProjectCard({
  title,
  role,
  tags = [],
  year,
  description,
  accentColor,
  tagColor,
  accentBg = '#f5f4f2',
  coverImage,
  coverElement,
  onClick,
  index = 0,
}: ProjectCardProps) {
  const isTablet = useIsTablet();
  const [hovered, setHovered] = useState(false);

  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    },
    [clientX, clientY]
  );

  const pill = hovered
    ? createPortal(
        <AnimatePresence>
          <motion.div
            className="pointer-events-none fixed z-[9999] flex items-center gap-2 px-4 py-2.5"
            style={{
              backgroundColor: '#1a1714',
              left: clientX,
              top: clientY,
              translateX: '4px',
              translateY: '4px',
              borderRadius: '0px 20px 20px 20px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '0.8rem',
              color: '#fff',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(0,0,0,0.22)',
            }}
            initial={{ opacity: 0, scale: 0.72 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.72 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            View Project
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </motion.div>
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      {pill}
      <motion.div
        className="rounded-2xl overflow-hidden cursor-pointer relative"
        style={{
          display: 'flex',
          flexDirection: isTablet ? 'row' : 'column',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 20px rgba(0,0,0,0.065)',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.10)' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => {
          clientX.set(e.clientX);
          clientY.set(e.clientY);
          setHovered(true);
        }}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >
        {/* Image panel */}
        <div
          className="relative flex-shrink-0 overflow-hidden"
          style={{
            backgroundColor: accentBg,
            width: isTablet ? '42%' : '100%',
            minHeight: isTablet ? 240 : 220,
            height: isTablet ? 'auto' : 220,
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${accentColor}30 0%, transparent 68%)` }}
          />
          {coverElement ? (
            coverElement
          ) : coverImage ? (
            <motion.img
              src={coverImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover z-10"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              draggable={false}
            />
          ) : null}
          <div
            className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-full text-xs"
            style={{
              backgroundColor: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(8px)',
              color: '#666',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.04em',
            }}
          >
            {year}
          </div>
        </div>

        {/* Text panel */}
        <div
          className="flex flex-col justify-between flex-1"
          style={{ padding: isTablet ? '2.25rem' : '1.5rem' }}
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <span
              className="text-xs uppercase"
              style={{ color: accentColor, fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '0.13em' }}
            >
              {role}
            </span>
            <div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}18` }}
            >
              <ArrowUpRight size={15} style={{ color: accentColor }} strokeWidth={2} />
            </div>
          </div>

          <h3
            className="leading-snug mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#1a1714' }}
          >
            {title}
          </h3>

          {description && (
            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: '#9a928c', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  border: `1px solid ${accentColor}60`,
                  color: tagColor ?? accentColor,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  backgroundColor: `${accentColor}20`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
