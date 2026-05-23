import React from "react";

export default function ErrorMessage({ error }) {
  return (
    <>
      {error && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-3 text-5xl text-red-500">⚠️</div>

          <h2 className="text-xl font-semibold text-white">
            Failed to load manga
          </h2>

          <p className="mt-2 text-red-400">{error}</p>
        </div>
      )}
    </>
  );
}
