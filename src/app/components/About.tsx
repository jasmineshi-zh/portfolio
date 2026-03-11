import { motion } from 'motion/react';
import { FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export function About() {
  return (
    <section id="about" className="py-14 px-4 sm:px-8 md:px-16" style={{ background: 'var(--background)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div {...fadeUp(0)} className="mb-7">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9a928c', fontWeight: 500, marginBottom: '0.4rem' }}>
            My Story
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1a1714', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            A journey in voices
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'auto auto auto', gap: '0.75rem' }}>

          {/* 1 · Amplifying Overlooked Voices — cols 1-7 */}
          <motion.div
            {...fadeUp(0.05)}
            className="rounded-[22px] p-5 flex flex-col justify-center relative overflow-hidden"
            style={{ gridColumn: '1 / 8', gridRow: '1', background: '#0f2744', minHeight: 130, boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #6B8DB5 0%, transparent 70%)' }} />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-15 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #E8B4BC 0%, transparent 70%)' }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 500, marginBottom: '0.2rem' }}>
              Core Identity
            </p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)', color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.015em', marginBottom: '0.5rem' }}>
              Amplifying Overlooked Voices
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, fontWeight: 300 }}>
              My work explores how design and technology shape whose voices are visible—and whose are not.
            </p>
          </motion.div>

          {/* 2 · Growing Up — cols 8-12 */}
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-[22px] p-5 flex flex-col justify-between relative overflow-hidden"
            style={{ gridColumn: '8 / 13', gridRow: '1', background: 'linear-gradient(140deg, #F5EEE8 0%, #EDE5DC 100%)', minHeight: 130, boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
          >
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #c8a08060 0%, transparent 70%)' }} />
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9a7a60', fontWeight: 500, marginBottom: '0.2rem' }}>
                Growing Up
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: '#3a2a1a', lineHeight: 1.5, letterSpacing: '-0.01em', fontStyle: 'italic' }}>
                "I noticed how queer voices and women's experiences were often missing from the stories around me."
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-5 h-0.5 rounded-full" style={{ backgroundColor: '#c8a080' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: '#9a7a60', fontWeight: 400 }}>
                The question that started it all
              </p>
            </div>
          </motion.div>

          {/* 3 · Researching Hidden Histories — cols 1-4 */}
          <motion.div
            {...fadeUp(0.08)}
            className="rounded-[22px] p-6 flex flex-col justify-between"
            style={{ gridColumn: '1 / 5', gridRow: '2', background: 'linear-gradient(140deg, #EDE9F6 0%, #E4DFF5 100%)', minHeight: 190, boxShadow: '0 4px 20px rgba(120,100,180,0.10)' }}
          >
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c6aab', fontWeight: 500, marginBottom: '0.2rem' }}>
                High School
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', color: '#2d1f6e', lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>
                Researching Hidden Histories
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.815rem', color: '#4a3f7a', lineHeight: 1.65, fontWeight: 300 }}>
                From matriarchal communities to the AIDS epidemic in China—these projects taught me how difficult it is to uncover overlooked voices.
              </p>
            </div>
          </motion.div>

          {/* 4 · Whose Voice Gets Heard — cols 5-9 */}
          <motion.div
            {...fadeUp(0.12)}
            className="rounded-[22px] p-6 flex flex-col justify-between"
            style={{ gridColumn: '5 / 10', gridRow: '2', background: 'linear-gradient(140deg, #FDF6E3 0%, #FBF0D0 100%)', minHeight: 190, boxShadow: '0 4px 20px rgba(200,160,0,0.09)' }}
            whileHover={{ scale: 1.02, y: -4, boxShadow: '0 16px 40px rgba(200,160,0,0.22)' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a07a00', fontWeight: 500, marginBottom: '0.2rem' }}>
                Realization
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', color: '#3a2a00', lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>
                Whose Voice Gets Heard?
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.815rem', color: '#5a4200', lineHeight: 1.65, fontWeight: 300 }}>
                Absence in history reflects deeper systems—who has the power to document, design, and distribute information.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-5 h-0.5 rounded-full" style={{ backgroundColor: '#c8a000' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: '#a07a00', fontWeight: 500, letterSpacing: '0.05em' }}>
                The turning point
              </p>
            </div>
          </motion.div>

          {/* 5 · From Research to Technology + Resume — cols 10-12, rows 2-3 */}
          <div style={{ gridColumn: '10 / 13', gridRow: '2 / 4', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-[22px] p-6 relative overflow-hidden flex-1"
              style={{ background: 'linear-gradient(120deg, #EBF2FA 0%, #DDE8F8 45%, #E6EDF8 100%)', boxShadow: '0 4px 24px rgba(107,141,181,0.12)' }}
              whileHover={{ scale: 1.02, y: -4, boxShadow: '0 16px 48px rgba(107,141,181,0.22)' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -top-12 right-0 w-40 h-40 rounded-full opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6B8DB5 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a72a0', fontWeight: 500, marginBottom: '0.2rem' }}>
                  At Cornell
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: '#1a3050', lineHeight: 1.2, letterSpacing: '-0.015em', marginBottom: '0.6rem' }}>
                  From Research to Technology
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#2a4060', lineHeight: 1.7, fontWeight: 300 }}>
                  Algorithms shape what people see. The same question I asked in archives—<em>who gets to be seen?</em>—now applies to the systems we build.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              className="rounded-[22px] p-5 flex flex-col justify-between flex-shrink-0"
              style={{ background: 'linear-gradient(140deg, #FDF6E3 0%, #F9EDD0 100%)', boxShadow: '0 4px 20px rgba(200,160,0,0.10)' }}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: '#2a1a00', letterSpacing: '-0.01em' }}>
                  Resume
                </h3>
                <div className="rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ width: 32, height: 32, backgroundColor: 'rgba(160,112,0,0.12)' }}>
                  <FileText size={14} style={{ color: '#a07000' }} />
                </div>
              </div>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-start"
                style={{ backgroundColor: '#c8a000', color: '#fff', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.78rem', boxShadow: '0 4px 16px rgba(200,160,0,0.30)', textDecoration: 'none' }}
              >
                View Resume <ArrowUpRight size={12} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>

          {/* 6 · Designing With Empathy — cols 1-6 */}
          <motion.div
            {...fadeUp(0.12)}
            className="rounded-[22px] p-6 flex flex-col justify-between"
            style={{ gridColumn: '1 / 7', gridRow: '3', background: 'linear-gradient(140deg, #FDF0F3 0%, #FADDE5 100%)', minHeight: 190, boxShadow: '0 4px 20px rgba(196,54,90,0.09)' }}
            whileHover={{ scale: 1.02, y: -4, boxShadow: '0 16px 40px rgba(196,54,90,0.18)' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b0405a', fontWeight: 500, marginBottom: '0.2rem' }}>
                Philosophy
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1rem, 1.6vw, 1.3rem)', color: '#3a0f1c', lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>
                Designing With Empathy
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.815rem', color: '#5a1f30', lineHeight: 1.65, fontWeight: 300 }}>
                My humanities background pushes me to ask: not just how systems work, but who they benefit. The best solutions center the voices of those most impacted.
              </p>
            </div>
            <div className="mt-4">
              <Sparkles size={14} style={{ color: '#C4365A', opacity: 0.6 }} />
            </div>
          </motion.div>

          {/* 7 · What I'm Exploring — cols 7-9 */}
          <motion.div
            {...fadeUp(0.16)}
            className="rounded-[22px] p-6 flex flex-col justify-between"
            style={{ gridColumn: '7 / 10', gridRow: '3', background: 'linear-gradient(140deg, #EEF7F3 0%, #DDF0E8 100%)', minHeight: 190, boxShadow: '0 4px 20px rgba(82,183,136,0.10)' }}
          >
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2e7a52', fontWeight: 500, marginBottom: '0.2rem' }}>
                Right now
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)', color: '#0f3322', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>
                What I'm Exploring
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#1a5038', lineHeight: 1.6, fontWeight: 300 }}>
                AI, algorithms, and equitable access to technology.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
