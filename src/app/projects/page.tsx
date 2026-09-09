import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { projectExamples, projectStandardQuestions } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        index="Projects"
        label="Projects"
        title="Bounded attempts to change a specific part of reality."
        intro="Scientific. Technological. Humanitarian. Cultural. Institutional. Experimental."
      />

      <section className="border-t border-rule-dark-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—">Examples May Include</Coordinate>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
            {projectExamples.map((p) => (
              <Reveal key={p}>
                <p className="font-serif text-xl sm:text-2xl text-fg capitalize">{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="on-bone border-t border-rule-light-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <Coordinate index="—" className="text-ink/50">The Project Standard</Coordinate>
          </Reveal>
          <div className="mt-10 border-t border-rule-light-soft">
            {projectStandardQuestions.map((q, i) => (
              <Reveal key={q}>
                <p className="border-b border-rule-light-soft py-6 font-serif text-xl sm:text-2xl text-ink">
                  {String(i + 1).padStart(2, "0")} — {q}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
