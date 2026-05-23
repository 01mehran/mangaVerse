// Static image;
import mangaImage from "../assets/manga.jfif";

export default function MangaCard({ manga }) {
  return (
    <section>
      <div className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={mangaImage}
            alt={manga.title}
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Score badge */}
          <div className="absolute top-3 right-3 rounded-lg bg-black/70 px-2 py-1 text-sm text-yellow-300 backdrop-blur">
            ⭐ {manga.score}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-1.5 p-4">
          {/* Title */}
          <h3 className="truncate text-lg font-bold text-white transition group-hover:text-purple-400">
            {manga.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {manga.genres?.slice(0, 2).map((g, i) => (
              <span
                key={i}
                className="rounded-md bg-purple-500/20 px-2 py-1 text-xs text-purple-300"
              >
                {g}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-400">{manga.status}</span>
        </div>
      </div>
    </section>
  );
}
