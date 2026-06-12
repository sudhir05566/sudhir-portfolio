import SectionHeading from "./SectionHeading";
import { skillNames, skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:pl-16">
        <SectionHeading title="My Skills" center />

        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillNames.map((name, index) => (
            <div
              key={name}
              className="skill-card scroll-reveal card-surface rounded-xl px-4 py-5 text-center shadow-sm"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className="skill-card scroll-reveal card-surface rounded-2xl p-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tag-pill rounded-lg px-3 py-1.5 text-sm transition hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
