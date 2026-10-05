import Section from "./Section";
import { data } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-stone-200 dark:divide-stone-800">
        {data.skills.map((group) => (
          <div key={group.label} className="grid gap-3 py-5 sm:grid-cols-[14rem_1fr]">
            <dt className="font-display text-lg font-semibold">{group.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-orange-500/50 px-4 py-1 text-sm">{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
