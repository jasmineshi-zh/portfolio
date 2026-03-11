import { ReactNode } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  children: ReactNode;
}

export function ExperienceCard({ title, company, period, children }: ExperienceCardProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          <p className="text-base sm:text-lg opacity-70">{company}</p>
        </div>
        <span className="text-xs sm:text-sm opacity-60 font-light whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-2 opacity-80 font-light ml-5 list-disc text-sm sm:text-base">
        {children}
      </ul>
    </div>
  );
}
