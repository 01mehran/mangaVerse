// Libraries;
import axios from "axios";

// React Hooks;
import { useEffect, useState } from "react";

// Components;
import Header from "./components/Header";
import MangasList from "./components/MangasList";
import MangaCard from "./components/MangaCard";
import Footer from "./components/Footer";

function App() {
  const [mangas, setMangas] = useState([]);

  // https://api.jikan.moe/v4/top/manga

  // Fetch Mangas;
  const fetchMangas = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/manga`);
      setMangas(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMangas();
  }, []);

  return (
    <section>
      <Header />
      <MangasList mangas={mangas} />
      <Footer />
    </section>
  );
}

export default App;
