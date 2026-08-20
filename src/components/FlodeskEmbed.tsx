"use client";

import { useEffect, useRef } from "react";

const REDIRECT_DELAY_MS = 1800;

export function FlodeskEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: MutationObserver | null = null;
    let redirectTimer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    async function loadEmbed() {
      const response = await fetch("/flodesk-form.html");
      const html = await response.text();
      const container = containerRef.current;

      if (!container || cancelled) return;

      container.innerHTML = html;

      const scripts = Array.from(container.querySelectorAll("script"));
      scripts.forEach((script) => {
        const replacement = document.createElement("script");
        Array.from(script.attributes).forEach((attribute) => {
          replacement.setAttribute(attribute.name, attribute.value);
        });
        replacement.textContent = script.textContent;
        script.replaceWith(replacement);
      });

      const root = container.querySelector<HTMLElement>('[data-ff-el="root"]');
      if (!root) return;

      const scheduleRedirect = () => {
        if (root.getAttribute("data-ff-stage") !== "success" || redirectTimer) return;

        redirectTimer = setTimeout(() => {
          window.location.assign("/thanks");
        }, REDIRECT_DELAY_MS);
      };

      observer = new MutationObserver(scheduleRedirect);
      observer.observe(root, {
        attributes: true,
        attributeFilter: ["data-ff-stage", "class"]
      });
      scheduleRedirect();
    }

    loadEmbed().catch((error) => {
      console.error("Flodesk embed failed to load", error);
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, []);

  return <div ref={containerRef} className="flodesk-native-embed" />;
}
