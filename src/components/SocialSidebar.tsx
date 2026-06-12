"use client";

import { GitHubIcon, GitLabIcon, LinkedInIcon } from "./SocialIcons";
import { personalInfo } from "@/data/portfolio";

const links = [
  { href: personalInfo.github, icon: GitHubIcon, label: "GitHub" },
  { href: personalInfo.gitlab, icon: GitLabIcon, label: "GitLab" },
  { href: personalInfo.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
];

export default function SocialSidebar() {
  return (
    <aside
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
    >
      <div className="h-16 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="social-icon-link group flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:border-accent hover:text-accent"
        >
          <Icon size={16} className="transition group-hover:scale-110" />
        </a>
      ))}
      <div className="h-16 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-light"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Follow me
      </span>
    </aside>
  );
}
