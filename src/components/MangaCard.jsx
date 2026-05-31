// React-router-dom;
import { Link } from "react-router-dom";

export default function MangaCard({ manga }) {
  return (
    <Link to={`/manga/${manga.mal_id}`}>
      <article className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-gray-900">
        {/* Cover */}
        <div className="relative aspect-3/4 overflow-hidden">
          <img
            src={manga.images.jpg.image_url}
            alt={`Cover of ${manga.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Score */}
          <div className="absolute top-3 right-3 rounded-lg bg-black/70 px-2 py-1 text-sm font-medium text-yellow-300 backdrop-blur">
            ⭐ {manga.score.toFixed(1) ?? "N/A"}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 p-4">
          {/* Title */}
          <h3 className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white">
            {manga.title}
          </h3>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {manga.genres?.slice(0, 2).map((genre) => (
              <span
                key={genre.mal_id}
                className="rounded-full bg-indigo-400/20 px-2.5 py-1 text-xs font-medium text-indigo-600 dark:bg-purple-500/20 dark:text-purple-300"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-white/10">
            <span className="text-sm text-slate-500 dark:text-gray-400">
              {manga.status}
            </span>

            <span className="text-sm font-semibold text-indigo-500 dark:text-purple-400">
              #{manga.rank}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
