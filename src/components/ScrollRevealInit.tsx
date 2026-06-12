"use client";

import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const observeElements = (root: ParentNode = document) => {
      root
        .querySelectorAll<HTMLElement>(".scroll-reveal:not(.is-visible)")
        .forEach((element) => {
          if (observed.has(element)) return;
          observed.add(element);
          observer.observe(element);
        });
    };

    const init = () => {
      observeElements();
      const mutationObserver = new MutationObserver(() => observeElements());
      mutationObserver.observe(document.body, { childList: true, subtree: true });
      return () => mutationObserver.disconnect();
    };

    let cleanupMutation: (() => void) | undefined;

    const start = () => {
      cleanupMutation = init();
    };

    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(start, { timeout: 2500 })
        : setTimeout(start, 1);

    return () => {
      if ("requestIdleCallback" in window) {
        window.cancelIdleCallback(idleId as number);
      } else {
        clearTimeout(idleId as ReturnType<typeof setTimeout>);
      }
      cleanupMutation?.();
      observer.disconnect();
    };
  }, []);

  return null;
}
