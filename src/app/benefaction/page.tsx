import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { InstitutionalQuote } from "@/components/ui/InstitutionalQuote";
import { benefactionAreas, benefactionModes, benefactionPrinciple } from "@/content/benefaction";

export const metadata: Metadata = { title: "Benefaction" };

export default function BenefactionPage() {
  return (
    <>
      <PageHero
        index="Benefaction"
        label="Benefaction"
        title="Accumulated capability should return outward."
        intro="Apex Plenitude may provide direct and institutional support where suffering, exclusion, or lack of access unnecessarily constrains human possibility."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">Areas</Coordinate>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            {benefactionAreas.map((a) => (
              <Reveal key={a}>
                <span className="font-sans text-sm sm:text-base text-fg-muted border border-rule-dark-soft px-4 py-2">
                  {a}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-rule-dark-soft pt-14">
            {benefactionModes.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <Coordinate index={String(i + 1).padStart(2, "0")}>Mode</Coordinate>
                <h3 className="mt-4 font-serif text-3xl text-fg">{m.title}</h3>
                <p className="mt-3 font-sans text-base text-fg-muted">{m.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InstitutionalQuote lines={benefactionPrinciple} />
    </>
  );
}
