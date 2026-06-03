// React-router-dom;
import { useLoaderData, useNavigation } from "react-router-dom";

// Components;
import MangasList from "../components/MangasList";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import BackToTopBtn from "../components/BackToTopBtn";

export default function Home() {
  const { mangas, pagination } = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <section>
      <main className="min-h-screen bg-slate-100 dark:bg-gray-950">
        {isLoading ? <Spinner /> : <MangasList mangas={mangas} />}
      </main>
      <Pagination pagination={pagination} />
      
      <BackToTopBtn />
    </section>
  );
}
