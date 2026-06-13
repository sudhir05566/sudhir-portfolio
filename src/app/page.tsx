import nextDynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const ScrollRevealInit = nextDynamic(() => import("@/components/ScrollRevealInit"));
const SocialSidebarGate = nextDynamic(() => import("@/components/SocialSidebarGate"));
const GetInTouch = nextDynamic(() => import("./GetInTouch"));
const DeferredSection = nextDynamic(() => import("@/components/DeferredSection"));

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <SocialSidebarGate />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <DeferredSection id="contact">
          <GetInTouch />
        </DeferredSection>
      </main>
      <Footer />
    </>
  );
}
