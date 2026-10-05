import { data } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-5xl items-center gap-14 px-5 pb-16 pt-28 md:grid-cols-[1.4fr_1fr]">
      <div>
        <h1 className="rise font-display text-5xl font-extrabold leading-[1.05] sm:text-7xl">{data.name}</h1>
        <p className="rise mt-4 font-display text-2xl font-semibold text-orange-500 sm:text-3xl" style={{ animationDelay: "0.15s" }}>
          {data.title}
        </p>
        <p className="rise mt-6 max-w-md text-lg leading-relaxed text-stone-600 dark:text-stone-400" style={{ animationDelay: "0.3s" }}>
          {data.tagline}
        </p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.45s" }}>
          <a href="#projects" className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            View projects
          </a>
          <a href={data.cv} download className="rounded-lg border-2 border-orange-500 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white dark:text-orange-400">
            Download CV
          </a>
        </div>
      </div>

      <div className="rise relative mx-auto w-64 sm:w-80" style={{ animationDelay: "0.3s" }}>
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-orange-500" />
        <div
          role="img"
          aria-label={`Portrait of ${data.name}`}
          className="relative aspect-[4/5] rounded-3xl bg-stone-300 bg-cover bg-center dark:bg-stone-800"
          style={{ backgroundImage: "url(/profile.png)" }}
        />
      </div>
    </section>
  );
}
