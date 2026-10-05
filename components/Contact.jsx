import Section from "./Section";
import { data } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="mb-4 text-stone-600 dark:text-stone-400">Have a project or an opportunity in mind? Email me.</p>
      <a href={`mailto:${data.email}`} className="break-all font-display text-2xl font-bold text-orange-500 hover:underline sm:text-4xl">
        {data.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-3">
        {data.socials.map((s) => (
          <li key={s.name}>
            <a href={s.url} target="_blank" rel="noreferrer" className="block rounded-lg border-2 border-stone-300 px-5 py-2 font-semibold transition hover:border-orange-500 hover:text-orange-500 dark:border-stone-700">
              {s.name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
