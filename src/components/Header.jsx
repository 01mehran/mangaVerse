// React-router-dom;
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

// React Hooks;
import { useContext, useEffect, useState } from "react";

//Contexts;
import { useTheme } from "../contexts/ThemContext";

// Components;
import Container from "./Container";
import Input from "./Input";

// Icons;
import { Moon, Sun } from "lucide-react";

// Logo;
import logo from "../assets/logo.png";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const { handleToggleTheme } = useTheme();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }

    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 py-4 text-slate-900 backdrop-blur-lg dark:border-white/10 dark:bg-gray-950/95 dark:text-white">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <article className="text-xl font-bold tracking-wide">
              <span className="text-slate-900 dark:text-white">manga</span>
              <span className="text-indigo-600 dark:text-purple-500">
                Verse
              </span>
            </article>
          </Link>

          <Input
            className="hidden w-110 md:flex lg:w-150"
            onHandleSearch={handleSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Right Side */}
          <article className="flex items-center gap-px">
            {/* Logo */}
            <div className="w-14">
              <img
                src={logo}
                alt="manga logo"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Dark Mode Button */}
            <button
              onClick={handleToggleTheme}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-100 hover:scale-105 hover:bg-indigo-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <Moon size={18} className="block dark:hidden" />
              <Sun size={18} className="hidden dark:block" />
            </button>
          </article>
        </div>
      </Container>

      {/* Mobile Search */}
      <Container>
        <Input
          className="flex pt-3 md:hidden"
          onHandleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Container>
    </header>
  );
}
