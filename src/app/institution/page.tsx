import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { InstitutionalQuote } from "@/components/ui/InstitutionalQuote";
import { ArrowLink } from "@/components/ui/ArrowLink";
import {
  purpose,
  characterConstraints,
  plenitudeAttributes,
} from "@/content/institution";

export const metadata: Metadata = { title: "Institution" };

export default function InstitutionPage() {
  return (
    <>
      <PageHero
        index="Institution"
        label="The Institution"
        title="A mandate broad enough for reality."
        intro="Human possibility is constrained not only by what reality permits, but by what humanity understands, builds, finances, distributes, and dares to investigate."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="01">Purpose</Coordinate>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 border-t border-rule-dark-soft pt-10">
            {purpose.map((p, i) => (
              <Reveal key={p} delay={i * 0.03}>
                <p className="font-serif text-xl sm:text-2xl text-fg capitalize">{p}.</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InstitutionalQuote
        lines={[
          "Apex Plenitude is intended to think in decades and, where necessary, generations.",
        ]}
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="02">Institutional Character</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-fg-muted">
              It should be capable of supporting work that is —
            </p>
          </Reveal>
          <div className="mt-10 border-t border-rule-dark-soft">
            {characterConstraints.map((c, i) => (
              <Reveal key={c}>
                <p className="border-b border-rule-dark-soft py-6 font-serif text-xl sm:text-2xl text-fg capitalize">
                  {String(i + 1).padStart(2, "0")} — {c}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10">
            <p className="max-w-xl font-sans text-lg leading-relaxed text-fg-muted">
              This does not remove standards. It raises them. Unconventional
              work requires stronger reasoning, not weaker reasoning.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="on-bone border-t border-rule-light-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="03" className="text-ink/50">The Plenitude Principle</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-3xl font-serif text-3xl sm:text-4xl leading-[1.2] text-ink">
              A richer civilization expands the number and quality of
              meaningful realities available to human beings.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
            {plenitudeAttributes.map((a, i) => (
              <Reveal key={a} delay={i * 0.02}>
                <p className="font-sans text-sm sm:text-base text-ink-muted">{a}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="04">Stewardship</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-3xl font-serif text-2xl sm:text-4xl leading-[1.25] text-fg">
              Capability is not its own justification. A technology may be
              possible and still be unwise. Maximum possibility does not
              mean unlimited permission.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-10">
            <ArrowLink href="/governance">Read on Governance</ArrowLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
