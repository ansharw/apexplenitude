import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { patronageSupport, patronageAudience } from "@/content/patronage";

export const metadata: Metadata = { title: "Patronage" };

export default function PatronagePage() {
  return (
    <>
      <PageHero
        index="Patronage"
        label="Patronage"
        title="Back people before consensus."
        intro="Some consequential work begins before conventional institutions possess enough evidence to support it."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <Reveal>
              <Coordinate index="—">May Provide</Coordinate>
              <div className="mt-6 flex flex-col gap-3">
                {patronageSupport.map((s) => (
                  <p key={s} className="font-serif text-xl text-fg capitalize">{s}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <Coordinate index="—">Who May Be Supported</Coordinate>
              <div className="mt-6 flex flex-col gap-3">
                {patronageAudience.map((a) => (
                  <p key={a} className="font-serif text-xl text-fg">{a}</p>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="mt-20">
            <p className="font-serif text-2xl sm:text-3xl italic text-fg-muted">
              Potential does not always arrive with credentials.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
