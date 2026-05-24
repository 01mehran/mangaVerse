// React-router-dom
import { useNavigate } from "react-router-dom";

// Components;
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Static image;
import img from "../assets/manga.jfif";

// Icons;
import { MoveLeft } from "lucide-react";
import { useEffect } from "react";

export default function MangaDetails() {
  // Move scroll to top when component mounts;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-950 text-white">
      <Header />

      <Container>
        <main className="px-4 py-8">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-8 cursor-pointer text-gray-400 transition hover:-translate-x-px hover:text-purple-400"
          >
            <MoveLeft size={36} />
          </button>

          {/* Top section */}
          <section className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            {/* Cover */}
            <div className="h-115 overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">
              <img
                src={img}
                alt={`Cover of manga.title`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              {/* Title */}
              <h1 className="text-4xl leading-tight font-bold md:text-5xl">
                manga.title
              </h1>

              {/* Score */}
              <div className="mt-5 flex items-center gap-4">
                <div className="rounded-xl bg-yellow-400/10 px-4 py-2 text-lg font-medium text-yellow-300">
                  ⭐ manga.score
                </div>

                <div className="rounded-xl bg-purple-500/10 px-4 py-2 text-lg font-medium text-purple-300">
                  #manga.rank
                </div>
              </div>

              {/* Genres */}
              <div className="mt-8 flex flex-wrap gap-3">gender</div>

              {/* Info cards */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                  <p className="text-sm text-gray-400">Author</p>
                  <h3 className="mt-1 text-lg font-semibold">manga.author</h3>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                  <p className="text-sm text-gray-400">Status</p>
                  <h3 className="mt-1 text-lg font-semibold">manga.status</h3>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                  <p className="text-sm text-gray-400">Chapters</p>
                  <h3 className="mt-1 text-lg font-semibold">manga.chapters</h3>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                  <p className="text-sm text-gray-400">Year</p>
                  <h3 className="mt-1 text-lg font-semibold">manga.year</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Synopsis */}
          <section className="mt-16 rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-5 text-2xl font-bold">Synopsis</h2>

            <p className="leading-8 text-gray-300">manga.synopsis</p>
          </section>
        </main>
      </Container>

      <Footer />
    </section>
  );
}
