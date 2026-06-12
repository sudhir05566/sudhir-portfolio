import { GraduationCap, Languages, Monitor, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, languages, tools } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:pl-16">
        <SectionHeading title="Education" center />

        <div className="scroll-reveal card-surface mb-10 rounded-2xl p-8 hover:border-accent/20">
          <GraduationCap className="mb-4 text-accent" size={28} aria-hidden="true" />
          <h3 className="font-display text-2xl font-bold text-foreground">
            {education.degree}
          </h3>
          <p className="mt-2 text-lg text-accent">{education.institution}</p>
          <p className="mt-2 text-muted">
            {education.location} · Graduated {education.year}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="scroll-reveal card-surface rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/20"
            style={{ transitionDelay: "100ms" }}
          >
            <Languages className="mb-4 text-accent" size={24} aria-hidden="true" />
            <h3 className="font-display text-lg font-bold text-foreground">
              Languages
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="tag-pill rounded-lg px-3 py-1.5 text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div
            className="scroll-reveal card-surface rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/20"
            style={{ transitionDelay: "200ms" }}
          >
            <Monitor className="mb-4 text-accent" size={24} aria-hidden="true" />
            <h3 className="font-display text-lg font-bold text-foreground">
              Operating Systems
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.os.map((os) => (
                <span
                  key={os}
                  className="tag-pill rounded-lg px-3 py-1.5 text-sm"
                >
                  {os}
                </span>
              ))}
            </div>
          </div>

          <div
            className="scroll-reveal card-surface rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/20 md:col-span-2 lg:col-span-1"
            style={{ transitionDelay: "300ms" }}
          >
            <Wrench className="mb-4 text-accent" size={24} aria-hidden="true" />
            <h3 className="font-display text-lg font-bold text-foreground">
              Development Tools
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.devTools.map((tool) => (
                <span
                  key={tool}
                  className="tag-pill rounded-lg px-3 py-1.5 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
