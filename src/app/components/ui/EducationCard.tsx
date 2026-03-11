interface EducationCardProps {
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export function EducationCard({ degree, school, period, details }: EducationCardProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold">{degree}</h3>
          <p className="text-base sm:text-lg opacity-70">{school}</p>
        </div>
        <span className="text-xs sm:text-sm opacity-60 font-light whitespace-nowrap">{period}</span>
      </div>
      {details && <p className="opacity-70 font-light text-sm sm:text-base">{details}</p>}
    </div>
  );
}
