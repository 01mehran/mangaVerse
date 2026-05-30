// React-router-dom;
import { useLoaderData, useNavigation } from "react-router-dom";

// Components;
import MangasList from "../components/MangasList";
import Spinner from "../components/Spinner";

export default function Home() {
  const mangas = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <section>
      <main className="min-h-screen bg-slate-100 transition-colors duration-300 dark:bg-gray-950">
        {isLoading ? <Spinner /> : <MangasList mangas={mangas} />}
      </main>
    </section>
  );
}
