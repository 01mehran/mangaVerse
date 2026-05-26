// React-router-dom;
import { Link, useLocation, useNavigate } from "react-router-dom";

// Context;
import { FetchMangasContext } from "../contexts/FetchMangasContext";

// React Hooks;
import { useContext, useEffect, useState } from "react";

// Components;
import Container from "./Container";

// Icons;
import { Search, User, Menu, BookOpen } from "lucide-react";

// Logo;
import logo from "../assets/logo.png";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading } = useContext(FetchMangasContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (isLoading) return;

    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }

    setSearchQuery("");
  };

  return (
    <header className="w-full border-b border-white/10 text-white">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/">
            <article className="text-xl font-bold tracking-wide">
              <span className="text-white">manga</span>
              <span className="text-purple-500">Verse</span>
            </article>
          </Link>

          {/* Search (desktop) */}
          <form
            onSubmit={handleSearch}
            className="hidden w-120 items-center rounded-full bg-white/5 px-3 py-3 transition duration-300 focus-within:ring-1 focus-within:ring-purple-400 md:flex lg:w-150"
          >
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search manga..."
              className="w-full bg-transparent px-2 text-sm text-white placeholder-gray-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isLoading}
            />
          </form>

          {/* Right Icons */}
          <article className="flex items-center gap-4">
            <div className="w-14">
              <img
                src={logo}
                alt={`manga logo`}
                className="h-full w-full object-cover"
              />
            </div>
          </article>
        </div>
      </Container>

      {/* Mobile Search */}
      <Container>
        <div className="pb-3 md:hidden">
          <form
            onSubmit={handleSearch}
            className="flex items-center rounded-full bg-white/5 px-3 py-3 transition duration-300 focus-within:ring-1 focus-within:ring-purple-400"
          >
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search manga..."
              className="w-full bg-transparent px-2 text-sm text-white placeholder-gray-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </Container>
    </header>
  );
}
