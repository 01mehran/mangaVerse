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
import Pagination from "../components/Pagination";

export default function SearchResult() {
  const { mangas, pagination } = useLoaderData();

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
            <div className="flex flex-col items-center justify-center text-center">
              <span className="mb-3 text-5xl">⚠️</span>
              <h2 className="dark: text-xl font-medium text-black/90 italic dark:text-white">
                Ooops, no manga found for{" "}
                <span className="text-xl text-indigo-600 dark:text-purple-500">
                  "{query}"
                </span>
              </h2>
            </div>
          )}

          {/* Results */}
          {!isLoading && mangas.length > 0 && (
            <>
              {/* Search title */}
              <h1 className="mb-8 text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                Search results for:
                <span className="ml-3 text-indigo-600 dark:text-purple-400">
                  "{query}"
                </span>
              </h1>

              <p className="pb-2 text-sm text-white italic">
                Found {mangas.length} manga
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {mangas.map((manga) => (
                  <MangaCard manga={manga} key={manga.mal_id} />
                ))}
              </div>

              <Pagination pagination={pagination} />
            </>
          )}
        </main>
      </Container>
    </section>
  );
}
