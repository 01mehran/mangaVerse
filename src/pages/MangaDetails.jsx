// React-router-dom
import { useLoaderData, useNavigation } from "react-router-dom";

// React Hooks;
import { useEffect } from "react";

// Components;
import Container from "../components/Container";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import InfoBox from "../components/InfoBox";

// Static image;
import img from "../assets/manga.jfif";

export default function MangaDetails() {
  const mangaDetail = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    // Move scroll to top when component mounts;
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-slate-100 py-12 text-slate-900 dark:bg-gray-950 dark:text-white">
      <Container>
        <BackButton />

        {isLoading ? (
          <Spinner />
        ) : (
          <main className="min-h-screen">
            <div>
              {/* Top section */}
              <section className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
                {/* Cover */}
                <div className="h-115 overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-white/10 dark:shadow-2xl">
                  <img
                    src={img}
                    alt={`Cover of ${mangaDetail.title}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div>
                  {/* Title */}
                  <h1 className="text-4xl leading-tight font-bold md:text-5xl">
                    {mangaDetail.title}
                  </h1>

                  {/* Score */}
                  <div className="mt-5 flex items-center gap-4">
                    <div className="rounded-xl bg-yellow-100 px-4 py-2 text-lg font-medium text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-300">
                      ⭐ {mangaDetail.score}
                    </div>

                    <div className="rounded-xl bg-yellow-100 px-4 py-2 text-lg font-medium text-yellow-700 dark:bg-purple-500/10 dark:text-purple-300">
                      #{mangaDetail.rank}
                    </div>
                  </div>

                  {/* Genres */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {mangaDetail.genres?.map((genre, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-500/20 dark:text-purple-300"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  {/* Info cards */}
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    <InfoBox title="Author" value={mangaDetail.author} />
                    <InfoBox title="Status" value={mangaDetail.status} />
                    <InfoBox title="Chapters" value={mangaDetail.chapters} />
                    <InfoBox title="Year" value={mangaDetail.year} />
                  </div>
                </div>
              </section>

              {/* Synopsis */}
              <section className="mt-16 rounded-3xl border border-slate-200 bg-indigo-50 p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
                <h2 className="mb-5 text-2xl font-bold">Synopsis</h2>

                <p className="leading-8 text-slate-600 dark:text-gray-300">
                  {mangaDetail.synopsis}
                </p>
              </section>
            </div>
          </main>
        )}
      </Container>
    </section>
  );
}
