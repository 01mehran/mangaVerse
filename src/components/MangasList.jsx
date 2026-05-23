// Components;
import MangaCard from "./MangaCard";

export default function MangasList({ mangas }) {
  return (
    <section className="container mx-auto px-4 py-8 2xl:max-w-400">
      <h1 className="text-md sticky top-0 z-10 mb-2 bg-black py-2 text-white">
        Top Manga by score{" "}
      </h1>

      {/* Manga Cards*/}
      <div className="grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...mangas]
          .sort((a, b) => b.score - a.score)
          .slice(0, 12)
          .map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))}
      </div>
    </section>
  );
}
