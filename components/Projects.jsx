import Section from "./Section";
import { data } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-8">
        {data.projects.map((p) => (
          <article key={p.name} className="grid overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-orange-500 md:grid-cols-2 dark:border-stone-800 dark:bg-stone-900">
            <div
              role="img"
              aria-label={`${p.name} screenshot`}
              className="min-h-56 bg-stone-200 bg-cover bg-top dark:bg-stone-800"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-700 dark:text-orange-400">{t}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={p.live} target="_blank" rel="noreferrer" className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600">Live demo</a>
                <a href={p.github} target="_blank" rel="noreferrer" className="rounded-lg border-2 border-stone-300 px-5 py-2 font-semibold transition hover:border-orange-500 dark:border-stone-700">GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
