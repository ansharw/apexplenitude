import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { cultureTerritories } from "@/content/culture";

export const metadata: Metadata = { title: "Culture" };

export default function CulturePage() {
  return (
    <>
      <PageHero
        index="Culture"
        label="Culture"
        title="Imagination is possibility infrastructure."
        intro="Technology expands what human beings can do. Culture expands what human beings can imagine doing."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 border-t border-rule-dark-soft pt-10">
            {cultureTerritories.map((t, i) => (
              <Reveal key={t} delay={i * 0.02}>
                <span className="coordinate opacity-40 block mb-2">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-2xl text-fg">{t}</h3>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-20">
            <p className="font-serif text-2xl sm:text-4xl italic text-fg-muted max-w-2xl text-balance">
              A civilization cannot build a future it is incapable of
              imagining.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
