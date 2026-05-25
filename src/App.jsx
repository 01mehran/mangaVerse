// React-router-dom;
import { Route, Routes } from "react-router-dom";

// Pages;
import Home from "./pages/Home";
import MangaDetails from "./pages/MangaDetails";
import SearchResult from "./pages/SearchResult";

// Components;
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
