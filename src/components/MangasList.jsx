// Components;
import Container from "./Container";
import MangaCard from "./MangaCard";

export default function MangasList({ mangas }) {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-md mb-2 py-2 font-medium dark:bg-gray-950 dark:text-white">
          Top-Rated Manga
        </h1>

        {/* Manga Cards*/}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-6 px-2">
          {mangas.map((manga) => (
            <MangaCard key={manga.mal_id} manga={manga} />
          ))}
        </div>
      </div>
    </Container>
  );
}
