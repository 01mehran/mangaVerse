// Context;
import { FetchMangasContext } from "../contexts/FetchMangasContext";

// React Hooks;
import { useContext } from "react";

// Components;
import Container from "./Container";
import MangaCard from "./MangaCard";

export default function MangasList() {
  const { mangas } = useContext(FetchMangasContext);

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-md sticky top-0 z-10 mb-2 bg-gray-950 py-2 text-white">
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
