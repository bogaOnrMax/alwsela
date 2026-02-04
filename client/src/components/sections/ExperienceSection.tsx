import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "IT Engineer & Low Current Engineer",
    company: "Emdadat Alatta CO.",
    period: "Feb 2024 - Present",
    description: "Leading technical initiatives and managing low-current systems"
  },
  {
    title: "Site Engineering & Low Current Systems",
    company: "IT Shield Security",
    period: "Oct 2023 - Feb 2024",
    description: "Site engineering and security system implementation"
  },
  {
    title: "Network, Low Current Engineer",
    company: "Shumookh Group LTD",
    period: "Oct 2022 - Oct 2023",
    description: "Network design and low-current system management"
  },
  {
    title: "Technical Support & Low Current Systems",
    company: "Alsadeg System Security",
    period: "Jul 2022 - Sep 2022",
    description: "Technical support and security system maintenance"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="text-blue-400 text-sm font-mono">02</div>
          <h2 className="text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card glow-effect p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
