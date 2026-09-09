import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { ventureAreas } from "@/content/ventures";

export const metadata: Metadata = { title: "Ventures" };

export default function VenturesPage() {
  return (
    <>
      <PageHero
        index="Ventures"
        label="Ventures"
        title="Build what does not yet exist."
        intro="Apex Plenitude may create or support enterprises when commercial organization is the most effective mechanism for turning a possibility into durable capability."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">Areas</Coordinate>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            {ventureAreas.map((a) => (
              <Reveal key={a}>
                <span className="font-sans text-sm sm:text-base text-fg-muted border border-rule-dark-soft px-4 py-2 capitalize">
                  {a}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-16">
            <p className="font-serif text-2xl sm:text-4xl leading-[1.25] max-w-2xl text-fg text-balance">
              The objective is not to manufacture companies. The objective is
              to manufacture capability.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
