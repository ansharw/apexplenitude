import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { EpistemicMarker } from "@/components/ui/EpistemicMarker";
import { atlasTerritories } from "@/content/atlas";

export function generateStaticParams() {
  return atlasTerritories.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = atlasTerritories.find((t) => t.slug === slug);
  return { title: t ? t.title : "Atlas" };
}

export default async function TerritoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = atlasTerritories.findIndex((t) => t.slug === slug);
  const territory = atlasTerritories[index];
  if (!territory) notFound();

  const prev = atlasTerritories[(index - 1 + atlasTerritories.length) % atlasTerritories.length];
  const next = atlasTerritories[(index + 1) % atlasTerritories.length];

  return (
    <div className="lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="hidden lg:block border-r border-rule-dark-soft pt-44 pl-12">
        <p className="coordinate mb-6 opacity-50">Atlas</p>
        <nav className="flex flex-col gap-3">
          {atlasTerritories.map((t) => (
            <Link
              key={t.slug}
              href={`/atlas/${t.slug}`}
              className={`font-sans text-sm transition-colors duration-300 ${
                t.slug === territory.slug ? "text-fg" : "text-fg-muted hover:text-fg"
              }`}
            >
              {t.index} {t.title}
            </Link>
          ))}
        </nav>
      </aside>

      <div>
        <section className="pt-40 pb-16 sm:pt-52">
          <Container>
            <Reveal>
              <Coordinate index={territory.index}>Atlas Territory</Coordinate>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-serif text-5xl sm:text-7xl text-fg text-balance">
                {territory.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-fg-muted">
                {territory.definition}
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="border-t border-rule-dark-soft py-16 sm:py-24">
          <Container>
            <Reveal>
              <Coordinate index="—">Subterritories</Coordinate>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-rule-dark-soft pt-8">
              {territory.subterritories.map((s) => (
                <span
                  key={s}
                  className="font-sans text-sm text-fg-muted border border-rule-dark-soft px-4 py-2"
                >
                  {s}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-rule-dark-soft py-16 sm:py-24">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <Reveal>
                <Coordinate index="—">Known Knowledge</Coordinate>
                <p className="mt-4 font-sans text-sm leading-relaxed text-fg-muted">
                  Research forthcoming.
                </p>
                <div className="mt-4">
                  <EpistemicMarker status="INFERRED" />
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <Coordinate index="—">Unknowns</Coordinate>
                <p className="mt-4 font-sans text-sm leading-relaxed text-fg-muted">
                  Open problems catalogue forthcoming.
                </p>
                <div className="mt-4">
                  <EpistemicMarker status="SPECULATIVE" />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="border-t border-rule-dark-soft py-16 sm:py-24">
          <Container>
            <div className="flex items-baseline justify-between gap-8">
              <Link href={`/atlas/${prev.slug}`} className="group">
                <p className="coordinate opacity-50">Previous Territory</p>
                <p className="mt-3 font-serif text-2xl sm:text-3xl text-fg transition-transform duration-500 ease-[var(--ease-institutional)] group-hover:-translate-x-1">
                  ← {prev.title}
                </p>
              </Link>
              <Link href={`/atlas/${next.slug}`} className="group text-right">
                <p className="coordinate opacity-50">Next Territory</p>
                <p className="mt-3 font-serif text-2xl sm:text-3xl text-fg transition-transform duration-500 ease-[var(--ease-institutional)] group-hover:translate-x-1">
                  {next.title} →
                </p>
              </Link>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
