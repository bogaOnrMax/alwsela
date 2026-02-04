import { Code2, Shield, FileText, Users } from "lucide-react";

/**
 * Design: Technical Blueprint - Skills grid with icon categories
 * Hexagonal pattern background with glass cards
 */

interface Skill {
  group: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: Skill[];
}

const iconMap: Record<string, React.ReactNode> = {
  "Technical Support & Operations": <Code2 size={24} />,
  "Troubleshooting & Problem Solving": <Shield size={24} />,
  "Security & Compliance": <Shield size={24} />,
  "Documentation & Collaboration": <FileText size={24} />,
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 relative hex-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="section-number mr-4">03.</span>
              <span className="text-[var(--tech-white)]">Skills & Expertise</span>
            </h2>
            <div className="gradient-line w-32 mx-auto"></div>
          </div>

          {/* Skills Visual */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/tU9TtZclkoFqe4RcqeS4xx/sandbox/cDyt50cJrwOABeNH9BQDoW-img-3_1770214270000_na1fn_c2tpbGxzLXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFU5VHRaY2xrb0ZxZTRSY3FlUzR4eC9zYW5kYm94L2NEeXQ1MGNKcndPQUJlTkg5QlFEb1ctaW1nLTNfMTc3MDIxNDI3MDAwMF9uYTFmbl9jMnRwYkd4ekxYWnBjM1ZoYkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=k0iNQnaQzg5IYGk2umg~ELfUwIR7FEjVKIlmcNbH5ujgk17PGgYutgi-dszCPDy4yLTybZgi8Ay1BT0hzbuTIo-qqcfOhj8fBTCCzfL3dJf4F5SraSZ2kbraY8bgg9axfVJMJDJGlhtYIRYnKn7fsuoH7VXla-J59j5yxZsrWQuVo5TE35kNBYBohek84kp5srYTiL312l0dwLJymtaW2WZql9oxq77uSHNI-ga9qnpa0Q458Qpn5Uhc0EokLUImmo3FwdDw3MjmmxcreB4zrs8GTR8VBcpfL5bKXMQbZ9CaIsD2cbOlQWZd7clXbm-mAwqw0wn68IXjbxMHFP0-mQ__"
                alt="IT Infrastructure"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--tech-neon)]/20 flex items-center justify-center text-[var(--tech-neon)]">
                    {iconMap[skill.group] || <Users size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--tech-white)]">{skill.group}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-[var(--tech-slate-light)] flex items-start gap-2">
                      <span className="text-[var(--tech-neon)] mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
