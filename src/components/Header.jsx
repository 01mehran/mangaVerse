// Icons;
import { Search, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <article className="text-xl font-bold tracking-wide">
          <span className="text-white">manga</span>
          <span className="text-purple-500">Verse</span>
        </article>

        {/* Search (desktop) */}
        <article className="hidden w-72 items-center rounded-full bg-white/5 px-3 py-2 md:flex">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search manga..."
            className="w-full bg-transparent px-2 text-sm text-white placeholder-gray-500 outline-none"
          />
        </article>

        {/* Right Icons */}
        <article className="flex items-center gap-4">
          <button className="transition hover:text-purple-400">
            <User size={20} />
          </button>

          {/* Mobile menu */}
          <button className="transition hover:text-purple-400 md:hidden">
            <Menu size={22} />
          </button>
        </article>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-3 md:hidden">
        <article className="flex items-center rounded-full bg-white/5 px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search manga..."
            className="w-full bg-transparent px-2 text-sm text-white placeholder-gray-500 outline-none"
          />
        </article>
      </div>
    </header>
  );
}
