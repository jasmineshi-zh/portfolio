import { useState } from 'react';
import { CaseStudyModal } from './CaseStudyModal';
import { SectionHeader } from './ui/SectionHeader';
import { ProjectCard } from './ui/ProjectCard';
import { IMAMockup } from './IMAMockup';
import { IMAModalContent } from './IMAModalContent';
import { MicrosenseModalContent } from './MicrosenseModalContent';

// Place your Microsense cover image at public/images/microsense-cover.png
const microsenseImage = '/images/microsense-cover.png';

const projects = [
  {
    id: '5',
    title: 'Microsense',
    problem:
      'How do we help people recognize and reflect on moments of subtle bias as they naturally occur in speech and body language?',
    role: 'UX Designer & Product Strategist',
    timeline: '4 months',
    year: '2025',
    tag: 'UX Design',
    tags: ['UX Design', 'Behavioral Design', 'AI Product'],
    stat: '35 early users · 60% increase in self-reported awareness',
    description:
      'A wearable product concept that surfaces subtle bias in real-time speech and body language to support reflection and long-term behavioral awareness.',
    accentColor: '#E8B4BC',
    accentBg: '#fdf0f2',
    tagColor: '#C4365A',
    coverImage: microsenseImage,
    overview: '',
    challenge: '',
    customContent: <MicrosenseModalContent />,
    insights: '',
  },
  {
    id: '2',
    title: 'Internal Member Archive',
    problem: 'How to design an alumni management system that allows personalized connections?',
    role: 'UX Designer',
    timeline: '5 months',
    year: '2025',
    tag: 'UX Design',
    tags: ['UX Design', 'Information Architecture', 'Alumni Systems'],
    stat: '20 user interviews · 3 key pain points',
    description:
      'Designing an alumni management system that enables meaningful, personalized connections across a growing community.',
    accentColor: '#E8B4BC',
    accentBg: '#fdf0f2',
    tagColor: '#C4365A',
    coverImage:
      'https://images.unsplash.com/photo-1650407422773-2bcd0ac4f638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXZlJTIwY29tbXVuaXR5JTIwY29ubmVjdGlvbnMlMjB3YXJtfGVufDF8fHx8MTc3MzE2NzY5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    coverElement: <IMAMockup />,
    overview:
      'Designing an alumni management system that enables meaningful, personalized connections across a growing community.',
    challenge:
      'The absence of a centralized alumni directory makes it difficult for members to maintain connections and discover mentorship opportunities.',
    customContent: <IMAModalContent />,
    insights:
      "The biggest unlock wasn't a feature — it was removing friction from the first impression. Once members could see a face, a tagline, and a few tags, reaching out felt personal rather than cold.",
  },
];

type Project = (typeof projects)[number];

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="py-20 sm:py-28 md:py-36 px-4 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Selected Work" accentColor="var(--accent-pink)" />

          <p
            className="mt-2 mb-16 sm:mb-20 opacity-40 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.18em' }}
          >
            PRODUCT MANAGEMENT&nbsp;&nbsp;·&nbsp;&nbsp;UX DESIGN&nbsp;&nbsp;·&nbsp;&nbsp;Research
          </p>

          <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                role={project.role}
                tags={[...project.tags]}
                year={project.year}
                description={project.description}
                accentColor={project.accentColor}
                tagColor={project.tagColor}
                accentBg={project.accentBg}
                coverImage={project.coverImage}
                coverElement={'coverElement' in project ? project.coverElement : undefined}
                onClick={() => setSelectedProject(project)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal
        caseStudy={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
