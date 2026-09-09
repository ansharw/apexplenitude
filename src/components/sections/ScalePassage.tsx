import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { scalePassage } from "@/content/home";

export function ScalePassage() {
  const n = scalePassage.length;

  return (
    <section className="on-bone border-t border-rule-light-soft py-28 sm:py-44">
      <Container reading className="sm:max-w-3xl">
        <Reveal>
          <Coordinate index="04" muted={false} className="text-ink/50">
            The Scale of Inquiry
          </Coordinate>
        </Reveal>

        <div className="mt-14 space-y-3 sm:space-y-4">
          {scalePassage.map((line, i) => {
            const t = i / (n - 1);
            const size = 1.35 + t * 2.1; // rem, grows toward the cosmic end
            const opacity = 0.55 + t * 0.45;
            return (
              <Reveal key={line} delay={i * 0.05}>
                <p
                  className="font-serif text-ink text-balance"
                  style={{ fontSize: `${size}rem`, lineHeight: 1.1, opacity }}
                >
                  {line}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="font-serif text-2xl sm:text-3xl leading-snug text-ink max-w-xl">
            The scale changes. The obligation to think clearly does not.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
