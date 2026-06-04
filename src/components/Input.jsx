// React-router-dom;
import { useLocation, useNavigation, useRevalidator } from "react-router-dom";

// React Hooks;
import { useEffect } from "react";

// Icons;
import { Search } from "lucide-react";

export default function Input({
  className = "",
  onHandleSearch,
  searchQuery,
  setSearchQuery,
}) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { state } = useRevalidator();
  const location = useLocation();

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname, setSearchQuery]);

  return (
    <form
      onSubmit={onHandleSearch}
      className={`items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-3 focus-within:ring-2 focus-within:ring-indigo-500 dark:border-white/10 dark:bg-white/5 dark:focus-within:ring-purple-400 ${className}`}
    >
      <button className="cursor-pointer transition duration-300 hover:scale-105">
        <Search size={18} className="text-slate-500 dark:text-gray-400" />
      </button>

      <input
        type="text"
        placeholder="Search manga..."
        className={`${isLoading || state === "loadig" ? "pointer-events-none opacity-50" : ""} w-full bg-transparent px-2 text-sm text-slate-900 placeholder-slate-400 outline-none dark:text-white dark:placeholder-gray-500`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        disabled={isLoading || state === "loading"}
      />
    </form>
  );
}
