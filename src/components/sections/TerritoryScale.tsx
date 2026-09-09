"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { territories } from "@/content/home";

export function TerritoryScale() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="border-t border-rule-dark-soft py-28 sm:py-40">
      <Container>
        <Reveal>
          <Coordinate index="03">The Territory Is Reality Itself</Coordinate>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-fg-muted">
            Human institutions divide knowledge into departments. Reality
            contains no such administrative boundaries. Apex Plenitude
            exists to move across them — from the smallest meaningful
            distinction to the largest structure we can coherently
            investigate.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-rule-dark-soft">
          {territories.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.03}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group grid grid-cols-[52px_1fr] sm:grid-cols-[80px_1fr_1fr] items-baseline gap-x-6 border-b border-rule-dark-soft py-6 transition-colors duration-300"
              >
                <span className="coordinate opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`font-serif text-2xl sm:text-4xl transition-colors duration-300 ${
                    active === null || active === i ? "text-fg" : "text-fg/30"
                  }`}
                >
                  {t.label}
                </h3>
                <p
                  className={`hidden sm:block font-sans text-sm leading-relaxed max-w-md transition-opacity duration-300 ${
                    active === i ? "opacity-100 text-fg-muted" : "opacity-0"
                  }`}
                >
                  {t.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
