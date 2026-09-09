import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { libraryCollections } from "@/content/library";

export const metadata: Metadata = { title: "Library" };

export default function LibraryPage() {
  return (
    <>
      <PageHero
        index="Library"
        label="Library"
        title="Preserve the map."
        intro="The Apex Plenitude Library exists to organize the intellectual resources required to understand reality across disciplines."
      />

      <section className="border-t border-rule-dark-soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-rule-dark-soft">
          {libraryCollections.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.02}>
              <div className="border-b border-r border-rule-dark-soft p-8 sm:p-10 h-full">
                <span className="coordinate opacity-40">{c.index}</span>
                <h3 className="mt-4 font-serif text-2xl text-fg">{c.title}</h3>
                <p className="mt-6 coordinate opacity-40">Collection Forthcoming</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-rule-dark-soft py-20 sm:py-28">
        <Container>
          <Reveal>
            <Coordinate index="—">Search & Filter</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-fg-muted">
              Search, filtering by domain, author, year, document type, and
              epistemic category will accompany the Library as it is
              populated.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
