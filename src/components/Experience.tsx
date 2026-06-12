import { Building2, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:pl-16">
        <SectionHeading title="Experience" />

        <article
          className="scroll-reveal card-surface relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-card-muted p-8 hover:border-accent/20 sm:p-10"
        >
          <div
            className="absolute right-0 top-0 hidden h-40 w-40 rounded-full blur-3xl md:block"
            style={{ background: "var(--glow-cyan)" }}
            aria-hidden="true"
          />

          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Building2 size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {experience.role}
                </h3>
                <p className="mt-1 text-accent">{experience.company}</p>
                <p className="mt-1 text-sm text-muted">
                  {experience.location}
                </p>
              </div>
            </div>
            <span className="rounded-full border border-[var(--card-border)] bg-card-muted px-4 py-1.5 text-sm text-foreground">
              {experience.period}
            </span>
          </div>

          <ul className="relative mt-8 space-y-4">
            {experience.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
