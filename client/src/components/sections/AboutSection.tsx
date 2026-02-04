/**
 * Design: Technical Blueprint - About section with metrics cards
 * Glass cards with circuit pattern background
 */

interface ContentData {
  summary: string;
  metrics: Array<{ label: string; value: string }>;
}

interface AboutSectionProps {
  content: ContentData;
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 relative circuit-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="section-number mr-4">01.</span>
              <span className="text-[var(--tech-white)]">About Me</span>
            </h2>
            <div className="gradient-line w-32"></div>
          </div>

          {/* Summary */}
          <div className="glass-card p-8 mb-8">
            <p className="text-lg text-[var(--tech-slate-light)] leading-relaxed">
              {content.summary}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.metrics.map((metric, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[var(--tech-neon)] pulse-glow"></div>
                  <div>
                    <h3 className="text-sm font-mono text-[var(--tech-neon)] mb-1 uppercase tracking-wider">
                      {metric.label}
                    </h3>
                    <p className="text-[var(--tech-white)] font-medium">{metric.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
