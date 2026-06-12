import { personalInfo } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sudhirkushwaha.vercel.app";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    url: siteUrl,
    image: `${siteUrl}${personalInfo.profileImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.gitlab],
    knowsAbout: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
