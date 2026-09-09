import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { InstitutionalQuote } from "@/components/ui/InstitutionalQuote";
import { governanceBodies, scientificIntegrityDistinctions } from "@/content/governance";

export const metadata: Metadata = { title: "Governance" };

export default function GovernancePage() {
  return (
    <>
      <PageHero
        index="Governance"
        label="Governance"
        title="Ambition requires discipline."
        intro="An institution with a broad mandate requires stronger governance, not weaker governance."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">May Include</Coordinate>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {governanceBodies.map((g) => (
              <Reveal key={g}>
                <p className="font-serif text-xl text-fg">{g}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InstitutionalQuote
        lines={["No person, project, investment, or theory becomes exempt from scrutiny because it is close to power."]}
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">Scientific Integrity</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-fg-muted">
              Apex Plenitude should clearly distinguish —
            </p>
          </Reveal>
          <div className="mt-10 flex flex-col gap-3 border-t border-rule-dark-soft pt-8">
            {scientificIntegrityDistinctions.map((d) => (
              <Reveal key={d}>
                <p className="font-serif text-lg sm:text-xl text-fg-muted capitalize">{d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10">
            <p className="font-sans text-base text-fg-muted max-w-xl">
              Intellectual ambition cannot become an excuse for epistemic
              disorder.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
