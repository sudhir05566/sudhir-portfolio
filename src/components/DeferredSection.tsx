"use client";

import { useEffect, useRef, useState } from "react";

type DeferredSectionProps = {
  children: React.ReactNode;
  id: string;
  minHeight?: number;
};

function isHashTarget(id: string) {
  return typeof window !== "undefined" && window.location.hash === `#${id}`;
}

export default function DeferredSection({
  children,
  id,
  minHeight = 480,
}: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const loadForHash = () => {
      if (isHashTarget(id)) setVisible(true);
    };

    loadForHash();

    const onHashChange = () => {
      loadForHash();
      if (isHashTarget(id)) {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [id]);

  useEffect(() => {
    if (isHashTarget(id)) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [id]);

  useEffect(() => {
    if (!visible || !isHashTarget(id)) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, [visible, id]);

  return (
    <div
      ref={ref}
      id={id}
      className="scroll-mt-24"
      style={{ minHeight: visible ? undefined : minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}
