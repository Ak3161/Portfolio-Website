const Hero = () => {
  return (
    <section className="relative min-height-[1024px] flex items-center justify-center pt-32 pb-24 overflow-hidden glow-bg" id="hero">
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <span className="label-sm uppercase tracking-[0.2em] text-primary-fixed-dim mb-6 block">Java Backend Developer</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight mb-6">
          Aniket <span className="gradient-text">Kumawat</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
          Building scalable backend systems with AI-powered capabilities. Focused on architecting the next generation of digital infrastructure.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a className="px-8 py-4 bg-gradient-to-r from-primary-container to-secondary-container rounded-md font-bold text-white shadow-lg hover:opacity-90 transition-all" href="#projects">
            View Projects
          </a>
          <button className="px-8 py-4 border border-outline-variant/30 rounded-md font-bold text-primary-fixed-dim hover:bg-surface-container-high transition-all">
            <a href="https://drive.google.com/drive/folders/1Y6NWtvDIxUWLMNN7ELkfc4Ng4dlK3a8B?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto" target="blank" rel="noopener noreferrer">Download Resume</a>
          </button>
        </div>
      </div>
      {/* Decorative Light Leak */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-container/5 blur-[150px] rounded-full"></div>
    </section>
  );
};

export default Hero;
