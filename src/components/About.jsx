const About = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square bg-surface-container-high rounded-2xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-700"
              alt="Abstract code and hardware visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBypCbPZCPlTCKTXbi1QZxHf46DELSBoiDZD9Sq7iCGy08K0SNuUDQiRgkxCpERGi5RtblDrtllcS2mUc269vNhyKPeoYHSOZikgcI2kLuG7Ll4XJikN3uqhEImxFpoEGIujkkXo8fFfYBSO3D9Xav99NXFQMmHsqDdiMJ94rXMrMkJI0Z8zuSX17FlJ_5N0Uh6gl9N7qmWNKfSmcsBfk2vZxLoDAbvAY__GXJR0gu4WXrDU6rwBiRM0XlUYxF0nwafD43PIJ2WZfU"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 bg-surface-bright rounded-xl shadow-2xl">
            <span className="text-4xl font-black text-primary">4+</span>
            <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-2">Projects Completed</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-black tracking-tighter mb-8">About <span className="text-primary">Me</span></h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            I am a dedicated Java Backend Developer currently pursuing my BE in Computer Engineering. My expertise lies in architecting robust server-side applications using the Spring ecosystem.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
            Beyond traditional backend engineering, I'm passionate about integrating Artificial Intelligence into modern applications, leveraging technologies like Spring AI and OpenAI to create intelligent, responsive systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container rounded-lg">
              <span className="material-symbols-outlined text-primary mb-2">cloud_done</span>
              <h4 className="font-bold">Backend System</h4>
            </div>
            <div className="p-4 bg-surface-container rounded-lg">
              <span className="material-symbols-outlined text-primary mb-2">smart_toy</span>
              <h4 className="font-bold">AI Integration</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
