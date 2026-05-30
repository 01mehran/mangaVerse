// Components;
import Container from "./Container";
import MangaCard from "./MangaCard";

export default function MangasList({ mangas }) {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-md mb-2 py-2 font-medium transition-colors duration-300 dark:bg-gray-950 dark:text-white">
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
      </div>
    </Container>
  );
}
