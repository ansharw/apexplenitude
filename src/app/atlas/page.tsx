import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { EpistemicMarker } from "@/components/ui/EpistemicMarker";
import { atlasTerritories, atlasQuestions, epistemicStatuses } from "@/content/atlas";

export const metadata: Metadata = { title: "Atlas" };

export default function AtlasPage() {
  return (
    <>
      <PageHero
        index="Atlas"
        label="The Atlas of Reality"
        title="A living cartography of what is known, unknown, and conceivable."
      />

      <section className="border-t border-rule-dark-soft py-16">
        <Container>
          <Reveal>
            <Coordinate index="—">Every territory asks six questions</Coordinate>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 border-t border-rule-dark-soft pt-8">
            {atlasQuestions.map((q, i) => (
              <Reveal key={q} delay={i * 0.03}>
                <p className="font-sans text-xs sm:text-sm leading-snug text-fg-muted">{q}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-4">
        {atlasTerritories.map((t) => (
          <Reveal key={t.slug}>
            <Link
              href={`/atlas/${t.slug}`}
              className="group block border-b border-rule-dark-soft transition-colors duration-300 hover:bg-void-raised"
            >
              <Container>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr_auto] items-baseline gap-x-8 gap-y-3 py-10">
                  <span className="coordinate opacity-50">{t.index}</span>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-5xl text-fg">{t.title}</h2>
                    <p className="mt-3 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-fg-muted">
                      {t.definition}
                    </p>
                  </div>
                  <span className="hidden sm:inline-block font-serif text-2xl text-fg transition-transform duration-500 ease-[var(--ease-institutional)] group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </Container>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">Epistemic Status</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-fg-muted">
              Every major Atlas claim is eventually labeled by how it is
              known, not merely by what it claims.
            </p>
          </Reveal>
          <div className="mt-12 flex flex-col gap-6 border-t border-rule-dark-soft pt-10">
            {epistemicStatuses.map((e) => (
              <Reveal key={e.status} className="flex items-baseline gap-6">
                <EpistemicMarker status={e.status} />
                <span className="font-sans text-sm sm:text-base text-fg-muted">{e.description}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
