import Section from "./Section";
import { data } from "@/lib/data";

export default function Education() {
  const e = data.education;
  return (
    <Section id="education" title="Education">
      <div className="border-l-4 border-orange-500 pl-6">
        <h3 className="font-display text-xl font-bold">{e.degree}</h3>
        <p className="text-orange-600 dark:text-orange-400">{e.school}</p>
        <p className="text-sm text-stone-500">{e.status}</p>
      </div>
      <h3 className="mt-10 font-display text-xl font-bold">Self-learning</h3>
      <p className="mt-2 max-w-2xl leading-relaxed text-stone-600 dark:text-stone-400">{data.experience}</p>
    </Section>
  );
}
