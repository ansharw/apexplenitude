import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { FrontierSpectrum } from "@/components/sections/FrontierSpectrum";
import { frontierCategories } from "@/content/frontiers";

export const metadata: Metadata = { title: "Frontiers" };

export default function FrontiersPage() {
  return (
    <div className="bg-[var(--color-void-deep)]">
      <section className="pt-40 pb-20 sm:pt-52 sm:pb-28">
        <Container>
          <Reveal>
            <Coordinate index="Frontiers">Where the Map Becomes Faint</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 font-serif text-[2.75rem] leading-[1.03] sm:text-6xl lg:text-7xl max-w-4xl text-fg text-balance">
              Frontiers
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-fg-muted">
              The frontier is not synonymous with fantasy. It is the region
              where established knowledge becomes incomplete but meaningful
              investigation remains possible.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {frontierCategories.map((c) => (
              <Reveal key={c.label}>
                <h3 className="font-serif text-xl sm:text-2xl text-fg">{c.label}</h3>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-fg-muted">
                  {c.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-20 sm:py-28">
        <Container wide>
          <Reveal>
            <p className="coordinate opacity-40">Emerging → Speculative</p>
          </Reveal>
          <FrontierSpectrum />
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="font-serif text-2xl sm:text-4xl leading-[1.3] max-w-3xl text-fg text-balance">
              Extraordinary possibility deserves investigation. Extraordinary
              claims still require evidence.
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
