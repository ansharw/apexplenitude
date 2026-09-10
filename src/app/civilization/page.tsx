import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { civilizationDomains, civilizationQuestions } from "@/content/civilization";

export const metadata: Metadata = { title: "Civilization" };

export default function CivilizationPage() {
  return (
    <div className="on-mineral">
      <PageHero
        light
        index="Civilization"
        label="Civilization"
        title="Human possibility is shaped by systems larger than the individual."
        intro="Apex Plenitude studies and may participate in the design of systems that determine how civilizations function."
      />

      <section className="border-t border-rule-mineral-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—" className="text-ink/50">Civilizational Domains</Coordinate>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            {civilizationDomains.map((d) => (
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
        {civilizationQuestions.map((q, i) => (
          <Reveal key={q}>
            <div className="border-b border-rule-mineral-soft py-10 sm:py-12">
              <Container>
                <p className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-[1.15] max-w-4xl text-ink text-balance">
                  {q}
                </p>
              </Container>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
