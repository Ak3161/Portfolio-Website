const Projects = () => {
  return (
    <section className="py-24 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-black tracking-tighter mb-16 text-center">Selected <span className="gradient-text">Works</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container-high transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Modern hotel or hostel interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB880ja8CxG4wXHTIhIQpYIUMCkQBBT1eDcE_VWoJ6H_EN5nj-grq5O-zWZBfh1DyoZJ_x9lHeTac8DRft6ObcVWTle27ns45RSFhbx1sW3xxxyJ0SaWosqDwBvZVM02m_UUyrT1kwHTttngwQhdiUthosPSR5DQIuIRKnK9f1hUNgjGVgbS0yUle2h4tITotxIh39QcrUv3AJ9_tXOGDYYGKEVnRzfRmWofqoMegUpcjymOOrNQIJUIAcRz5xIX4WWb_qqakjEIcA"
              />
              <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase tracking-widest font-bold">Spring Boot</span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase tracking-widest font-bold">Razorpay</span>
              </div>
              <h3 className="text-2xl font-black mb-3">Hostel Booking Website</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Fully integrated booking system featuring secure payment gateways and comprehensive REST API services.</p>
              <div className="flex items-center justify-between">
                <a className="text-primary-fixed-dim flex items-center gap-2 group/link" href="https://github.com/Ak3161/Hostel-Website.git" target="_blank"
                  rel="noopener noreferrer">
                  <span className="font-bold text-sm">View Source</span>
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <span className="material-symbols-outlined text-on-surface-variant">terminal</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container-high transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="AI visualization with light nodes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTCjNMIB0D12ElEOdl30CFU4cs0d3PE4HN2dpEo6uoMWG50TWXKZOeVPBuAtYAtBWZcKpZI7ZCdWWF8hRWHmYmTy3W9vo4ZNgBleUtmF4Wsy3g96HUDGVJwJNKMNy1YpbJubPpzxcL1sLioPXqxoyLFSlE3l6klqf9_s2PE8TyVrYQ5Nm_rg-LdCEB_2VNwOeDfuE7JX9Sb_1swFpidflT91HGda7uXN9Hay-_CbEmIarWbQAH8QgDaH_bDpHexAxNPOgulKX-IiI"
              />
              <div className="absolute inset-0 bg-secondary-container/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase tracking-widest font-bold">OpenAI</span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase tracking-widest font-bold">Ollama</span>
              </div>
              <h3 className="text-2xl font-black mb-3">AI-Powered Spring App</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Intelligent backend system with real-time chat capabilities and Text-to-Speech (TTS) engine integration.</p>
              <div className="flex items-center justify-between">
                <a className="text-primary-fixed-dim flex items-center gap-2 group/link" href="https://github.com/Ak3161/Spring--Ai-Open-Ai-and-Ollama-.git" target="blank" rel="noopener noreferrer" >
                  <span className="font-bold text-sm">View Source</span>
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <span className="material-symbols-outlined text-on-surface-variant">psychology</span>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group relative bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container-high transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Night city ride hailing abstract"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgMtN13Qsjt35yI9QcYJSRJBXhkeODY7dt922mSd3jtaRFd0XhzIRwNv-3MjP--y34tCaMedoKPBLBnxrP8O4DGZtcepx6M9-nz2OqX-0tZPRxYjH1eqxUV6Oz9Iq8lGePu6xIDDnE72AtjIvsWdnS5r8-GLTgFovB6BhQrwg994EXSVJj0hK8DEEjYCHaOipJToehBlVitC1I2GEhgpdnR3evs5OVvwOwHmfrZHxYYgh9ho167oKf7Rd1ysEZFGywoSxFmX-Viw"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase tracking-widest font-bold">Security</span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase tracking-widest font-bold">MySQL</span>
              </div>
              <h3 className="text-2xl font-black mb-3">Ride Booking System</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Robust backend infrastructure with high-level security protocols for passenger and ride management.</p>
              <div className="flex items-center justify-between">
                <a className="text-primary-fixed-dim flex items-center gap-2 group/link" href="https://github.com/Ak3161/Cabbie-Backend.git" target="blank" rel="noopener noreferrer">
                  <span className="font-bold text-sm">View Source</span>
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <span className="material-symbols-outlined text-on-surface-variant">commute</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
