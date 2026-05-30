import { useRouteError } from "react-router-dom";

export default function ErrorMessage() {
  const error = useRouteError();

  return (
    <div className="flex h-screen flex-col items-center bg-slate-100 py-32 dark:bg-gray-950">
      <div className="mb-3 text-5xl text-red-500">⚠️</div>

      <h2 className="text-xl font-semibold dark:text-white">
        Failed to load manga
      </h2>

      <p className="mt-2 font-medium text-red-400">
        {error.message || error.status}
      </p>
    </div>
  );
}
