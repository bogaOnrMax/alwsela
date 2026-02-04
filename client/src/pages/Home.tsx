import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Navigation from "@/components/Navigation";

/**
 * Design: Technical Blueprint Aesthetic
 * - Navy blue background with neon green accents
 * - Circuit board patterns and hexagonal grids
 * - JetBrains Mono for headings, Inter for body
 * - Glass card effects with backdrop blur
 */

interface ProfileData {
  name_display: string;
  name_full: string;
  title: string;
  location: string;
  nationality: string;
  dob: string;
  languages: Array<{ name: string; level: string }>;
  contact: {
    email: string;
    phone: string;
    mobile: string;
    linkedin: string;
    github: string;
  };
}

interface ContentData {
  summary: string;
  metrics: Array<{ label: string; value: string }>;
  experience: Array<{
    company: string;
    role: string;
    dates: string;
    bullets: string[];
  }>;
  skills: Array<{
    group: string;
    items: string[];
  }>;
  education: {
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
  };
}

export default function Home() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/data/profile.json").then((r) => r.json()),
      fetch("/data/content.json").then((r) => r.json()),
    ])
      .then(([profileData, contentData]) => {
        setProfile(profileData);
        setContent(contentData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-[var(--tech-neon)] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[var(--tech-slate)]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!profile || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--tech-slate)]">Failed to load data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection profile={profile} />
        <AboutSection content={content} />
        <ExperienceSection experience={content.experience} />
        <SkillsSection skills={content.skills} />
        <EducationSection education={content.education} />
        <ContactSection contact={profile.contact} />
      </main>
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name_full,
          jobTitle: profile.title,
          address: {
            "@type": "PostalAddress",
            addressLocality: profile.location,
          },
          email: profile.contact.email,
          telephone: profile.contact.phone,
          nationality: profile.nationality,
          birthDate: profile.dob,
          url: typeof window !== "undefined" ? window.location.href : "",
        })}
      </script>
    </div>
  );
}
