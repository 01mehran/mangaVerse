// Libraries;
import axios from "axios";

// React Hooks;
import { useContext, useEffect, useState } from "react";

// React-router-dom;
import { useNavigate } from "react-router-dom";

// Context;
import { FetchMangasContext } from "../contexts/FetchMangasContext";

// Components;
import MangasList from "../components/MangasList";
import MangaCard from "../components/MangaCard";
import Container from "../components/Container";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const { isLoading, error } = useContext(FetchMangasContext);

  return (
    <section>
      <main className="min-h-screen pb-16">
        <Container>
          {isLoading && <Spinner />}
          {error && <ErrorMessage error={error} />}

          {!isLoading && !error && <MangasList />}
        </Container>
      </main>
    </section>
  );
}
