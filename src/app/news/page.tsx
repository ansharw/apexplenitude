import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { newsExamples } from "@/content/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <PageHero index="News" label="News" title="Institutional announcements should remain factual." />

      <section className="border-t border-rule-dark-soft">
        {newsExamples.map((n) => (
          <Reveal key={n.title}>
            <div className="border-b border-rule-dark-soft">
              <Container>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-8 gap-y-2 py-8">
                  <span className="coordinate opacity-40">{n.date}</span>
                  <h2 className="font-serif text-xl sm:text-2xl text-fg">{n.title}</h2>
                </div>
              </Container>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
