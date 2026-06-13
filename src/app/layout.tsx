import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { personalInfo } from "@/data/portfolio";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sudhirkushwaha.vercel.app";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sudhir Kushwaha | Frontend React & Next.js Developer",
    template: "%s | Sudhir Kushwaha",
  },
  description:
    "Portfolio of Sudhir Kushwaha — Frontend Developer with 3.8+ years of experience building scalable React and Next.js applications for OTT, e-commerce, and enterprise platforms.",
  keywords: [
    "Sudhir Kushwaha",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Mumbai",
    "Portfolio",
    "JavaScript Developer",
    "Web Developer India",
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Sudhir Kushwaha | Frontend React & Next.js Developer",
    description:
      "3.8+ years building production-grade web applications with React, Next.js, and Tailwind CSS.",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.profileImage,
        width: 360,
        height: 420,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudhir Kushwaha | Frontend React & Next.js Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and high-performance web apps.",
    images: [personalInfo.profileImage],
  },
  applicationName: `${personalInfo.name} Portfolio`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} min-h-screen bg-background font-body text-foreground antialiased`}
        style={{ ["--font-display" as string]: "var(--font-body)" }}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.classList.remove("dark")}catch(e){}`}
        </Script>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
