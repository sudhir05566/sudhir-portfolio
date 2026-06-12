"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SocialSidebar = dynamic(() => import("./SocialSidebar"));

export default function SocialSidebarGate() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!isDesktop) return null;
  return <SocialSidebar />;
}
