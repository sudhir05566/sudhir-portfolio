import { navLinks } from "@/data/portfolio";
import NavbarDesktopLoader from "@/components/NavbarDesktopLoader";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header
      data-site-header
      className="site-header fixed inset-x-0 top-0 z-50 border-b border-[var(--card-border)] bg-[var(--nav-bg)] shadow-sm lg:border-b-0 lg:bg-transparent lg:shadow-none"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:pl-20">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Portfolio<span className="text-accent">.</span>
        </a>

        <NavbarDesktopLoader />

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <details className="group relative lg:hidden">
            <summary
              className="inline-flex cursor-pointer list-none items-center justify-center rounded-lg border border-[var(--card-border)] bg-card p-2 text-foreground shadow-sm [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="group-open:hidden"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="hidden group-open:block"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 min-w-[12rem] rounded-xl border border-[var(--card-border)] bg-[var(--nav-bg)] p-4 shadow-lg">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block text-base font-medium text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
