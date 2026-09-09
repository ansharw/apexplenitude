import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { observatoryDomains } from "@/content/observatory";

export const metadata: Metadata = { title: "Observatory" };

export default function ObservatoryPage() {
  return (
    <>
      <PageHero
        index="Observatory"
        label="Apex Observatory"
        title="A continuously evolving view of reality."
        intro="The Observatory does not attempt to reduce civilization to one number. It exists to make major changes easier to see."
      />

      <section className="border-t border-rule-dark-soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-rule-dark-soft">
          {observatoryDomains.map((d, i) => (
            <Reveal key={d} delay={i * 0.02}>
              <div className="border-b border-r border-rule-dark-soft p-8 h-full">
                <span className="coordinate opacity-40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-2xl text-fg">{d}</h3>
                <p className="mt-6 coordinate opacity-50">Data Program in Development</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-rule-dark-soft py-20 sm:py-28">
        <Container>
          <Reveal>
            <Coordinate index="—">Provenance</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-fg-muted">
              Every figure the Observatory eventually publishes will carry a
              source, a methodology, and a last-updated date. Where no live
              dataset exists, the field is marked forthcoming rather than
              estimated.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
