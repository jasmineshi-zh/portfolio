import { SectionHeader } from './ui/SectionHeader';
import { PrincipleCard } from './ui/PrincipleCard';

const principles = [
  {
    id: 1,
    title: 'Research Before Roadmaps',
    description:
      'Deep understanding precedes effective strategy. Commit to knowing your users before committing to solutions.',
    color: '#6B8DB5',
  },
  {
    id: 2,
    title: 'Technology Adapts to People',
    description:
      'Not the other way around. Good design meets people where they are — culturally, contextually, and on their own terms.',
    color: '#E8B4BC',
  },
  {
    id: 3,
    title: 'Equity Is Non-Negotiable',
    description:
      "Accessibility and inclusion aren't constraints to work around — they're the standard. Products designed for the margins work better for everyone.",
    color: '#F4D35E',
  },
  {
    id: 4,
    title: 'Measure What Matters',
    description:
      'Metrics shape what we build and who we build it for. Choose them carefully — what you optimize for becomes what you stand for.',
    color: '#6B8DB5',
  },
];

export function ProductPrinciples() {
  return (
    <section
      id="principles"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12"
      style={{ backgroundColor: '#F5F5F3' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Product Principles" accentColor="var(--accent-blue)" />

        <div className="space-y-6 sm:space-y-8">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={principle.id}
              number={index + 1}
              title={principle.title}
              description={principle.description}
              color={principle.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
