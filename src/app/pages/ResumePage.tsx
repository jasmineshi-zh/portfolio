import { motion } from 'motion/react';
import { ArrowLeft, Mail, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router';
import { ResumeSection } from '../components/ui/ResumeSection';
import { ExperienceCard } from '../components/ui/ExperienceCard';
import { EducationCard } from '../components/ui/EducationCard';

export function ResumePage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 opacity-60 hover:opacity-100 transition-opacity text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">Jasmine Shi</h1>
          <p className="text-xl sm:text-2xl opacity-70 font-light mb-4 sm:mb-6">
            Product Management &amp; UX Research
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="mailto:zs437@cornell.edu"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Mail size={16} style={{ color: 'var(--accent-blue)' }} />
              zs437@cornell.edu
            </a>
            <a
              href="https://linkedin.com/in/jasmineshi1019"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Linkedin size={16} style={{ color: 'var(--accent-blue)' }} />
              linkedin.com/in/jasmineshi1019
            </a>
          </div>
        </motion.div>

        {/* Summary */}
        <ResumeSection
          title="Summary"
          icon={Award}
          iconColor="var(--accent-yellow)"
          delay={0.1}
        >
          <p className="text-base sm:text-lg opacity-80 leading-relaxed font-light">
            Product strategist and UX researcher with a sociology background, specializing in{' '}
            <span className="font-semibold italic">equity-centered design</span> and{' '}
            <span className="font-semibold italic">systems thinking</span>. Experienced in leading
            research initiatives that inform product strategy for complex social challenges.
          </p>
        </ResumeSection>

        {/* Experience */}
        <ResumeSection
          title="Experience"
          icon={Briefcase}
          iconColor="var(--accent-pink)"
          delay={0.2}
        >
          <div className="space-y-6 sm:space-y-8">
            <ExperienceCard
              title="Project Manager"
              company="The Diversity Center"
              period="2025 – Now"
            >
              <li>
                Led{' '}
                <span className="font-semibold" style={{ color: 'var(--accent-blue)' }}>
                  end-to-end research
                </span>{' '}
                for hiring platform redesign, conducting ethnographic studies with{' '}
                <span className="font-bold">200+</span> candidates and hiring managers
              </li>
              <li>
                Developed equity-centered design framework adopted across 5 product teams,
                identifying and addressing exclusionary patterns in user flows
              </li>
              <li>
                Facilitated cross-functional workshops translating research insights into actionable
                product strategy, resulting in <span className="font-bold">40%</span> increase in
                candidate satisfaction scores
              </li>
            </ExperienceCard>

            <ExperienceCard title="UX Designer" company="Hack4Impact" period="2025 – Now">
              <li>
                Designed and launched{' '}
                <span className="font-semibold italic">financial wellness system</span> serving{' '}
                <span className="font-bold">500K+</span> users, focusing on accessibility for
                first-time investors
              </li>
              <li>
                Conducted mixed-methods research studying behavioral patterns around micro-investing
                and habit formation
              </li>
              <li>
                Collaborated with behavioral economists to translate complex financial concepts into
                plain-language educational content
              </li>
            </ExperienceCard>

            <ExperienceCard
              title="Undergraduate Research Assistant"
              company="Department of Sociology, Cornell University"
              period="2025"
            >
              <li>
                Partnered with health tech and civic tech organizations to embed participatory design
                practices
              </li>
              <li>
                Led community-centered research projects for <span className="font-bold">3</span>{' '}
                regional health departments and <span className="font-bold">2</span> youth mental
                health nonprofits
              </li>
              <li>
                Published independent research on ethical design patterns in wellness apps, cited in{' '}
                <span className="font-bold">8</span> industry publications
              </li>
            </ExperienceCard>
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection
          title="Education"
          icon={GraduationCap}
          iconColor="var(--accent-blue)"
          delay={0.3}
        >
          <div className="space-y-6">
            <EducationCard
              degree="B.A. in Information Science & Feminist, Gender, and Sexuality Studies"
              school="Cornell University"
              period="Class of 2028"
              details='Thesis: "Digital Inequalities in Healthcare Access: A Mixed-Methods Study"'
            />
          </div>
        </ResumeSection>

        {/* Skills */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl mb-6">Skills &amp; Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-3"
                style={{ color: 'var(--accent-pink)' }}
              >
                Research Methods
              </h3>
              <ul className="space-y-1 opacity-80 font-light text-xs sm:text-sm">
                <li>• Ethnographic research</li>
                <li>• In-depth interviews</li>
                <li>• Participatory design</li>
                <li>• Usability testing</li>
                <li>• Diary studies</li>
                <li>• Survey design &amp; analysis</li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-3"
                style={{ color: 'var(--accent-blue)' }}
              >
                Strategic Focus
              </h3>
              <ul className="space-y-1 opacity-80 font-light text-xs sm:text-sm">
                <li>• Equity-centered design</li>
                <li>• Systems thinking</li>
                <li>• Product strategy</li>
                <li>• Service design</li>
                <li>• Behavioral design</li>
                <li>• Design justice frameworks</li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-3"
                style={{ color: 'var(--accent-yellow)' }}
              >
                Tools &amp; Platforms
              </h3>
              <ul className="space-y-1 opacity-80 font-light text-xs sm:text-sm">
                <li>• Figma, Sketch</li>
                <li>• Dovetail, Miro</li>
                <li>• SPSS, R (statistical analysis)</li>
                <li>• HTML/CSS (prototyping)</li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-3"
                style={{ color: 'var(--accent-pink)' }}
              >
                Domain Expertise
              </h3>
              <ul className="space-y-1 opacity-80 font-light text-xs sm:text-sm">
                <li>• Health tech &amp; public health</li>
                <li>• Civic technology</li>
                <li>• Financial wellness</li>
                <li>• Education technology</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
