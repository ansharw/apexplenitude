import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { possibilityDomains, optionalityFactors } from "@/content/humanPossibility";

export const metadata: Metadata = { title: "Human Possibility" };

export default function HumanPossibilityPage() {
  return (
    <div className="on-mineral">
      <section className="pt-40 pb-20 sm:pt-52 sm:pb-28">
        <Container>
          <Reveal>
            <Coordinate index="Human Possibility" className="text-ink/50">Human Possibility</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 font-serif text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl max-w-4xl text-ink text-balance">
              Civilization is ultimately experienced one life at a time.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
              Apex Plenitude studies and supports the conditions that
              determine how much of a meaningful life a person can actually
              access.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-mineral-soft py-20 sm:py-28">
        <Container>
          <Reveal>
            <Coordinate index="—" className="text-ink/50">Domains of Human Possibility</Coordinate>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            {possibilityDomains.map((d) => (
              <Reveal key={d}>
                <span className="font-sans text-sm sm:text-base text-ink-muted border border-rule-mineral-soft px-4 py-2">
                  {d}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule-mineral-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—" className="text-ink/50">Optionality</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-2xl font-serif text-2xl sm:text-4xl leading-[1.3] text-ink text-balance">
              Freedom is not merely the absence of restraint. It is the
              presence of meaningful alternatives.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {optionalityFactors.map((f) => (
              <Reveal key={f}>
                <p className="font-sans text-base sm:text-lg text-ink-muted capitalize">{f}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-16">
            <p className="font-serif text-xl sm:text-2xl italic text-ink-muted max-w-xl">
              A richer life contains more meaningful doors — and greater
              ability to walk through them.
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
