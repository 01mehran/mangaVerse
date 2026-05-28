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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    HydrateFallback: Spinner,

    children: [
      {
        index: true,
        loader: async () => {
          const { data } = await axios.get("http://localhost:3000/manga");

          return data;
        },

        element: <Home />,
        errorElement: <ErrorMessage />,
      },

      {
        path: "/search",
        loader: async () => {
          const { data } = await axios.get("http://localhost:3000/manga");

          return data;
        },

        element: <SearchResult />,
        errorElement: <ErrorMessage />,
      },

      {
        path: "/manga/:id",
        loader: async ({ params }) => {
          const { data } = await axios.get(
            `http://localhost:3000/manga/${params.id}`,
          );

          return data;
        },

        element: <MangaDetails />,
        errorElement: <ErrorMessage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
