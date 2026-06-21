import { personalInfo, typewriterRoles } from "@/data/portfolio";
import DesktopTypewriterGate from "./DesktopTypewriterGate";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        aria-hidden="true"
      >
        <div
          className="hero-glow absolute -left-32 top-20 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "var(--glow-cyan)" }}
        />
        <div
          className="hero-glow absolute -right-20 bottom-10 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "var(--glow-blue)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 lg:pl-16">
        <p className="mb-4 text-lg text-muted sm:text-xl">
          Hi there! I&apos;m{" "}
          <span className="font-semibold text-foreground">
            {personalInfo.name}
          </span>
        </p>

        <h1 className="hero-typewriter font-display font-bold text-foreground">
          I&apos;m a{" "}
          <span className="text-accent">
            <DesktopTypewriterGate
              words={typewriterRoles}
              fallback={typewriterRoles[0]}
            />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {personalInfo.tagline}. {personalInfo.yearsOfExperience} years building
          production apps for OTT, e-commerce, and enterprise dashboards across
          Mumbai and beyond.
        </p>

        <p className="mt-4 text-muted">{personalInfo.location}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-outline inline-flex items-center gap-2"
          >
            Get In Touch
          </a>
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            className="btn-outline inline-flex items-center gap-2"
          >
            Resume
          </a>
        </div>

        <div className="mt-14 hidden items-center gap-3 md:flex">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-light">
            Coding Profile
          </span>
          <div className="h-px w-12 bg-accent/40" aria-hidden="true" />
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent transition hover:opacity-80"
          >
            GitHub
          </a>
          <span className="text-muted-light" aria-hidden="true">
            ·
          </span>
          <a
            href={personalInfo.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent transition hover:opacity-80"
          >
            GitLab
          </a>
          <span className="text-muted-light" aria-hidden="true">
            ·
          </span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent transition hover:opacity-80"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
