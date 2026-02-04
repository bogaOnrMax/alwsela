import { Briefcase } from "lucide-react";

/**
 * Design: Technical Blueprint - Timeline with glowing connection line
 * Experience cards with hover effects
 */

interface Experience {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="py-20 relative diagonal-section"
      style={{
        backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/tU9TtZclkoFqe4RcqeS4xx/sandbox/cDyt50cJrwOABeNH9BQDoW-img-4_1770214289000_na1fn_ZXhwZXJpZW5jZS10aW1lbGluZS1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFU5VHRaY2xrb0ZxZTRSY3FlUzR4eC9zYW5kYm94L2NEeXQ1MGNKcndPQUJlTkg5QlFEb1ctaW1nLTRfMTc3MDIxNDI4OTAwMF9uYTFmbl9aWGh3WlhKcFpXNWpaUzEwYVcxbGJHbHVaUzFpWncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CkG4DNKrsGz3cBUmvEVqEbaenWyXB1--cqWtCoCD9RTG2~ckx2kGys7PAFqIRmvpwZ20YBr0M3cDmjARKwXlvNWnmgVwdu0ZEXGYlnTjyybmxxvPOuDgeTTtS6NgQ9e5nE7sL2ZZPjpRvZJZqqW5gFuRhSL1UZTysZYTs8Hf4a0nt1yxhIwxbF0tMAOGHKxjhsx2K8q-QQUvVbIJDraElGpgNs8HYDpX72MyPwz2XR3wHxVSOVn313OC~EZP6zt3oRQuu-cIuwqGIujPh63~405u76sQgF9RXOXFlRxu3VKmFplx5fUlz54Jfb4TTJAP~aGQ4YQcbYX82iinPjLtWA__')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--tech-navy)]/85"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="section-number mr-4">02.</span>
              <span className="text-[var(--tech-white)]">Experience</span>
            </h2>
            <div className="gradient-line w-32"></div>
          </div>

          {/* Timeline */}
          <div className="relative timeline-line pl-8">
            {experience.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[29px] top-2 w-4 h-4 rounded-full bg-[var(--tech-neon)] pulse-glow border-2 border-[var(--tech-navy)]"></div>

                {/* Experience Card */}
                <div className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--tech-neon)]/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-[var(--tech-neon)]" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--tech-white)] mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--tech-neon)] font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-[var(--tech-slate)] font-mono">{exp.dates}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  {exp.bullets.length > 0 && (
                    <ul className="space-y-2 ml-14">
                      {exp.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-[var(--tech-slate-light)] flex items-start gap-2"
                        >
                          <span className="text-[var(--tech-neon)] mt-1">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
