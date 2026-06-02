// React-router-dom;
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

// Components;
import Container from "../components/Container";
import MangaCard from "../components/MangaCard";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

export default function SearchResult() {
  const { mangas } = useLoaderData();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // // Get the search query from the URL parameters;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <section className="min-h-screen bg-slate-100 py-12 dark:bg-gray-950">
      <Container>
        {/* Back button */}
        <BackButton />

        <main className="min-h-screen">
          {/* Loading */}
          {isLoading && <Spinner />}

          {/* Empty state */}
          {!isLoading && mangas.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="mb-3 text-5xl">⚠️</span>
              <h2 className="text-xl font-medium text-red-400">
                Ooops, no manga found
              </h2>
            </div>
          )}

          {/* Results */}
          {!isLoading && mangas.length > 0 && (
            <>
              {/* Search title */}
              <h1 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                Search results for:
                <span className="ml-3 text-indigo-600 dark:text-purple-400">
                  "{query}"
                </span>
              </h1>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {mangas.map((manga) => (
                  <MangaCard manga={manga} key={manga.mal_id} />
                ))}
              </div>
            </>
          )}
        </main>
      </Container>
    </section>
  );
}
