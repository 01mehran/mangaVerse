// React-router-dom;
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Libraries;
import axios from "axios";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages;
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import MangaDetails from "./pages/MangaDetails";

// Components;
import ErrorMessage from "./components/ErrorMessage";
import Spinner from "./components/Spinner";

// Services;
import { mangasListLoader } from "./services/mangasList.loader";
import { mangaDetailLoader } from "./services/mangaDetail.loader";
import { mangaSearchLoader } from "./services/mangaSearch.loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    HydrateFallback: Spinner,

    children: [
      {
        index: true,
        loader: mangasListLoader,

        element: <Home />,
        errorElement: <ErrorMessage />,
      },

      {
        path: "/search",
        loader: mangaSearchLoader,

        element: <SearchResult />,
        errorElement: <ErrorMessage />,
      },

      {
        path: "/manga/:id",
        loader: mangaDetailLoader,

        element: <MangaDetails />,
        errorElement: <ErrorMessage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
