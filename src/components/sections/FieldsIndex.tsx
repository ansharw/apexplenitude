import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { fields } from "@/content/home";

export function FieldsIndex() {
  return (
    <section className="border-t border-rule-dark-soft py-28 sm:py-40">
      <Container>
        <Reveal>
          <Coordinate index="06">Our Fields</Coordinate>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-rule-dark-soft">
          {fields.map((field, i) => (
            <Reveal key={field.label} delay={i * 0.02}>
              <Link
                href={field.href}
                className="group block border-b border-r border-rule-dark-soft p-8 sm:p-10 h-full transition-colors duration-300 hover:bg-void-raised"
              >
                <span className="coordinate opacity-40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-fg">
                  {field.label}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-fg-muted max-w-xs">
                  {field.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
