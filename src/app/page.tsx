import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CycleMovement } from "@/components/sections/CycleMovement";
import { TerritoryScale } from "@/components/sections/TerritoryScale";
import { ScalePassage } from "@/components/sections/ScalePassage";
import { FourFunctions } from "@/components/sections/FourFunctions";
import { FieldsIndex } from "@/components/sections/FieldsIndex";
import { heroCoordinates, closingLines } from "@/content/home";
import { oneSentence } from "@/content/institution";

export default function Home() {
  return (
    <>
      {/* 1. Opening */}
      <section className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-24">
        <Container>
          <Reveal>
            <p className="coordinate opacity-50">Apex Plenitude</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-serif text-[3.2rem] leading-[1.0] sm:text-[6.5rem] lg:text-[8.5rem] text-fg text-balance">
              Mapping reality.
              <br />
              Expanding possibility.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-lg font-serif italic text-xl sm:text-2xl leading-relaxed text-fg-muted">
              From the interior of a single mind to the outermost frontier of
              reality.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-8 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-fg-muted">
              Apex Plenitude is a multidisciplinary institution dedicated to
              the study, expansion, and realization of possibility across the
              full spectrum of reality — from cognition to cosmology, from
              individual lives to civilizations.
            </p>
          </Reveal>
        </Container>

        <div className="absolute inset-x-0 bottom-10 hidden sm:block">
          <Container wide>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-rule-dark-soft pt-5">
              {heroCoordinates.map((c) => (
                <span key={c.index} className="coordinate opacity-40">
                  {c.index} / {c.label.toUpperCase()}
                </span>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* 2. The mandate */}
      <section className="border-t border-rule-dark-soft py-28 sm:py-40">
        <Container>
          <Reveal>
            <p className="coordinate opacity-50">01 / The Mandate</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.15] max-w-4xl text-fg text-balance">
              The territory is reality itself. Human institutions divide
              knowledge into departments. Reality contains no such
              administrative boundaries.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-10">
            <ArrowLink href="/institution">The Institution</ArrowLink>
          </Reveal>
        </Container>
      </section>

      {/* 2nd movement — institutional cycle */}
      <CycleMovement />

      {/* 3rd movement — territory scale */}
      <TerritoryScale />

      {/* 4th movement — scale passage */}
      <ScalePassage />

      {/* 5th movement — four functions */}
      <FourFunctions />

      {/* 6th movement — fields index */}
      <FieldsIndex />

      {/* 7th movement — record + closing */}
      <section className="border-t border-rule-dark-soft py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="coordinate opacity-50">07 / The Record</p>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <p className="font-sans text-base sm:text-lg text-fg-muted max-w-md">
              Selected publications, projects, and research will appear here
              as they are established.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-6">
            <ArrowLink href="/record">The Record</ArrowLink>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-32 sm:py-52">
        <Container>
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-7xl lg:text-8xl leading-[1.02] max-w-4xl text-fg text-balance">
              A fuller human future is possible.
            </h2>
          </Reveal>
          <div className="mt-16 space-y-2">
            {closingLines.map((line, i) => (
              <Reveal key={line} delay={0.1 + i * 0.08}>
                <p className="font-serif text-2xl sm:text-4xl text-fg-muted">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="mt-16 max-w-xl font-serif italic text-lg leading-relaxed text-fg-muted">
              {oneSentence}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
