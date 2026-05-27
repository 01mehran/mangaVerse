// Components;
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <Container>
        <div className="py-10">
          <div className="flex flex-col items-center justify-around gap-8 lg:flex-row">
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

            <div className="text-sm text-gray-500">
              “Read. Explore. Become legendary.”
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © 2026 MangaVerse. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
