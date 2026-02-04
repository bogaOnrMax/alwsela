import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <div className="mb-8 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Abdalbagi
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Alwsela
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Telecommunications & Network Engineer
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Dedicated professional with expertise in IT support, networking, and low-current systems.
          Based in Riyadh, Saudi Arabia.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("about")}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-smooth mb-16"
        >
          Explore My Work
          <ChevronDown className="w-5 h-5" />
        </button>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
