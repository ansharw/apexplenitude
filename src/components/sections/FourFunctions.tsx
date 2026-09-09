import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { functions } from "@/content/home";

export function FourFunctions() {
  return (
    <section className="border-t border-rule-dark-soft py-28 sm:py-40">
      <Container>
        <Reveal>
          <Coordinate index="05">The Four Functions</Coordinate>
        </Reveal>
      </Container>

      <div className="mt-10 border-t border-rule-dark-soft">
        {functions.map((fn, i) => (
          <Reveal key={fn.word}>
            <Link
              href={fn.href}
              className="group block border-b border-rule-dark-soft transition-colors duration-500 hover:bg-void-raised"
            >
              <Container>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-baseline gap-x-10 gap-y-3 py-10 sm:py-14">
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="coordinate opacity-40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-[3rem] sm:text-[5.5rem] leading-none tracking-tight text-fg transition-transform duration-500 ease-[var(--ease-institutional)] group-hover:translate-x-2">
                      {fn.word}
                    </h3>
                  </div>
                  <p className="max-w-xs font-sans text-sm sm:text-base leading-relaxed text-fg-muted sm:text-right">
                    {fn.description}
                  </p>
                </div>
              </Container>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
