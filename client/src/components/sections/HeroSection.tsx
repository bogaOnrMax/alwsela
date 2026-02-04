import { ArrowDown } from "lucide-react";

/**
 * Design: Technical Blueprint - Hero with circuit board background
 * Large display name with neon glow, animated entrance
 */

interface ProfileData {
  name_display: string;
  title: string;
  location: string;
}

interface HeroSectionProps {
  profile: ProfileData;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/tU9TtZclkoFqe4RcqeS4xx/sandbox/cDyt50cJrwOABeNH9BQDoW-img-1_1770214276000_na1fn_aGVyby10ZWNoLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFU5VHRaY2xrb0ZxZTRSY3FlUzR4eC9zYW5kYm94L2NEeXQ1MGNKcndPQUJlTkg5QlFEb1ctaW1nLTFfMTc3MDIxNDI3NjAwMF9uYTFmbl9hR1Z5YnkxMFpXTm9MV0puLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LtxZO4TcoYSZ1Nk3dh2Iur9wQnd~bbFkxNyhRj2Q3lWgtzx4QRfxO1uCryQm15FBzpwFX9aWyDbJ1idtr80P8deNrC3y8c~Mvq8CF8eNGhTrb-08Ng5yQgZi-~F0zusGJIwS3Nr0jC-6VraeMivIxmTr0~cB2PSaPG1GEglfqbM1Mylu~YEUAJXxZXPhew0khIz18Qqa123BuqCxVfDYtL0NOqNsaPo8fOPRi49zUrZwidO9PAWowHiBZD2dTKDPQoDHqKjdwVQ5xmxA0UJzQAwda7nfRc7qXXCAi2dz4vHy80a8fZ-3wCUtP2PvOLd2upG4LVDytSeiEsOHKeJoCg__')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--tech-navy)]/70"></div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="animate-fade-in-up">
          <p className="section-number mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hi, my name is
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 neon-glow animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {profile.name_display}
          </h1>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-[var(--tech-slate-light)] mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {profile.title}
          </h2>
          <p
            className="text-lg md:text-xl text-[var(--tech-slate)] mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            📍 {profile.location}
          </p>

          {/* Scroll Down Indicator */}
          <button
            onClick={handleScrollDown}
            className="inline-flex items-center gap-2 text-[var(--tech-neon)] hover:text-[var(--tech-white)] transition-colors animate-bounce mt-8"
            aria-label="Scroll down"
          >
            <span className="section-number">Explore</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--tech-navy)] to-transparent"></div>
    </section>
  );
}
