// React Hooks;
import { useEffect, useState } from "react";

// React-router-dom;
import { useNavigate, useSearchParams } from "react-router-dom";

// Libraries;
import axios from "axios";

// Components;
import Header from "../components/Header";
import Container from "../components/Container";
import MangaCard from "../components/MangaCard";
import Footer from "../components/Footer";

// Icons;
import { MoveLeft } from "lucide-react";
import Spinner from "../components/Spinner";

export default function SearchResult() {
  const [mangas, setMangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const navigate = useNavigate();

  const fetchMangas = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data } = await axios.get("http://localhost:3000/manga");

      setMangas(data);
    } catch (err) {
      setError("Failed to fetch mangas");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMangas();
  }, []);

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
