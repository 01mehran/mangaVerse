// React-router-dom;
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

// Components;
import Container from "../components/Container";
import MangaCard from "../components/MangaCard";
import Spinner from "../components/Spinner";

// Icons;
import { MoveLeft } from "lucide-react";

export default function SearchResult() {
  const mangas = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // Get the search query from the URL parameters;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const navigate = useNavigate();

  // Filter mangas based on the search query;
  const filteredMangas = mangas.filter((manga) =>
    manga.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Container>
      <section className="min-h-screen bg-gray-950 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 cursor-pointer text-gray-400 transition hover:-translate-x-px hover:text-purple-400"
        >
          <MoveLeft size={36} />
        </button>

        <main className="min-h-screen">
          {/* Loading */}
          {isLoading && <Spinner />}

          {/* Empty state */}
          {!isLoading && filteredMangas.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="mb-3 text-5xl">⚠️</span>
              <h2 className="text-xl font-semibold text-white">
                Ooops, no manga found
              </h2>
            </div>
          )}

          {/* Results */}
          {!isLoading && filteredMangas.length > 0 && (
            <>
              {/* Search title */}
              <h1 className="mb-4 text-xl font-bold text-white md:text-2xl">
                Search results for:
                <span className="ml-3 text-purple-400">"{query}"</span>
              </h1>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredMangas.map((manga) => (
                  <MangaCard manga={manga} key={manga.id} />
                ))}
              </div>
            </>
          )}
        </main>
      </section>
    </Container>
  );
}
