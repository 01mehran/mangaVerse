// React-router-dom;
import { useNavigation, useSearchParams } from "react-router-dom";

// Arrow Icons;
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ pagination }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const totalPages = pagination?.last_visible_page;

  return (
    <div className="flex justify-center gap-3 bg-slate-100 py-6 dark:bg-gray-950 dark:text-slate-200">
      {!isLoading && (
        <>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="cursor-pointer rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-indigo-600 shadow-sm transition-transform hover:-translate-x-px disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-indigo-500/5 dark:text-indigo-500"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="flex items-center rounded-xl bg-indigo-200/30 px-5 font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-200">
            {currentPage} / {totalPages}
          </span>

          <button
            disabled={!pagination.has_next_page}
            onClick={() => handlePageChange(currentPage + 1)}
            className="cursor-pointer rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-indigo-600 shadow-sm transition-transform hover:translate-x-px disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-indigo-500/5 dark:text-indigo-500"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}
