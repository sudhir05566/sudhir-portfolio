"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const NavbarDesktop = dynamic(() => import("@/components/NavbarDesktop"));

export default function NavbarDesktopLoader() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!desktop) return null;
  return <NavbarDesktop />;
}
