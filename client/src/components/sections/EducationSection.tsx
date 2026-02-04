import { GraduationCap, Award } from "lucide-react";

/**
 * Design: Technical Blueprint - Education with university and training sections
 * Glass cards with neon accents
 */

interface Education {
  university: {
    name: string;
    field: string;
    dates: string;
  };
  training: Array<{
    provider: string;
    name: string;
    dates: string;
  }>;
}

interface EducationSectionProps {
  education: Education;
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 relative circuit-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="section-number mr-4">04.</span>
              <span className="text-[var(--tech-white)]">Education & Training</span>
            </h2>
            <div className="gradient-line w-32"></div>
          </div>

          {/* University */}
          <div className="glass-card p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--tech-neon)]/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-[var(--tech-neon)]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[var(--tech-white)] mb-2">
                  {education.university.name}
                </h3>
                <p className="text-[var(--tech-neon)] font-medium mb-1">
                  {education.university.field}
                </p>
                <p className="text-sm text-[var(--tech-slate)] font-mono">
                  {education.university.dates}
                </p>
              </div>
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--tech-white)] mb-6 flex items-center gap-3">
              <Award className="text-[var(--tech-neon)]" size={28} />
              Certifications & Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.training.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-5 hover:scale-[1.02] transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-[var(--tech-white)] mb-2">{cert.name}</h4>
                  <p className="text-[var(--tech-slate-light)] text-sm mb-1">{cert.provider}</p>
                  <p className="text-xs text-[var(--tech-slate)] font-mono">{cert.dates}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
