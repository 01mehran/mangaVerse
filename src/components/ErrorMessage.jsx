// React-router-dom'
import { useRevalidator, useRouteError } from "react-router-dom";

// Components;
import Spinner from "./Spinner";

export default function ErrorMessage() {
  const error = useRouteError();

  const { revalidate, state } = useRevalidator();
  const isLoading = state === "loading";

  return (
    <div className="flex h-screen flex-col items-center bg-slate-100 pt-24 dark:bg-gray-950">
      <div className="mb-3 text-5xl text-red-500">⚠️</div>

      <h2 className="text-xl font-semibold dark:text-white">
        Failed to load manga
      </h2>

      <p className="mt-2 font-medium text-red-400">
        {error.message || error.status}
      </p>

      {isLoading ? (
        <>
          <p className="fixed inset-0 z-10 h-full w-full bg-indigo-500/10 dark:bg-purple-700/10"></p>
          <Spinner />
        </>
      ) : (
        <button
          onClick={() => revalidate()}
          className="mt-2 cursor-pointer rounded-lg border border-indigo-600/30 bg-indigo-700/10 p-1 px-6 text-indigo-500 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-500"
        >
          Refresh
        </button>
      )}
    </div>
  );
}
