export default function InfoBox({ title, value }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="text-md mt-1 font-semibold">{value}</h3>
    </div>
  );
}
