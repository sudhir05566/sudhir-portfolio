"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

export default function NavbarDesktop() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const onScroll = () => {
      header?.classList.toggle("site-header-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setup = () => {
      const sections = ["home", ...navLinks.map((l) => l.href.slice(1))];
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    };

    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(setup, { timeout: 3000 })
        : setTimeout(setup, 1);

    return () => {
      if ("requestIdleCallback" in window) {
        window.cancelIdleCallback(idleId as number);
      } else {
        clearTimeout(idleId as ReturnType<typeof setTimeout>);
      }
      observer?.disconnect();
    };
  }, []);

  return (
    <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
      {navLinks.map((link) => {
        const id = link.href.slice(1);
        const isActive = activeSection === id;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                isActive ? "text-accent" : "text-muted hover:text-accent"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent" />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
