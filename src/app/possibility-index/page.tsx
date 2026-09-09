import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { possibilityCategories, possibilityCoreStatement } from "@/content/possibilityIndex";

export const metadata: Metadata = { title: "Possibility Index" };

export default function PossibilityIndexPage() {
  return (
    <>
      <section className="pt-40 pb-20 sm:pt-52 sm:pb-28">
        <Container>
          <Reveal>
            <Coordinate index="Possibility Index">The Possibility Index</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 font-serif text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl max-w-4xl text-fg text-balance">
              {possibilityCoreStatement}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-fg-muted">
              Traditional economic indicators measure production. The
              Possibility Index is a long-term research initiative examining
              how many meaningful possibilities a human being can
              realistically access.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 border-t border-rule-dark-soft pt-10">
            {possibilityCategories.map((c, i) => (
              <Reveal key={c} delay={i * 0.02}>
                <span className="coordinate opacity-40 block mb-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-xl text-fg">{c}</h3>
                <p className="mt-2 coordinate opacity-40">Dimension in development</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="on-bone border-t border-rule-light-soft py-28 sm:py-40">
        <Container>
          <Reveal>
            <p className="font-serif text-3xl sm:text-5xl leading-[1.2] max-w-2xl text-ink text-balance">
              Prosperity matters. Optionality matters too.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
