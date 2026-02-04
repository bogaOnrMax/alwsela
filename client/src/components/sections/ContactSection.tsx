import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "A.alwsela@Yahoo.com", href: "mailto:A.alwsela@Yahoo.com" },
  { icon: Phone, label: "Phone (KSA)", value: "+(966)503442003", href: "tel:+966503442003" },
  { icon: Phone, label: "Mobile (Sudan)", value: "+(249)903442003", href: "tel:+249903442003" },
  { icon: Linkedin, label: "LinkedIn", value: "Abdalbagi Alwsela", href: "https://linkedin.com/in/abdalbagi-alwsela" },
  { icon: Github, label: "GitHub", value: "One-5G", href: "https://github.com/One-5G" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="text-blue-400 text-sm font-mono">05</div>
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        </div>

        <div className="glass-card glow-effect p-8 mb-12 text-center">
          <p className="text-gray-300 text-lg mb-8">
            I'm always open to discussing new opportunities, projects, or collaborations.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glow-effect p-6 hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-sm font-mono text-blue-400">{link.label}</h3>
                </div>
                <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                  {link.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm">
            © 2026 Abdalbagi Alwsela. Built with precision and passion.
          </p>
        </div>
      </div>
    </section>
  );
}
