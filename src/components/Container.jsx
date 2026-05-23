export default function Container({ children }) {
  return (
    <section className="container mx-auto px-4 2xl:max-w-400">
      {children}
    </section>
  );
}
