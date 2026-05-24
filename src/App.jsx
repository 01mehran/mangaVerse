// React-router-dom;
import { Route, Routes } from "react-router-dom";

// Components;
import Home from "./pages/Home";
import MangaDetails from "./pages/MangaDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manga/:id" element={<MangaDetails />} />
    </Routes>
  );
}

export default App;
