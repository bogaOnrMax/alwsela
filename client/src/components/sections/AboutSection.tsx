export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="text-blue-400 text-sm font-mono">01</div>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </div>

        <div className="glass-card glow-effect p-8 mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            Dedicated and experienced technician in low-current systems, IT support, smart home, and networking, 
            with a strong passion for staying updated with the latest technologies. Proficient in a wide range of systems, 
            with a proven track record of delivering exceptional technical support and solutions.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-blue-400 font-mono text-sm mb-2">Location</h3>
            <p className="text-white text-lg">Riyadh (Olaya)</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-blue-400 font-mono text-sm mb-2">Scope</h3>
            <p className="text-white text-lg">IT • Low Current • Networking</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-blue-400 font-mono text-sm mb-2">Languages</h3>
            <p className="text-white text-lg">Arabic (Native) • English (Average)</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-blue-400 font-mono text-sm mb-2">Experience</h3>
            <p className="text-white text-lg">2017–Now (multi-role)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
