import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { innovationLoop, innovationActivities } from "@/content/innovation";

export const metadata: Metadata = { title: "Innovation" };

export default function InnovationPage() {
  return (
    <>
      <PageHero
        index="Innovation"
        label="Innovation"
        title="Convert understanding into capability."
        intro="Research becomes civilizationally consequential when understanding can be translated into tools, systems, infrastructure, and institutions."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">The Innovation Loop</Coordinate>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4">
            {innovationLoop.map((step, i) => (
              <Reveal key={step} delay={i * 0.03} className="flex items-center gap-3">
                <span className="font-serif text-xl sm:text-2xl text-fg">{step}</span>
                {i < innovationLoop.length - 1 && (
                  <span className="text-fg-muted opacity-40">→</span>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">May Support</Coordinate>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
            {innovationActivities.map((a) => (
              <Reveal key={a}>
                <p className="font-serif text-xl sm:text-2xl text-fg capitalize">{a}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-16">
            <p className="font-serif text-2xl sm:text-3xl italic text-fg-muted max-w-2xl">
              A possibility becomes interesting when reality begins answering
              back.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
