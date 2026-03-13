import { motion } from 'motion/react';
import { ArrowLeft, Mail, Linkedin, Briefcase, GraduationCap, Star } from 'lucide-react';
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
            Product Management &amp; UX Design
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

        {/* Education */}
        <ResumeSection
          title="Education"
          icon={GraduationCap}
          iconColor="var(--accent-blue)"
          delay={0.1}
        >
          <div className="space-y-6">
            <EducationCard
              degree="B.A. Information Science (UX Concentration) · B.A. Feminist, Gender, and Sexuality Studies"
              school="Cornell University — College of Arts & Sciences · Ithaca, NY"
              period="Expected May 2028"
              details="GPA: 4.03/4.00 · Relevant Coursework: Tech, Behavior, and Society; HCI; Intro to Programming; Intro to Web Development"
            />
          </div>
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
              title="Product Manager"
              company="The Diversity Center at Santa Cruz — Remote"
              period="Dec. 2025 – Present"
            >
              <li>Scoped requirements for a centralized participant data system by mapping intake and check-in workflows across <span className="font-bold">20+</span> services and <span className="font-bold">1,000+</span> annual attendees, surfacing critical data gaps into a structured requirements brief to guide platform selection</li>
              <li>Evaluated <span className="font-bold">8+</span> platforms through market research and nonprofit comparator analysis, producing a recommendation report identifying an affordable, staff-accessible solution for intake, engagement tracking, and program facilitation</li>
              <li>Prototyped <span className="font-bold">5</span> workflow mockups on the recommended platform, designing staff-facing flows for key use cases such as event check-in and grant reporting to validate feasibility, drive implementation, and reduce onboarding friction</li>
            </ExperienceCard>

            <ExperienceCard
              title="UX Designer — Internal Member Archive"
              company="Cornell Hack4Impact · Ithaca, NY"
              period="Sep. – Dec. 2025"
            >
              <li>Drove end-to-end user research for an admin-facing member management platform serving <span className="font-bold">100+</span> users by conducting <span className="font-bold">3</span> interview rounds and synthesizing findings into <span className="font-bold">5</span> prioritized design decisions, presented to PM and TLs for alignment</li>
              <li>Conducted competitor analysis across <span className="font-bold">10+</span> platforms to identify feature gaps and industry standards, translating findings into actionable design insights that informed the information architecture and core functionality of the dashboard</li>
              <li>Designed and iterated Figma prototypes across <span className="font-bold">5</span> card layout variants informed by user research, delivering <span className="font-bold">3</span> validated end-to-end admin flows covering bulk approval, status-based filtering, and dual list/card views</li>
            </ExperienceCard>

            {/* Social Business Consulting — two sub-roles */}
            <div className="space-y-5">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <p className="text-base sm:text-lg opacity-70 font-semibold">Social Business Consulting · Ithaca, NY</p>
                </div>
              </div>

              <ExperienceCard
                title="Consultant — The Trevor Project"
                company=""
                period="Sep. 2024 – Present"
              >
                <li>Diagnosed workflow inefficiencies in crisis intervention calls and delivered a centralized <span className="font-bold">50-state</span> affirming resource database, replacing a fragmented manual process and improving counselor access to time-sensitive resources</li>
                <li>Conducted <span className="font-bold">2</span> rounds of user interviews with crisis counselors to surface workflow pain points, directly informing <span className="font-bold">3</span> key design decisions across geographic filtering, health resource categorization, and demographic filtering</li>
                <li>Authored a comprehensive counselor-facing onboarding guide to drive adoption of the new database, equipping staff with clear navigation instructions and enabling consistent, efficient access to affirming resources</li>
              </ExperienceCard>

              <ExperienceCard
                title="Consultant — The Responsible AI Institute"
                company=""
                period="Feb. – May 2025"
              >
                <li>Synthesized competitive research and member needs analysis findings into a growth strategy for expanding Responsible AI readiness services to SMEs, identifying underserved market segments and recommending a scalable service portfolio</li>
                <li>Developed tiered packaging and pricing recommendations grounded in competitive benchmarking of <span className="font-bold">10+</span> organizations and the Institute's existing membership structure, incorporating member needs analysis to ensure market-appropriate positioning</li>
                <li>Mapped <span className="font-bold">3</span> prospective member experience flows spanning discovery through acquisition, designing high-level UX touchpoints and decision moments to clarify service offerings and reduce conversion friction</li>
              </ExperienceCard>
            </div>

            {/* Sociology — two sub-roles */}
            <div className="space-y-5">
              <div>
                <p className="text-base sm:text-lg opacity-70 font-semibold">Department of Sociology, Cornell University · Ithaca, NY</p>
              </div>

              <ExperienceCard
                title="Undergraduate Research Assistant — Reproduction & Climate Media"
                company=""
                period="Jun. – Aug. 2025"
              >
                <li>Built and iteratively refined a shared qualitative coding schema applied to <span className="font-bold">250+</span> media articles using MAXQDA; synthesized findings into <span className="font-bold">5</span> analytical memos that directly shaped <span className="font-bold">3</span> new research directions for the project's next phase</li>
              </ExperienceCard>

              <ExperienceCard
                title="Undergraduate Research Assistant — SOGI Survey Mapping"
                company=""
                period="Oct. – Dec. 2025"
              >
                <li>Systematically extracted and coded design features from <span className="font-bold">50+</span> SOGI survey instruments (2020–2025), structuring data in Excel to enable cross-national U.S./U.K. comparative analysis</li>
              </ExperienceCard>
            </div>

          </div>
        </ResumeSection>

        {/* Leadership */}
        <ResumeSection
          title="Leadership"
          icon={Star}
          iconColor="var(--accent-yellow)"
          delay={0.2}
        >
          <ExperienceCard
            title="Project Manager & Marketing Chair"
            company="Social Business Consulting · Ithaca, NY"
            period="Jan. 2025 – Present"
          >
            <li>Manage end-to-end delivery of consulting engagements, coordinating workstreams across consultant teams and ensuring client deliverables are scoped, tracked, and completed on schedule</li>
          </ExperienceCard>
        </ResumeSection>

        {/* Tools & Interests */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl mb-6">Tools &amp; Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: 'var(--accent-pink)' }}>
                Tools
              </h3>
              <ul className="space-y-1 opacity-80 font-light text-xs sm:text-sm">
                <li>• Figma</li>
                <li>• Python &amp; HTML (foundational)</li>
                <li>• Claude (AI-to-Figma design workflow)</li>
                <li>• R</li>
                <li>• Microsoft Suite</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: 'var(--accent-blue)' }}>
                Interests
              </h3>
              <ul className="space-y-1 opacity-80 font-light text-xs sm:text-sm">
                <li>• Street Dance</li>
                <li>• 3D Modeling</li>
                <li>• Broadway</li>
                <li>• Creative Writing</li>
                <li>• Competitive Squash</li>
              </ul>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
