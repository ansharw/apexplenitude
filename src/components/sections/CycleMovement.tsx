import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { HorizontalScroller } from "@/components/ui/HorizontalScroller";
import { cycle } from "@/content/home";

export function CycleMovement() {
  return (
    <section className="border-t border-rule-dark-soft py-28 sm:py-40">
      <Container wide>
        <Reveal>
          <Coordinate index="02">The Institutional Cycle</Coordinate>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-serif text-3xl sm:text-5xl max-w-3xl leading-[1.15] text-fg">
            Reality moves through the institution in a fixed sequence.
          </h2>
        </Reveal>
      </Container>

      <div className="mt-16">
        <Container wide>
          <HorizontalScroller>
            {cycle.map((step, i) => (
              <div
                key={step.term}
                className="snap-start shrink-0 w-[78vw] sm:w-[380px] border-t border-rule-dark-soft pt-8 pr-10"
              >
                <span className="coordinate opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-3xl sm:text-4xl text-fg">
                  {step.term}
                </h3>
                <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-fg-muted max-w-xs">
                  {step.question}
                </p>
              </div>
            ))}
          </HorizontalScroller>
        </Container>
        <Container>
          <p className="mt-6 coordinate opacity-40">Scroll horizontally to move through the cycle →</p>
        </Container>
      </div>
    </section>
  );
}
