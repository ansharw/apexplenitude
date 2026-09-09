import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { questions } from "@/content/questions";

export const metadata: Metadata = { title: "Questions" };

export default function QuestionsPage() {
  return (
    <>
      <PageHero
        index="Questions"
        label="Great Questions"
        title="Some questions deserve institutions."
        intro="A growing catalogue of questions whose answers could materially alter our understanding of reality or the range of possibilities available to humanity."
      />

      <section className="border-t border-rule-dark-soft">
        {questions.map((q) => (
          <Reveal key={q.id}>
            <Link
              href={`/questions/${q.id}`}
              className="group block border-b border-rule-dark-soft transition-colors duration-300 hover:bg-void-raised"
            >
              <Container>
                <div className="py-12 sm:py-16">
                  <span className="coordinate opacity-40">{q.id}</span>
                  <h2 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-4xl text-fg text-balance transition-transform duration-500 ease-[var(--ease-institutional)] group-hover:translate-x-2">
                    {q.text}
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {q.domains.map((d) => (
                      <span key={d} className="coordinate opacity-50">{d}</span>
                    ))}
                  </div>
                </div>
              </Container>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
