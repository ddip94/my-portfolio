import Section from "./Section";
import { data } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl text-lg leading-relaxed text-stone-700 dark:text-stone-300">{data.about}</p>
    </Section>
  );
}
