// React-router-dom
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";

// React Hooks;
import { useEffect } from "react";

// Components;
import Container from "../components/Container";
import Spinner from "../components/Spinner";

// Static image;
import img from "../assets/manga.jfif";

// Icons;
import { MoveLeft } from "lucide-react";

export default function MangaDetails() {
  const navigate = useNavigate();

  const mangaDetail = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    // Move scroll to top when component mounts;
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <section className="min-h-screen bg-gray-950 py-12 text-white">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 cursor-pointer text-gray-400 transition hover:-translate-x-px hover:text-purple-400"
        >
          <MoveLeft size={36} />
        </button>

        {isLoading ? (
          <Spinner />
        ) : (
          <main className="min-h-screen">
            {/* {!isLoading && ( */}
            <div className="">
              {/* Top section */}
              <section className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
                {/* Cover */}
                <div className="h-115 overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">
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
                    <div className="rounded-xl bg-yellow-400/10 px-4 py-2 text-lg font-medium text-yellow-300">
                      ⭐ {mangaDetail.score}
                    </div>

                    <div className="rounded-xl bg-purple-500/10 px-4 py-2 text-lg font-medium text-purple-300">
                      #{mangaDetail.rank}
                    </div>
                  </div>

                  {/* Genres */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {mangaDetail.genres?.map((genre, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  {/* Info cards */}
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                      <p className="text-sm text-gray-400">Author</p>
                      <h3 className="text-md mt-1 font-semibold">
                        {mangaDetail.author}
                      </h3>
                    </div>

                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                      <p className="text-sm text-gray-400">Status</p>
                      <h3 className="text-md mt-1 font-semibold">
                        {mangaDetail.status}
                      </h3>
                    </div>

                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                      <p className="text-sm text-gray-400">Chapters</p>
                      <h3 className="mt-1 text-lg font-semibold">
                        {mangaDetail.chapters}
                      </h3>
                    </div>

                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                      <p className="text-sm text-gray-400">Year</p>
                      <h3 className="mt-1 text-lg font-semibold">
                        {mangaDetail.year}
                      </h3>
                    </div>
                  </div>
                </div>
              </section>

              {/* Synopsis */}
              <section className="mt-16 rounded-3xl border border-gray-800 bg-gray-900 p-8">
                <h2 className="mb-5 text-2xl font-bold">Synopsis</h2>

                <p className="leading-8 text-gray-300">
                  {mangaDetail.synopsis}
                </p>
              </section>
            </div>
          </main>
        )}
      </section>
    </Container>
  );
}
