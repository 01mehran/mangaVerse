export default function InfoBox({ title, value }) {
  return (
    <div>
      <p className="text-xs tracking-wide text-slate-500 uppercase">{title}</p>
      <span className="font-semibold text-xs xs:text-lg text-slate-900 dark:text-white">
        {value}
      </span>
    </div>
  );
}
