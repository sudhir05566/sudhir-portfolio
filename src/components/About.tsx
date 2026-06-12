import Image from "next/image";
import SectionHeading from "./SectionHeading";
import DesktopTypewriterGate from "./DesktopTypewriterGate";
import {
  aboutTypewriterRoles,
  personalInfo,
  profile,
} from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:pl-16">
        <SectionHeading title="About me" />

        <div className="grid items-center gap-12 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr]">
          <div className="scroll-reveal relative mx-auto w-full max-w-[360px]">
            <div className="profile-frame relative overflow-hidden rounded-2xl border-2 border-accent/30 bg-profile-bg p-2">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/10 to-transparent" />
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} - Frontend Developer`}
                width={360}
                height={420}
                sizes="(max-width: 768px) 280px, 360px"
                loading="lazy"
                className="relative rounded-xl object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-[var(--card-border)] bg-card px-4 py-2 text-sm font-medium text-accent shadow-lg">
              {personalInfo.yearsOfExperience} yrs exp.
            </div>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: "120ms" }}>
            <p className="about-typewriter mb-4 font-medium text-foreground">
              I&apos;m a{" "}
              <span className="text-accent">
                <DesktopTypewriterGate
                  words={aboutTypewriterRoles}
                  fallback={aboutTypewriterRoles[0]}
                  typeSpeed={65}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
            </p>

            <p className="mb-6 text-lg leading-relaxed text-muted">{profile}</p>

            <p className="mb-8 text-base leading-relaxed text-muted-light">
              I&apos;m always excited to learn new technologies, collaborate
              with talented teams, and build products that users love. From
              cinema platforms to OTT streaming and admin dashboards — I bring
              ideas to life with clean code and thoughtful UI.
            </p>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
