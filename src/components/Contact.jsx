const Contact = () => {
  return (
    <section className="py-24" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-8">Let's <span className="gradient-text">Collaborate</span></h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              I'm currently looking for new opportunities in Java Backend development and AI integration. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 bg-surface-container-low rounded-xl group transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Email</p>
                  <p className="font-bold">aniketkumawat8@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 bg-surface-container-low rounded-xl group transition-colors">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Phone</p>
                  <p className="font-bold">+91 8010462296</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-surface-container-high rounded-3xl relative overflow-hidden">
            <form
              action="https://formspree.io/f/mjgalorq"
              method="POST"
              className="space-y-6 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Your Name</label>
                  <input name="name" className="w-full bg-surface-container-lowest rounded-md p-4" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Email Address</label>
                  <input name="email" className="w-full bg-surface-container-lowest rounded-md p-4" placeholder="john@example.com" type="email" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Message</label>
                <textarea name="message" className="w-full bg-surface-container-lowest rounded-md p-4" rows="4"></textarea>
              </div>

              <button
                className="w-full py-4 bg-gradient-to-r from-primary-container to-secondary-container rounded-md font-bold text-white"
                type="submit"
              >
                Send Message
              </button>
            </form>
            {/* Ghost Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
