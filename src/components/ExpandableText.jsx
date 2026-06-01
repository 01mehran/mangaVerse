// React Hooks:
import { useState } from "react";

export default function ExpandableText({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const limit = 300;
  const isLong = text.length > limit;

  const displayedText =
    isExpanded || !isLong ? text : `${text.slice(0, limit)}...`;

  return (
    <div>
      <p className="leading-8 text-slate-600 dark:text-slate-300">
        {displayedText}
      </p>

      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 cursor-pointer text-xs font-medium text-indigo-600 transition hover:opacity-80 dark:text-purple-500"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
