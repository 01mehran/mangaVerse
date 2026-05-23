export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-gray-950">
      <div className="container mx-auto px-4 py-10 2xl:max-w-400">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Logo & text */}
          <div className="text-center lg:text-left">
            <article className="flex items-center justify-center text-xl font-bold tracking-wide lg:justify-start">
              <span className="text-white">manga</span>
              <span className="text-purple-500">Verse</span>
            </article>

            <p className="mt-3 max-w-sm text-gray-400">
              Discover your next favorite manga and <br /> explore legendary
              stories.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="transition hover:text-purple-400">
              Home
            </a>

            <a href="#" className="transition hover:text-purple-400">
              Top Manga
            </a>

            <a href="#" className="transition hover:text-purple-400">
              Search
            </a>
          </nav>

          <div className="text-sm text-gray-500">
            “Read. Explore. Become legendary.”
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 MangaVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
