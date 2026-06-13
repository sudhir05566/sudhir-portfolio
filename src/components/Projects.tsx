import Image from "next/image";
import { Calendar, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const primaryLink = project.links[0];
  const hasSingleLink = project.links.length === 1;

  const cardContent = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--card-border)] bg-card-muted">
        <Image
          src={project.image}
          alt={`${project.name} website preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
              {project.category}
            </span>
            <h3 className="font-display text-xl font-bold text-foreground">
              {project.name}
            </h3>
          </div>
          <ExternalLink
            size={18}
            className="shrink-0 text-muted-light transition group-hover:text-accent"
          />
        </div>

        <div className="mb-3 flex items-center gap-2 text-sm text-muted-light">
          <Calendar size={14} aria-hidden="true" />
          {project.period}
        </div>

        <p className="mb-4 leading-relaxed text-muted">{project.description}</p>

        <ul className="mb-6 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
            >
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3">
          {project.links.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition hover:bg-accent/20"
                >
                  {link.label}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="tag-pill rounded-md px-2.5 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const cardClassName =
    "project-card scroll-reveal group card-surface flex flex-col overflow-hidden rounded-2xl p-0 cursor-pointer";

  const revealStyle = { transitionDelay: `${index * 80}ms` } as const;

  if (hasSingleLink && primaryLink) {
    return (
      <a
        href={primaryLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        style={revealStyle}
        aria-label={`Open ${project.name} — ${primaryLink.href}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article
      className={cardClassName}
      style={revealStyle}
      onClick={() => window.open(primaryLink.href, "_blank", "noopener,noreferrer")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(primaryLink.href, "_blank", "noopener,noreferrer");
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.name}`}
    >
      {cardContent}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:pl-16">
        <SectionHeading
          title="Projects"
          description="Production applications across entertainment, e-commerce, OTT streaming, and admin dashboards. Click a project to visit the live site."
          center
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
