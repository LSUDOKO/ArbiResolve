"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in, section, .card, .btn");
    fadeElements.forEach((el) => {
      if (!el.classList.contains("fade-in")) {
        el.classList.add("fade-in");
      }
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
