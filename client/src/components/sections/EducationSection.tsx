import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Sudan University of Science and Technology",
    degree: "Information Technology",
    period: "Feb 2015 - Oct 2018"
  },
  {
    school: "CompTIA Linux+",
    degree: "Certification",
    period: "Dec 2019"
  },
  {
    school: "CompTIA Security+",
    degree: "Certification",
    period: "Nov 2019"
  },
  {
    school: "Cloud and Cyber Security, Microsoft Azure",
    degree: "Certification",
    period: "May 2019 - Jul 2019"
  },
  {
    school: "Cisco - CCNA",
    degree: "Certification",
    period: "Aug 2018 - Sep 2018"
  },
  {
    school: "Microsoft MCSA",
    degree: "Certification",
    period: "Mar 2018 - Apr 2018"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="text-blue-400 text-sm font-mono">04</div>
          <h2 className="text-4xl font-bold text-white">Education & Training</h2>
        </div>

        <div className="space-y-4">
          {education.map((item, index) => (
            <div key={index} className="glass-card glow-effect p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{item.school}</h3>
                  <p className="text-blue-400 text-sm mb-2">{item.degree}</p>
                  <p className="text-gray-400 text-sm">{item.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
