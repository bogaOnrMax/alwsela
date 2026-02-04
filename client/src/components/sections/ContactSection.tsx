import { Mail, Phone, Smartphone, Linkedin, Github } from "lucide-react";

/**
 * Design: Technical Blueprint - Contact section with network pattern
 * Glass cards with contact information and social links
 */

interface Contact {
  email: string;
  phone: string;
  mobile: string;
  linkedin: string;
  github: string;
}

interface ContactSectionProps {
  contact: Contact;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/tU9TtZclkoFqe4RcqeS4xx/sandbox/cDyt50cJrwOABeNH9BQDoW-img-2_1770214276000_na1fn_bmV0d29yay1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFU5VHRaY2xrb0ZxZTRSY3FlUzR4eC9zYW5kYm94L2NEeXQ1MGNKcndPQUJlTkg5QlFEb1ctaW1nLTJfMTc3MDIxNDI3NjAwMF9uYTFmbl9ibVYwZDI5eWF5MXdZWFIwWlhKdS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rttCiytlViI~wVdHBRSAOXFZRzoSsC-LhNBdQGIae5dgkC9IrUySB7lpuPxe4Pf0pGWZrOK0xOin6bug3JfsyYh~vI3pU6aXxzyZo4NfmJWSQKgjJ6Zig2w1bQOqZm4qOON2mKHMOwu4HdLkJ~HxGEM01PRhn6kZW~aBMtSoGF984IFzvY2z3ETPVWMKeGOmVyeR2yRvY7ODMF2rWxW0bYU5a7j3Gn6fKWYPKjuqGsdr5Z59OfQFt7uXahNN8s4wmz~fttVNRxpWzSWN4Q0Tt3dNdeaK2G~gRTIHXiG5DjVfCxdMvkBTf6f8mYZNaUd-DS5WS-jUgd4WDg1KKXzKoQ__')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--tech-navy)]/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="section-number mr-4">05.</span>
              <span className="text-[var(--tech-white)]">Get In Touch</span>
            </h2>
            <div className="gradient-line w-32 mx-auto mb-6"></div>
            <p className="text-lg text-[var(--tech-slate-light)] max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, projects, or collaborations.
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-neon)]/20 flex items-center justify-center">
                  <Mail className="text-[var(--tech-neon)]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--tech-slate)] mb-1">Email</p>
                  <p className="text-[var(--tech-white)] font-medium">{contact.email}</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-neon)]/20 flex items-center justify-center">
                  <Phone className="text-[var(--tech-neon)]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--tech-slate)] mb-1">Phone (KSA)</p>
                  <p className="text-[var(--tech-white)] font-medium">{contact.phone}</p>
                </div>
              </div>
            </a>

            {/* Mobile */}
            <a
              href={`tel:${contact.mobile}`}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-neon)]/20 flex items-center justify-center">
                  <Smartphone className="text-[var(--tech-neon)]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--tech-slate)] mb-1">Mobile (Sudan)</p>
                  <p className="text-[var(--tech-white)] font-medium">{contact.mobile}</p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/in/${contact.linkedin.replace(/\s+/g, "-").toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover:scale-105 transition-all duration-300 block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--tech-neon)]/20 flex items-center justify-center">
                  <Linkedin className="text-[var(--tech-neon)]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--tech-slate)] mb-1">LinkedIn</p>
                  <p className="text-[var(--tech-white)] font-medium">{contact.linkedin}</p>
                </div>
              </div>
            </a>
          </div>

          {/* GitHub */}
          <div className="text-center">
            <a
              href={`https://github.com/${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-card px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              <Github className="text-[var(--tech-neon)]" size={24} />
              <span className="text-[var(--tech-white)] font-medium">
                View My GitHub Profile
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 relative z-10 mt-20">
        <div className="text-center border-t border-[var(--tech-slate)]/20 pt-8">
          <p className="text-[var(--tech-slate)] text-sm font-mono">
            © {new Date().getFullYear()} Abdalbagi Alwsela. Built with precision and passion.
          </p>
        </div>
      </div>
    </section>
  );
}
