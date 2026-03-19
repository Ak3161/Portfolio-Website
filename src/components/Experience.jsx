const Experience = () => {
  return (
    <section className="py-24" id="experience">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24">
        {/* Experience */}
        <div>
          <h2 className="text-3xl font-black tracking-tighter mb-12">Experience</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-outline-variant/30">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary rounded-full"></div>
              <span className="label-sm text-primary-fixed-dim mb-2 block">Jan 2025 – Mar 2025</span>
              <h3 className="text-xl font-bold">Backend Intern</h3>
              <p className="text-on-surface-variant mb-4">Zidio Development</p>
              <p className="text-on-surface-variant text-sm">Engineered an expense management system using Spring Boot and MySQL, optimizing transaction processing and data retrieval speeds.</p>
            </div>
          </div>
        </div>

        {/* Research & Education (Achievements) */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-black tracking-tighter mb-8">Research</h2>
            <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary">
              <h4 className="font-bold mb-2">Automated Fluid Management using IoT</h4>
              <p className="text-sm text-on-surface-variant mb-2 italic">AIDE-2025 Research Paper</p>
              <p className="text-xs text-on-surface-variant/70 uppercase tracking-widest">Ongoing Publication</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tighter mb-8">Achievements</h2>
            <div className="flex items-center gap-4 p-6 bg-surface-container-low rounded-xl">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <h4 className="font-bold">Hacktoberfest 2024</h4>
                <p className="text-xs text-on-surface-variant">Active Contributor to Open Source Ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
