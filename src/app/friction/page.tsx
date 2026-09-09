import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { frictionExamples, frictionQuestion } from "@/content/friction";

export const metadata: Metadata = { title: "The Friction Fund" };

export default function FrictionPage() {
  return (
    <>
      <PageHero
        index="Friction"
        label="The Friction Fund"
        title="Small obstacles can destroy large possibilities."
        intro="Some lives are constrained not by a civilization-scale problem, but by one specific missing resource."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">Examples</Coordinate>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            {frictionExamples.map((f) => (
              <Reveal key={f}>
                <span className="font-sans text-sm sm:text-base text-fg-muted border border-rule-dark-soft px-4 py-2">
                  {f}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="on-bone border-t border-rule-light-soft py-32 sm:py-44">
        <Container>
          <Reveal>
            <p className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.15] max-w-3xl text-ink text-balance">
              {frictionQuestion}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
