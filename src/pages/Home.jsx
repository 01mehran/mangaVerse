// Libraries;
import axios from "axios";

// React Hooks;
import { useEffect, useState } from "react";

// Components;
import Header from "../components/Header";
import MangasList from "../components/MangasList";
import MangaCard from "../components/MangaCard";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const [mangas, setMangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // https://api.jikan.moe/v4/top/manga

  // Fetch Mangas;
  const fetchMangas = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await axios.get(`http://localhost:3000/manga`);
      setMangas(res.data);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMangas();
  }, []);

  return (
    <section>
      <Header />
      <main className="min-h-screen">
        <Container>
          {isLoading && <Spinner />}
          {error && <ErrorMessage error={error} />}

          {!isLoading && !error && <MangasList mangas={mangas} />}
        </Container>
      </main>
      <Footer />
    </section>
  );
}
