const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-white bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">AK</div>
        <div className="hidden md:flex items-center gap-8 font-['Inter'] tracking-tight font-medium text-sm">
          <a className="text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-violet-500 after:rounded-full" href="#hero">Myself</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#about">About</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#skills">Skills</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#projects">Projects</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#experience">Experience</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#contact">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-primary-container to-secondary-container text-white px-5 py-2 rounded-md font-medium text-sm hover:scale-95 active:scale-90 transition-all duration-300">
          <a href="https://github.com/Ak3161" target="blank" rel="noopener noreferrer">GitHub</a>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
