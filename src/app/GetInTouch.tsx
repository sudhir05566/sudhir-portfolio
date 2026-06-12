"use client";

import { FormEvent, useState } from "react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, GitLabIcon, LinkedInIcon } from "@/components/SocialIcons";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/data/portfolio";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function GetInTouch() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local");
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New message from portfolio");
    formData.append("from_name", "Sudhir Portfolio");
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = await response.json();
      if (result.success) { setStatus("success"); form.reset(); }
      else { setStatus("error"); setErrorMessage(result.message || "Failed to send message."); }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:pl-16">
        <SectionHeading title="Get in touch" center />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="scroll-reveal">
            <h3 className="mb-6 font-display text-2xl font-bold text-foreground">Contact me</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Mail className="mt-1 shrink-0 text-accent" size={20} />
                <div>
                  <p className="text-sm text-muted-light">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-foreground transition hover:text-accent">{personalInfo.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-accent" size={20} />
                <div>
                  <p className="text-sm text-muted-light">Phone</p>
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="text-foreground transition hover:text-accent">{personalInfo.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-accent" size={20} />
                <div>
                  <p className="text-sm text-muted-light">Location</p>
                  <p className="text-foreground">{personalInfo.location}</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              {[{ href: personalInfo.linkedin, icon: LinkedInIcon, label: "LinkedIn" }, { href: personalInfo.github, icon: GitHubIcon, label: "GitHub" }, { href: personalInfo.gitlab, icon: GitLabIcon, label: "GitLab" }].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--card-border)] bg-card text-muted shadow-sm transition hover:border-accent hover:text-accent">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="scroll-reveal card-surface rounded-2xl p-6 sm:p-8" style={{ transitionDelay: "120ms" }}>
            <h3 className="mb-6 font-display text-xl font-bold text-foreground">Message me</h3>
            <div className="space-y-4">
              <input type="text" name="name" required placeholder="Your Name" className="form-input" disabled={status === "loading"} />
              <input type="email" name="email" required placeholder="Your Email" className="form-input" disabled={status === "loading"} />
              <textarea name="message" required rows={5} placeholder="Your Message" className="form-input resize-none" disabled={status === "loading"} />
            </div>
            <button type="submit" disabled={status === "loading"} className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
              {status === "loading" ? (<><Loader2 size={16} className="animate-spin" />Sending...</>) : (<><Send size={16} />Send Message</>)}
            </button>
            {status === "success" && <p className="mt-4 text-sm text-accent">Message sent successfully! I&apos;ll get back to you soon.</p>}
            {status === "error" && <p className="mt-4 text-sm text-red-400">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
