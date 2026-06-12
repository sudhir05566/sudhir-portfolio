"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Typewriter = dynamic(() =>
  import("react-simple-typewriter").then((mod) => mod.Typewriter)
);

type DesktopTypewriterGateProps = {
  words: string[];
  fallback: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
};

export default function DesktopTypewriterGate({
  words,
  fallback,
  typeSpeed = 70,
  deleteSpeed = 45,
  delaySpeed = 1800,
}: DesktopTypewriterGateProps) {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!desktop) return <span>{fallback}</span>;

  return (
    <Typewriter
      words={words}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
    />
  );
}
