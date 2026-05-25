import { Riple } from "react-loading-indicators";

export default function Spinner() {
  return (
    <section className="min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 transform">
        <Riple color="#ad46ff" size="medium" text="" textColor="" />
      </div>
    </section>
  );
}
