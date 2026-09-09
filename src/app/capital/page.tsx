import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { InstitutionalQuote } from "@/components/ui/InstitutionalQuote";
import { capitalFunctions, capitalDoctrine } from "@/content/capital";

export const metadata: Metadata = { title: "Capital" };

export default function CapitalPage() {
  return (
    <>
      <PageHero
        index="Capital"
        label="Capital"
        title="Capital preserves optionality."
        intro="Apex Plenitude may allocate capital across public and private markets in order to maintain institutional independence, compound resources, support research, and finance long-horizon projects."
      />

      <section className="border-t border-rule-dark-soft">
        {capitalFunctions.map((f, i) => (
          <Reveal key={f.title}>
            <div className="border-b border-rule-dark-soft">
              <Container>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-x-8 gap-y-2 py-8">
                  <span className="coordinate opacity-40">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-fg">{f.title}</h2>
                    <p className="mt-2 font-sans text-sm sm:text-base text-fg-muted">{f.description}</p>
                  </div>
                </div>
              </Container>
            </div>
          </Reveal>
        ))}
      </section>

      <InstitutionalQuote lines={capitalDoctrine} />

      <section className="border-t border-rule-dark-soft py-20 sm:py-28">
        <Container>
          <Reveal>
            <Coordinate index="—">Doctrine</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-fg-muted">
              The institution should distinguish clearly between capital that
              compounds financially and capital that compounds knowledge,
              capability, or human possibility.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
