"use client";

import { useState } from "react";
import { frontierItems } from "@/content/frontiers";

export function FrontierSpectrum() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mt-24 mb-10 pt-24 pb-32">
      <div className="absolute inset-x-0 top-1/2 h-px bg-rule-dark-soft" />
      {frontierItems.map((item, i) => {
        const above = i % 2 === 0;
        return (
          <div
            key={item.label}
            className="absolute top-1/2"
            style={{ left: `${item.position}%` }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-fg/60" />
            <button
              type="button"
              onMouseEnter={() => setActive(item.label)}
              onMouseLeave={() => setActive(null)}
              className={`absolute -translate-x-1/2 whitespace-nowrap font-sans text-xs sm:text-sm uppercase tracking-[0.06em] transition-colors duration-300 ${
                above ? "-translate-y-10" : "translate-y-6"
              } ${active === item.label ? "text-fg" : "text-fg-muted"}`}
            >
              {item.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}
