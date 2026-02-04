import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Support & Operations",
    skills: ["Ticket Management", "User Support", "SLA Management", "Preventive Maintenance"]
  },
  {
    title: "Troubleshooting & Problem Solving",
    skills: ["Diagnostics", "Root Cause Analysis", "Configuration", "Hardware Repair"]
  },
  {
    title: "Security & Compliance",
    skills: ["Security Standards", "Information Security", "Incident Response", "Compliance"]
  },
  {
    title: "Networking & Systems",
    skills: ["Network Design", "Low Current Systems", "CCTV", "Smart Home"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="text-blue-400 text-sm font-mono">03</div>
          <h2 className="text-4xl font-bold text-white">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card glow-effect p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
