// React Hooks;
import { useContext, useEffect, useState } from "react";

// React-router-dom;
import { useNavigate, useSearchParams } from "react-router-dom";

// Libraries;
import axios from "axios";

// Context;
import { FetchMangasContext } from "../contexts/FetchMangasContext";

// Components;
import Container from "../components/Container";
import MangaCard from "../components/MangaCard";
import Spinner from "../components/Spinner";

// Icons;
import { MoveLeft } from "lucide-react";

export default function SearchResult() {
  // Get mangas, loading, state, and error from context;
  const { mangas, isLoading, error } = useContext(FetchMangasContext);

  // Get the search query from the URL parameters;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const navigate = useNavigate();

  // Filter mangas based on the search query;
  const filteredMangas = mangas.filter((manga) =>
    manga.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="min-h-screen bg-gray-950">
      <Container>
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-10 mb-8 cursor-pointer text-gray-400 transition hover:-translate-x-px hover:text-purple-400"
        >
          <MoveLeft size={36} />
        </button>

        <main className="min-h-screen pb-16">
          {/* Search title */}
          <h1 className="mb-4 text-xl font-bold text-white md:text-2xl">
            Search results for:
            <span className="ml-3 text-purple-400">"{query}"</span>
          </h1>

          {/* Loading */}
          {isLoading && <Spinner />}

          {/* Error */}
          {error && <p className="py-20 text-center text-red-500">{error}</p>}

          {/* Empty state */}
          {!isLoading && !error && filteredMangas.length === 0 && (
            <p className="py-20 text-center text-xl text-red-500">
              No manga found
            </p>
          )}

          {/* Results */}
          {!isLoading && !error && filteredMangas.length > 0 && (
            <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredMangas.map((manga) => (
                <MangaCard manga={manga} key={manga.id} />
              ))}
            </div>
          )}
        </main>
      </Container>
    </section>
  );
}
