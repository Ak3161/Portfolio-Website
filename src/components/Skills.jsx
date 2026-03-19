const Skills = () => {
  const skills = [
    { icon: "terminal", label: "Java", colorClass: "text-primary", bgClass: "bg-primary-container/20" },
    { icon: "code", label: "Python", colorClass: "text-secondary", bgClass: "bg-secondary-container/20" },
    { icon: "bolt", label: "Spring Boot", colorClass: "text-primary", bgClass: "", isWhiteText: true },
    { icon: "lock", label: "Security", colorClass: "text-red-400" },
    { icon: "database", label: "MySQL", colorClass: "text-yellow-400" },
    { icon: "psychology", label: "Spring AI", colorClass: "text-green-400" },
    { icon: "cloud", label: "AWS", colorClass: "text-blue-400" },
    { icon: "api", label: "Postman", colorClass: "text-orange-400" },
    { icon: "account_tree", label: "Git / GitHub", colorClass: "text-purple-400" },
    { icon: "grid_view", label: "Hibernate", colorClass: "text-blue-500" }
  ];

  return (
    <section className="py-24" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4">Technical <span className="text-secondary">Arsenal</span></h2>
          <p className="text-on-surface-variant uppercase tracking-[0.3em] text-[10px]">The tools of my craft</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-all">
              <div className={`flex items-center gap-4 ${skill.isWhiteText ? 'text-primary' : ''}`}>
                {skill.bgClass ? (
                  <div className={`w-10 h-10 ${skill.bgClass} rounded-full flex items-center justify-center ${skill.colorClass}`}>
                    <span className="material-symbols-outlined">{skill.icon}</span>
                  </div>
                ) : (
                  <span className={`material-symbols-outlined ${skill.colorClass}`}>{skill.icon}</span>
                )}
                <span className={`font-medium ${skill.isWhiteText ? 'text-white' : ''}`}>{skill.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
