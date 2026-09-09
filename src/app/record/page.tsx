import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { recordSections } from "@/content/record";

export const metadata: Metadata = { title: "Record" };

export default function RecordPage() {
  return (
    <>
      <PageHero
        index="Record"
        label="The Record"
        title="Institutions should leave evidence."
        intro="The Record contains verified documentation of Apex Plenitude's activities."
      />

      <section className="border-t border-rule-dark-soft">
        {recordSections.map((s, i) => (
          <Reveal key={s}>
            <div className="border-b border-rule-dark-soft">
              <Container>
                <div className="flex items-center justify-between py-7">
                  <span className="font-serif text-xl sm:text-2xl text-fg">
                    <span className="coordinate opacity-40 mr-6">{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </span>
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
