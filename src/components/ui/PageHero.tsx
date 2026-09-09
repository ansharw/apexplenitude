import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  index,
  label,
  title,
  intro,
  light = false,
}: {
  index?: string;
  label: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <section className="pt-40 pb-20 sm:pt-52 sm:pb-28">
      <Container>
        <Reveal>
          <Coordinate index={index}>{label}</Coordinate>
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            className={`mt-7 font-serif text-[2.75rem] leading-[1.03] sm:text-6xl lg:text-7xl max-w-4xl text-balance ${
              light ? "text-ink" : "text-fg"
            }`}
          >
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}>
            <p
              className={`mt-8 max-w-xl font-sans text-lg leading-relaxed ${
                light ? "text-ink-muted" : "text-fg-muted"
              }`}
            >
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
