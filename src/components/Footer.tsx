import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--card-border)] py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-muted-light">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
