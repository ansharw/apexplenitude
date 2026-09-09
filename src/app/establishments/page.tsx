import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { establishmentTypes } from "@/content/establishments";

export const metadata: Metadata = { title: "Establishments" };

export default function EstablishmentsPage() {
  return (
    <>
      <section className="pt-40 pb-20 sm:pt-52 sm:pb-28">
        <Container>
          <Reveal>
            <Coordinate index="Establishments">Establishments</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 font-serif text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl max-w-4xl text-fg text-balance">
              What exists because we caused it to exist?
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-20 sm:py-28">
        <Container>
          <Reveal>
            <Coordinate index="—">May Eventually Include</Coordinate>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-4">
            {establishmentTypes.map((t) => (
              <Reveal key={t}>
                <span className="font-sans text-sm sm:text-base text-fg-muted border border-rule-dark-soft px-4 py-2 capitalize">
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="on-bone border-t border-rule-light-soft py-28 sm:py-40">
        <Container>
          <Reveal>
            <p className="font-serif text-2xl sm:text-4xl leading-[1.3] max-w-2xl text-ink text-balance">
              Record forthcoming. This page documents entities only after
              they genuinely exist.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
