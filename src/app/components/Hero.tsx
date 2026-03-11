import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useIsDesktop } from '../hooks/useMediaQuery';

// Replace with your actual profile photo in public/images/
const profilePhoto = '/images/profile.JPG';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function card(delay: number) {
  return {
    initial: { opacity: 0, y: 24, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.65, delay, ease: EASE },
  };
}

export function Hero() {
  const isDesktop = useIsDesktop();
  const [photoHovered, setPhotoHovered] = useState(false);
  const [pillPos, setPillPos] = useState({ x: 0, y: 0 });

  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToStory = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  const handlePhotoMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPillPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const tags = ['UX Design', 'Product Strategy', 'Systems Thinking', 'Sociological Research'];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        background: 'var(--background)',
        padding: isDesktop ? '7rem 3rem' : '7rem 1rem',
      }}
    >
      <div className="w-full max-w-5xl flex flex-col gap-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: '#9a928c',
            letterSpacing: '0.01em',
            marginBottom: '0.75rem',
          }}>
            Hello, I'm Jasmine Shi
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            color: '#1a1714',
            lineHeight: 1.13,
            letterSpacing: '-0.025em',
          }}>
            I design{' '}
            <span style={{ color: 'var(--accent-blue)' }}>products &amp; systems</span>
            {' '}that embody{' '}
            <span className="italic" style={{ color: '#c28a00' }}>empathy</span>
            {' '}and feel{' '}
            <span className="italic" style={{ color: '#C4365A' }}>human</span>
            <span className="ml-2" style={{ color: 'var(--accent-pink)', fontStyle: 'normal' }}>✿</span>
          </h1>
        </motion.div>

        {/* Desktop bento grid */}
        {isDesktop && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 280px',
            gridTemplateRows: '240px 130px',
            gap: '1rem',
          }}>
            {/* Intro card — col 1-2, row 1 */}
            <motion.div
              {...card(0.15)}
              className="relative overflow-hidden rounded-[28px] p-8 flex flex-col justify-between"
              style={{
                gridColumn: '1 / 3',
                gridRow: '1 / 2',
                background: 'linear-gradient(135deg, #EBF2FA 0%, #F5EFF8 100%)',
              }}
              whileHover={{ scale: 1.015, y: -3, boxShadow: '0 12px 40px rgba(107,141,181,0.13)' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6B8DB530 0%, transparent 70%)' }} />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #E8B4BC40 0%, transparent 70%)' }} />

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                color: '#5a5450',
                lineHeight: 1.8,
                fontSize: '0.925rem',
              }}>
                On my journey, I've designed human-centered systems, led PM initiatives for campus
                and nonprofit projects, and turned sociological research into actionable insights.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs" style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    color: '#8a8078',
                    border: '1px solid #d4cec8',
                    backgroundColor: 'rgba(255,255,255,0.6)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Col 3 — photo + open-to-work, spans both rows */}
            <motion.div
              {...card(0.2)}
              style={{ gridColumn: '3 / 4', gridRow: '1 / 3', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {/* Photo card */}
              <motion.div
                className="relative overflow-hidden rounded-[28px] flex-1 min-h-0"
                onMouseEnter={() => setPhotoHovered(true)}
                onMouseLeave={() => setPhotoHovered(false)}
                onMouseMove={handlePhotoMouseMove}
                style={{ cursor: 'none' }}
                whileHover={{ scale: 1.025, boxShadow: '0 16px 48px rgba(0,0,0,0.14)' }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Fallback gradient shown when no image */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(135deg, #EBF2FA 0%, #E8B4BC40 100%)',
                }} />
                <img
                  src={profilePhoto}
                  alt="Jasmine Shi"
                  className="w-full h-full object-cover relative z-10"
                  style={{ objectPosition: 'center top' }}
                  draggable={false}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {photoHovered && (
                  <div className="pointer-events-none absolute flex items-center gap-2 px-4 py-2 rounded-full z-20"
                    style={{
                      left: pillPos.x + 14,
                      top: pillPos.y + 14,
                      backgroundColor: '#1a1714',
                      color: '#fff',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: '0.82rem',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.22)',
                      whiteSpace: 'nowrap',
                    }}>
                    👀 Hi there!
                  </div>
                )}
              </motion.div>

              {/* Open to Work */}
              <motion.div
                className="rounded-[20px] px-5 flex flex-row items-center gap-3 flex-shrink-0"
                style={{ height: '56px', backgroundColor: '#F2F7F0', border: '1px solid #d0e8d0' }}
                whileHover={{ scale: 1.03, y: -2, boxShadow: '0 8px 24px rgba(82,183,136,0.15)' }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#52b788', boxShadow: '0 0 0 3px #52b78830' }} />
                <div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    color: '#2e6b4f',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    fontSize: '0.68rem',
                    marginBottom: '1px',
                  }}>Open to work</p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    color: '#4a7a60',
                    fontSize: '0.75rem',
                  }}>Seeking internships in PM &amp; UX Design</p>
                </div>
              </motion.div>
            </motion.div>

            {/* View My Work — col 1, row 2 */}
            <motion.div
              {...card(0.25)}
              className="rounded-[28px] p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer"
              style={{ gridColumn: '1 / 2', gridRow: '2 / 3', background: 'linear-gradient(135deg, #F9E0E4 0%, #F2C8D0 100%)' }}
              onClick={scrollToWork}
              whileHover={{ scale: 1.02, y: -3, boxShadow: '0 16px 40px rgba(196,54,90,0.22)' }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6B8DB5 0%, transparent 70%)' }} />
              <p className="text-xs" style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                color: '#9a5a65',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>Selected work</p>
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full self-start"
                style={{ backgroundColor: '#C4365A', color: '#fff', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem' }}
                whileHover={{ scale: 1.06, x: 2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                View My Work <ArrowUpRight size={14} strokeWidth={2.5} />
              </motion.div>
            </motion.div>

            {/* About Me — col 2, row 2 */}
            <motion.div
              {...card(0.3)}
              className="rounded-[28px] p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer"
              style={{ gridColumn: '2 / 3', gridRow: '2 / 3', background: 'linear-gradient(135deg, #FDF6E3 0%, #FBF0D8 100%)' }}
              onClick={scrollToStory}
              whileHover={{ scale: 1.02, y: -3, boxShadow: '0 16px 40px rgba(244,211,94,0.35)' }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full opacity-25 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #F4D35E 0%, transparent 70%)' }} />
              <p className="text-xs" style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                color: '#8a7a50',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>The designer</p>
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full self-start"
                style={{ backgroundColor: 'var(--accent-yellow)', color: '#1a1714', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem' }}
                whileHover={{ scale: 1.06, x: 2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                About Me <ArrowUpRight size={14} strokeWidth={2.5} />
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Mobile stack */}
        {!isDesktop && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.div
              {...card(0.15)}
              className="relative overflow-hidden rounded-[24px] p-7"
              style={{ background: 'linear-gradient(135deg, #EBF2FA 0%, #F5EFF8 100%)' }}
            >
              <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#5a5450', lineHeight: 1.8 }}>
                On my journey, I've designed human-centered systems, led PM initiatives, and turned
                sociological research into actionable insights.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['UX Design', 'Product Strategy', 'Research'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs" style={{
                    fontFamily: "'Inter', sans-serif",
                    color: '#8a8078',
                    border: '1px solid #d4cec8',
                    backgroundColor: 'rgba(255,255,255,0.6)',
                  }}>{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...card(0.2)}
              className="relative overflow-hidden rounded-[24px]"
              style={{ height: 300 }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #EBF2FA 0%, #E8B4BC40 100%)' }} />
              <img
                src={profilePhoto}
                alt="Jasmine Shi"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
                draggable={false}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute bottom-3 left-3 right-3 px-4 py-2.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.6)' }}>
                <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: '#5a5450' }}>
                  Jasmine Shi · Product Design · UX · Research
                </p>
              </div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <motion.div
                {...card(0.25)}
                className="rounded-[24px] p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#1a1714', minHeight: 130 }}
                onClick={scrollToWork}
              >
                <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Selected work
                </p>
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full self-start"
                  style={{ backgroundColor: 'var(--accent-blue)', color: '#fff', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.8rem' }}>
                  View My Work <ArrowUpRight size={12} />
                </div>
              </motion.div>

              <motion.div
                {...card(0.3)}
                className="rounded-[24px] p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #FDF6E3 0%, #FBF0D8 100%)', minHeight: 130 }}
                onClick={scrollToStory}
              >
                <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: '#8a7a50', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  The designer
                </p>
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full self-start"
                  style={{ backgroundColor: 'var(--accent-yellow)', color: '#1a1714', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.8rem' }}>
                  About Me <ArrowUpRight size={12} />
                </div>
              </motion.div>
            </div>

            <motion.div
              {...card(0.35)}
              className="rounded-[20px] px-5 py-4 flex flex-row items-center gap-3"
              style={{ backgroundColor: '#F2F7F0', border: '1px solid #d0e8d0' }}
            >
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#52b788', boxShadow: '0 0 0 3px #52b78830' }} />
              <div>
                <p className="text-xs mb-0.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2e6b4f', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.68rem' }}>
                  Open to work
                </p>
                <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#4a7a60', fontSize: '0.75rem' }}>
                  Seeking internships in PM &amp; UX Design
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
