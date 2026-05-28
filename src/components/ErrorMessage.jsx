import { useRouteError } from "react-router-dom";

export default function ErrorMessage() {
  const error = useRouteError();

  return (
    <div className="flex h-screen flex-col items-center py-32">
      <div className="mb-3 text-5xl text-red-500">⚠️</div>

      <h2 className="text-xl font-semibold text-white">Failed to load manga</h2>

      <p className="mt-2 text-red-400">{error.message || error.status}</p>
    </div>
  );
}
