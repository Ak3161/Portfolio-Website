const Education = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="education">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-black tracking-tighter mb-16 text-center">Education</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 bg-surface-container-high rounded-3xl flex flex-col justify-between">
            <div>
              <span className="label-sm text-primary mb-4 block">2022 – 2026</span>
              <h3 className="text-3xl font-black mb-2">BE Computer Engineering</h3>
              <p className="text-on-surface-variant text-lg">Pune, Maharashtra</p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-primary-fixed-dim">school</span>
              <p className="text-sm text-on-surface-variant/80">Specializing in distributed systems and cloud architecture.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-8 bg-surface-container rounded-3xl border border-outline-variant/10">
              <h4 className="label-sm mb-4">HSC (Science)</h4>
              <p className="text-lg text-muted-foreground">
                Built strong foundation in Physics, Mathematics, and Logical Problem Solving
              </p>
            </div>

            <div className="p-8 bg-surface-container rounded-3xl border border-outline-variant/10">
              <h4 className="label-sm mb-4">CBSE (Class 10)</h4>
              <p className="text-lg text-muted-foreground">
                Developed analytical thinking and interest in technology & programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
