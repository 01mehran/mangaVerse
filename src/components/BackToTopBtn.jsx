// React Hooks;
import { useState } from "react";

// Icons;
import { ChevronUp } from "lucide-react";

export default function BackToTopBtn() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={backToTop}
      className={`sm-bottom-7 fixed right-4 bottom-4 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 sm:right-7 sm:size-12 dark:bg-purple-600`}
    >
      <ChevronUp size={20} />
    </button>
  );
}
