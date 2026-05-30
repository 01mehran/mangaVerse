export default function InfoBox({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-indigo-50 p-5 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-gray-900">
      <p className="text-sm text-slate-500 dark:text-gray-400">{title}</p>

      <h3 className="text-md mt-1 font-semibold text-slate-900 dark:text-white">
        {value}
      </h3>
    </div>
  );
}
