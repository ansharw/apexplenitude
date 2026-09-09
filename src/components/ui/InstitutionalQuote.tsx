import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function InstitutionalQuote({
  lines,
  light = false,
  size = "lg",
}: {
  lines: string[];
  light?: boolean;
  size?: "lg" | "xl";
}) {
  const sizing =
    size === "xl"
      ? "text-[2.6rem] sm:text-6xl lg:text-8xl leading-[1.05]"
      : "text-3xl sm:text-5xl lg:text-6xl leading-[1.15]";

  return (
    <section className={light ? "on-bone" : ""}>
      <Container>
        <div className="py-28 sm:py-40">
          {lines.map((line, i) => (
            <Reveal key={line} delay={i * 0.08}>
              <p
                className={`font-serif ${sizing} max-w-5xl text-balance ${
                  light ? "text-ink" : "text-fg"
                }`}
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
