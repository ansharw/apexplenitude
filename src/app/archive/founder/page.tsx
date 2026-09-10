import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import {
  archiveIntro,
  the13Title,
  the13Subtitle,
  the13,
  the15Title,
  the15Subtitle,
  the15,
  contextualNote,
  descendants,
  closingStatements,
} from "@/content/founderArchive";

export const metadata: Metadata = { title: "The 13 + 15 Framework" };

function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="mt-12 border-t border-rule-light-soft">
      {items.map((item, i) => (
        <Reveal key={item} y={8}>
          <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[96px_1fr] items-baseline gap-x-6 border-b border-rule-light-soft py-6 sm:py-7">
            <span className="font-serif text-3xl sm:text-4xl text-ink/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-sans text-base sm:text-lg text-ink">{item}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function FounderArchivePage() {
  return (
    <div className="on-bone">
      <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
        <Container reading>
          <Reveal y={8}>
            <p className="coordinate text-ink/40">Archive — Founder&rsquo;s Note</p>
          </Reveal>
          <Reveal y={8} delay={0.06}>
            <h1 className="mt-6 font-serif text-3xl sm:text-5xl leading-[1.1] text-ink">
              The 13 + 15 Framework
            </h1>
          </Reveal>
          <Reveal y={8} delay={0.12}>
            <p className="mt-10 font-sans text-base sm:text-lg leading-relaxed text-ink-muted">
              {archiveIntro}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-light-soft py-16 sm:py-24">
        <Container reading>
          <Reveal y={8}>
            <p className="coordinate text-ink/40">{the13Title}</p>
            <p className="mt-4 font-serif text-xl sm:text-2xl italic text-ink-muted">
              {the13Subtitle}
            </p>
          </Reveal>
          <NumberedList items={the13} />
        </Container>
      </section>

      <section className="border-t border-rule-light-soft py-16 sm:py-24">
        <Container reading>
          <Reveal y={8}>
            <p className="coordinate text-ink/40">{the15Title}</p>
            <p className="mt-4 font-serif text-xl sm:text-2xl italic text-ink-muted">
              {the15Subtitle}
            </p>
          </Reveal>
          <NumberedList items={the15} />
        </Container>
      </section>

      <section className="border-t border-rule-light-soft py-16 sm:py-20">
        <Container reading>
          <Reveal y={8}>
            <p className="font-sans text-sm leading-relaxed text-ink-muted/90">
              {contextualNote}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-light-soft py-16 sm:py-24">
        <Container reading>
          <Reveal y={8}>
            <p className="coordinate text-ink/40">Intellectual Descendants</p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-3">
            {descendants.map((d) => (
              <Reveal key={d.from} y={6}>
                <p className="font-sans text-sm sm:text-base text-ink-muted">
                  <span className="text-ink">{d.from}</span>
                  <span className="mx-3 opacity-40">→</span>
                  {d.to}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule-light-soft py-20 sm:py-28">
        <Container reading>
          {closingStatements.map((line, i) => (
            <Reveal key={line} y={8} delay={i * 0.06}>
              <p className="mt-4 first:mt-0 font-serif text-lg sm:text-xl italic leading-relaxed text-ink">
                {line}
              </p>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-rule-light-soft py-16">
        <Container reading>
          <ArrowLink href="/library" light>
            Return to Archive
          </ArrowLink>
        </Container>
      </section>
    </div>
  );
}
