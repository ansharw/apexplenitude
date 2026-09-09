import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { EpistemicMarker } from "@/components/ui/EpistemicMarker";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { questions } from "@/content/questions";

export function generateStaticParams() {
  return questions.map((q) => ({ id: q.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const q = questions.find((q) => q.id === id);
  return { title: q ? q.text : "Question" };
}

const dossierSections = [
  { title: "Current Understanding", status: "INFERRED" as const },
  { title: "Competing Models", status: "THEORETICAL" as const },
  { title: "Known Evidence", status: "OBSERVED" as const },
  { title: "Unknowns", status: "SPECULATIVE" as const },
];

export default async function QuestionDossier({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = questions.find((q) => q.id === id);
  if (!question) notFound();

  return (
    <>
      <section className="pt-40 pb-16 sm:pt-52 sm:pb-24">
        <Container>
          <Reveal>
            <Coordinate index={question.id}>Question Dossier</Coordinate>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl text-fg text-balance">
              {question.text}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
              {question.domains.map((d) => (
                <span key={d} className="coordinate opacity-50">{d}</span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-rule-dark-soft py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
            {dossierSections.map((s) => (
              <Reveal key={s.title}>
                <Coordinate index="—">{s.title}</Coordinate>
                <p className="mt-4 font-sans text-sm leading-relaxed text-fg-muted max-w-md">
                  Research forthcoming.
                </p>
                <div className="mt-4">
                  <EpistemicMarker status={s.status} />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-16">
            <ArrowLink href="/questions">Back to Questions</ArrowLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
