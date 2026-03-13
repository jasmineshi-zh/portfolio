import { motion, AnimatePresence } from 'motion/react';
import { X, Target, Lightbulb, Heart, Sparkles, Shield, TrendingUp } from 'lucide-react';
import { useEffect, ReactNode } from 'react';

interface DesignDecision {
  useCase: string;
  headline: string;
  decision: string;
  screen?: ReactNode;
}

interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  problem: string;
  role: string;
  timeline?: string;
  year?: string;
  accentColor: string;
  coverImage?: string;
  overview: string;
  challenge: string;
  approach?: string[];
  outcomes?: string[];
  designDecisions?: DesignDecision[];
  heroScreen?: ReactNode;
  customContent?: ReactNode;
  insights: string;
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [caseStudy]);

  return (
    <AnimatePresence>
      {caseStudy && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
            <div className="min-h-full flex items-center justify-center p-3 sm:p-4 md:p-8">
              <motion.div
                className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                >
                  <X size={18} />
                </button>

                {/* Header */}
                <div className="border-b-4" style={{ borderColor: caseStudy.accentColor }}>
                  {caseStudy.coverImage && (
                    <div className="w-full h-48 sm:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                      <img
                        src={caseStudy.coverImage}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8 md:p-10">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm text-white font-medium mb-3 sm:mb-4"
                      style={{ backgroundColor: caseStudy.accentColor }}
                    >
                      {caseStudy.tag}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{caseStudy.title}</h2>
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm opacity-70">
                      <div><span className="font-medium">Role:</span><span className="font-light"> {caseStudy.role}</span></div>
                      {caseStudy.timeline && <div><span className="font-medium">Timeline:</span> <span className="font-light">{caseStudy.timeline}</span></div>}
                      {caseStudy.year && (
                        <div><span className="font-medium">Year:</span> <span className="font-light">{caseStudy.year}</span></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-10 space-y-8 sm:space-y-10">
                  {caseStudy.customContent ? (
                    <>{caseStudy.customContent}</>
                  ) : (
                    <>
                      {/* Overview */}
                      <section>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3">
                          <Target size={20} style={{ color: caseStudy.accentColor }} />
                          <h3 className="text-lg sm:text-xl md:text-2xl">Overview</h3>
                        </div>
                        <p className="text-sm sm:text-base opacity-75 leading-relaxed font-light">{caseStudy.overview}</p>
                      </section>

                      {/* Challenge */}
                      <section
                        className="-mx-6 sm:-mx-8 md:-mx-10 px-6 sm:px-8 md:px-10 py-6 rounded-lg"
                        style={{ backgroundColor: `${caseStudy.accentColor}0d` }}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 mb-3">
                          <Lightbulb size={20} style={{ color: caseStudy.accentColor }} />
                          <h3 className="text-lg sm:text-xl md:text-2xl">
                            The <span className="italic" style={{ color: caseStudy.accentColor }}>Challenge</span>
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base opacity-75 leading-relaxed font-light">{caseStudy.challenge}</p>
                      </section>

                      {/* Design Decisions OR Approach + Outcomes */}
                      {caseStudy.designDecisions ? (
                        <section>
                          <div className="flex items-center gap-2 sm:gap-3 mb-5">
                            <TrendingUp size={20} style={{ color: caseStudy.accentColor }} />
                            <h3 className="text-lg sm:text-xl md:text-2xl">
                              Design <span className="font-bold" style={{ color: caseStudy.accentColor }}>Decisions</span>
                            </h3>
                          </div>

                          {caseStudy.heroScreen && (
                            <motion.div
                              className="mb-6 rounded-2xl overflow-hidden w-full"
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.12)' }}
                            >
                              <div className="w-full overflow-hidden" style={{ maxWidth: '100%' }}>
                                {caseStudy.heroScreen}
                              </div>
                            </motion.div>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {caseStudy.designDecisions.map((dd, index) => (
                              <motion.div
                                key={index}
                                className="rounded-xl overflow-hidden"
                                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.07 }}
                              >
                                {dd.screen && (
                                  <div className="w-full overflow-hidden">{dd.screen}</div>
                                )}
                                <div
                                  className="px-4 py-2 flex items-center"
                                  style={{ backgroundColor: `${caseStudy.accentColor}1a` }}
                                >
                                  <span
                                    className="text-[10px] font-bold tracking-widest uppercase"
                                    style={{ color: caseStudy.accentColor, fontFamily: "'Inter', sans-serif" }}
                                  >
                                    {dd.useCase}
                                  </span>
                                </div>
                                <div className="bg-white px-4 py-4">
                                  <p className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', color: '#1a1714', lineHeight: 1.35 }}>
                                    {dd.headline}
                                  </p>
                                  <p className="text-xs leading-relaxed" style={{ color: '#6a6460', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                                    <span className="font-semibold not-italic" style={{ color: caseStudy.accentColor }}>↳ </span>
                                    {dd.decision}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </section>
                      ) : (
                        <>
                          {caseStudy.approach && (
                            <section>
                              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                                <Shield size={20} style={{ color: caseStudy.accentColor }} />
                                <h3 className="text-lg sm:text-xl md:text-2xl">My Approach</h3>
                              </div>
                              <div className="space-y-3">
                                {caseStudy.approach.map((item, index) => (
                                  <motion.div
                                    key={index}
                                    className="flex gap-3 items-start bg-gray-50 p-3 rounded-lg"
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                  >
                                    <div
                                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                                      style={{ backgroundColor: caseStudy.accentColor }}
                                    >
                                      {index + 1}
                                    </div>
                                    <p className="text-sm opacity-80 leading-relaxed font-light flex-1">{item}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </section>
                          )}
                          {caseStudy.outcomes && (
                            <section className="-mx-6 sm:-mx-8 md:-mx-10 px-6 sm:px-8 md:px-10 py-6 rounded-lg bg-gray-50">
                              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                                <TrendingUp size={20} style={{ color: caseStudy.accentColor }} />
                                <h3 className="text-lg sm:text-xl md:text-2xl">
                                  Outcomes &amp; <span className="font-bold" style={{ color: caseStudy.accentColor }}>Impact</span>
                                </h3>
                              </div>
                              <div className="space-y-2">
                                {caseStudy.outcomes.map((outcome, index) => (
                                  <motion.div
                                    key={index}
                                    className="flex gap-2 items-start bg-white p-3 rounded-lg"
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                  >
                                    <span className="text-lg" style={{ color: caseStudy.accentColor }}>✓</span>
                                    <p className="text-sm opacity-80 leading-relaxed font-light flex-1">{outcome}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </section>
                          )}
                        </>
                      )}

                      {/* Insights */}
                      <section className="pt-4 sm:pt-6 border-t-2" style={{ borderColor: caseStudy.accentColor }}>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3">
                          <Heart size={20} style={{ color: caseStudy.accentColor }} />
                          <h3 className="text-lg sm:text-xl md:text-2xl">
                            Key <span className="italic">Insight</span>
                            <Sparkles size={14} className="inline ml-1" style={{ color: caseStudy.accentColor }} />
                          </h3>
                        </div>
                        <div
                          className="p-4 sm:p-5 rounded-lg border-l-4"
                          style={{ borderColor: caseStudy.accentColor, backgroundColor: `${caseStudy.accentColor}0d` }}
                        >
                          <p className="text-sm sm:text-base opacity-80 leading-relaxed font-light italic">{caseStudy.insights}</p>
                        </div>
                      </section>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
