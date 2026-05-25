// Libraries;
import axios from "axios";

// React Hooks;
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FetchMangasContext = createContext();

export const FetchMangasProvider = ({ children }) => {
  const [mangas, setMangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // https://api.jikan.moe/v4/top/manga

  const fetchMangas = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data } = await axios.get(`http://localhost:3000/manga`);
      setMangas(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMangas();
  }, []);

  return (
    <FetchMangasContext.Provider
      value={{
        mangas,
        isLoading,
        error,
        fetchMangas,
        searchQuery,
        setSearchQuery,
        handleSearch,
      }}
    >
      {children}
    </FetchMangasContext.Provider>
  );
};
