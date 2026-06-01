// React-router-dom
import { useLoaderData, useNavigation } from "react-router-dom";

// React Hooks;
import { useEffect } from "react";

// Components;
import Container from "../components/Container";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import InfoBox from "../components/InfoBox";
import ExpandableText from "../components/ExpandableText";

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
          <main className="min-h-screen py-10">
            <div className="mx-auto max-w-6xl">
              {/* TOP SECTION */}
              <section className="grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr]">
                {/* COVER */}
                <div className="aspect-3/4 w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl transition hover:scale-[1.02] md:sticky md:top-34 dark:border-white/10 dark:shadow-2xl">
                  <img
                    src={mangaDetail?.images?.jpg?.image_url}
                    alt={`Cover of ${mangaDetail?.title}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col gap-6">
                  {/* TITLE */}
                  <div>
                    <h1 className="sm:4xl text-2xl font-bold md:text-5xl">
                      {mangaDetail?.title}
                    </h1>

                    <p className="mt-2 text-lg text-slate-500 sm:text-2xl dark:text-gray-400">
                      {mangaDetail?.title_japanese}
                    </p>
                  </div>

                  {/* SCORE + STATS */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-xl bg-yellow-100 px-4 py-2 font-semibold text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-300">
                      ⭐ {mangaDetail?.score?.toFixed(2)}
                    </div>

                    <div className="rounded-xl bg-purple-100 px-4 py-2 font-semibold text-purple-700 dark:bg-purple-500/10 dark:text-purple-300">
                      Rank #{mangaDetail?.rank}
                    </div>

                    <div className="rounded-xl bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400/90 dark:bg-orange-500/20">
                      Popularity #{mangaDetail?.popularity}
                    </div>

                    <div className="rounded-xl bg-green-500/20 px-4 py-2 text-sm font-semibold text-slate-600 dark:bg-green-500/20 dark:text-white/80">
                      Favorites {mangaDetail?.favorites}
                    </div>
                  </div>

                  {/* BADGES */}
                  <div className="flex flex-wrap gap-2">
                    {mangaDetail?.genres?.map((g) => (
                      <span
                        key={g.mal_id}
                        className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-purple-500/20 dark:text-indigo-200"
                      >
                        {g.name}
                      </span>
                    ))}
                  </div>

                  {/* INFO GRID */}

                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
                    <div className="grid grid-cols-2 gap-5">
                      <InfoBox title="Type" value={mangaDetail?.type} />

                      <InfoBox title="Status" value={mangaDetail?.status} />

                      <InfoBox
                        title="Chapters"
                        value={mangaDetail?.chapters ?? "N/A"}
                      />

                      <InfoBox
                        title="Volumes"
                        value={mangaDetail?.volumes ?? "N/A"}
                      />

                      <InfoBox
                        title="Published"
                        value={mangaDetail?.published?.string}
                      />

                      <InfoBox title="Members" value={mangaDetail?.members} />

                      <InfoBox
                        title="Authors"
                        value={
                          mangaDetail?.authors?.length
                            ? mangaDetail.authors.map((a) => a.name).join(", ")
                            : "N/A"
                        }
                      />

                      <InfoBox
                        title="Serialization"
                        value={
                          mangaDetail?.serializations?.length
                            ? mangaDetail.serializations
                                .map((s) => s.name)
                                .join(", ")
                            : "N/A"
                        }
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* SYNOPSIS */}
              <section className="xs:p-8 mt-14 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
                <h2 className="mb-4 text-2xl font-bold text-indigo-500 dark:text-purple-500">
                  Synopsis
                </h2>

                <ExpandableText text={mangaDetail?.synopsis} />
              </section>

              {mangaDetail?.background && (
                <section className="xs:p-8 mt-10 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
                  <h2 className="mb-4 text-2xl font-bold text-indigo-500 dark:text-purple-500">
                    Background
                  </h2>

                  <ExpandableText text={mangaDetail?.background} />
                </section>
              )}
            </div>
          </main>
        )}
      </Container>
    </section>
  );
}
