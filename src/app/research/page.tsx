import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { researchDomains, researchStandard } from "@/content/research";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageHero
        index="Research"
        label="Research"
        title="Curiosity is an institutional function."
        intro="Apex Plenitude supports inquiry across boundaries traditionally separated by academia, industry, government, and philanthropy."
      />

      <section className="border-t border-rule-dark-soft">
        {researchDomains.map((d) => (
          <Reveal key={d.title}>
            <div className="border-b border-rule-dark-soft py-12 sm:py-16">
              <Container>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-x-8 gap-y-6">
                  <span className="coordinate opacity-40">{d.index}</span>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-fg">{d.title}</h2>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {d.areas.map((a) => (
                        <span key={a} className="font-sans text-sm text-fg-muted border border-rule-dark-soft px-3 py-1.5">
                          {a}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 coordinate opacity-40">
                      Programs · People · Projects · Publications · Questions · Partners — forthcoming
                    </p>
                  </div>
                </div>
              </Container>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="on-bone border-t border-rule-light-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—" className="text-ink/50">The Research Standard</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl font-serif text-2xl sm:text-4xl leading-[1.25] text-ink">
              Good research should increase one or more of the following.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {researchStandard.map((s) => (
              <Reveal key={s}>
                <p className="font-sans text-base sm:text-lg text-ink-muted capitalize">{s}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
