import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { publicationFamilies } from "@/content/publications";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        index="Publications"
        label="Publications"
        title="Clarify reality. Identify possibility. Document reasoning."
      />

      <section className="border-t border-rule-dark-soft">
        {publicationFamilies.map((p, i) => (
          <Reveal key={p.title}>
            <div className="border-b border-rule-dark-soft py-10 sm:py-12">
              <Container>
                <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr_auto] items-baseline gap-x-8 gap-y-3">
                  <span className="coordinate opacity-40">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-fg">{p.title}</h2>
                    <p className="mt-2 font-sans text-sm sm:text-base text-fg-muted">{p.description}</p>
                  </div>
                  <span className="coordinate opacity-40">Forthcoming</span>
                </div>
              </Container>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
