import { motion } from 'motion/react';
import { Book, Coffee, Headphones, Sparkles } from 'lucide-react';
import { ActivityCard } from './ui/ActivityCard';

const currentActivities = [
  { icon: Book, label: 'Reading', value: 'Technology of Gender', color: '#6B8DB5' },
  { icon: Coffee, label: 'Brewing', value: 'Jasmine Tea', color: '#F4D35E' },
  { icon: Headphones, label: 'Listening', value: 'Maybe Happy Ending', color: '#E8B4BC' },
  { icon: Sparkles, label: 'Exploring', value: 'Blender and 3D Modeling', color: '#6B8DB5' },
];

export function CurrentlySection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Currently</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {currentActivities.map((activity, index) => (
              <ActivityCard
                key={index}
                icon={activity.icon}
                label={activity.label}
                value={activity.value}
                color={activity.color}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
