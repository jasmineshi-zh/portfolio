import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { ContactCard } from './ui/ContactCard';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Let's Connect" accentColor="var(--accent-pink)" />

        <div className="space-y-6">
          <motion.p
            className="text-base sm:text-lg opacity-70 mb-6 sm:mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I'm always open to conversations about product strategy, research collaborations, or
            opportunities to work on meaningful, human-centered projects.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ContactCard
              icon={Mail}
              label="Email"
              value="zs437@cornell.edu"
              href="mailto:zs437@cornell.edu"
              delay={0.1}
            />
            <ContactCard
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/jasmineshi1019"
              href="https://linkedin.com/in/jasmineshi1019"
              target="_blank"
              rel="noopener noreferrer"
              delay={0.2}
            />
          </div>
        </div>
      </div>

      <div
        className="max-w-4xl mx-auto mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm opacity-50 font-light"
        style={{ borderColor: 'var(--warm-gray)' }}
      >
        <p>© 2026 Jasmine Shi. Designed with intention.</p>
      </div>
    </section>
  );
}
