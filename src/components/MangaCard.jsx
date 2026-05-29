// React-router-dom;
import { Link } from "react-router-dom";

// Static image;
import mangaImage from "../assets/manga.jfif";

export default function MangaCard({ manga }) {
  return (
    <Link to={`/manga/${manga.id}`}>
      <div className="group shadow-card hover:shadow-card-hover cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:scale-[1.03] dark:border-white/10 dark:bg-gray-900">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={mangaImage}
            alt={`Cover of ${manga.title}`}
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Score badge */}
          <div className="absolute top-3 right-3 rounded-lg bg-black/70 px-2 py-1 text-sm text-yellow-300 backdrop-blur">
            ⭐ {manga.score}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 p-4">
          {/* Title */}
          <h3 className="truncate text-lg font-bold text-slate-900 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-purple-400">
            {manga.title}
          </h3>

          {/* Genres */}
          <div className="mt-2 flex flex-wrap gap-2">
            {manga.genres?.slice(0, 2).map((g, i) => (
              <span
                key={i}
                className="rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700 dark:bg-purple-500/20 dark:text-purple-300"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Status */}
          <span className="text-sm font-medium text-slate-500 dark:text-gray-400">
            {manga.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
