const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-zinc-800/20 bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full gap-6">
        <p className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-light text-zinc-500">© 202 Aniket Kumawat</p>
        <div className="flex gap-8">
          <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-light text-zinc-600 hover:text-violet-300 transition-colors opacity-80 hover:opacity-100" href="www.linkedin.com/in/aniket-kumawat15">LinkedIn</a>
          <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-light text-zinc-600 hover:text-violet-300 transition-colors opacity-80 hover:opacity-100" href="https://github.com/Ak3161">GitHub</a>
          <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-light text-zinc-600 hover:text-violet-300 transition-colors opacity-80 hover:opacity-100" href="aniketkumawat8@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
