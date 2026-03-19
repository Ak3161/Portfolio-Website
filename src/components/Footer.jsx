const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-zinc-800/20 bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full gap-6">
        <p className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-light text-zinc-500">© 2024 Aniket Kumawat. Built with Kinetic Luminary logic.</p>
        <div className="flex gap-8">
          <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-light text-zinc-600 hover:text-violet-300 transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-light text-zinc-600 hover:text-violet-300 transition-colors opacity-80 hover:opacity-100" href="#">GitHub</a>
          <a className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] font-light text-zinc-600 hover:text-violet-300 transition-colors opacity-80 hover:opacity-100" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
