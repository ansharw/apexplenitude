import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { founderName, founderTitle, founderBio, futureLeadership } from "@/content/people";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <>
      <PageHero index="People" label="People" title="Institutions think through people." />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">{founderTitle}</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-4xl sm:text-6xl text-fg">{founderName}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-fg-muted">
              {founderBio}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">Future Leadership</Coordinate>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 border-t border-rule-dark-soft pt-10">
            {futureLeadership.map((role) => (
              <Reveal key={role}>
                <p className="font-serif text-xl text-fg-muted">{role}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10">
            <p className="coordinate opacity-40">Names published upon appointment</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
