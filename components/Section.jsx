export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20">
      <h2 className="mb-10 inline-block border-b-4 border-orange-500 pb-1 font-display text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
