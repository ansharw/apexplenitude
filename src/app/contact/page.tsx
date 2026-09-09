import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Coordinate } from "@/components/ui/Coordinate";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactLines } from "@/content/contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="pt-40 pb-24 sm:pt-52 sm:pb-32">
      <Container>
        <Reveal>
          <Coordinate index="Contact">Contact</Coordinate>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-7 font-serif text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl max-w-3xl text-fg text-balance">
            Apex Plenitude welcomes serious institutional correspondence.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-fg-muted">
            Research, investment, collaboration, philanthropy, technology,
            culture, and long-horizon projects.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Coordinate index="—">Channels</Coordinate>
            <div className="mt-6 flex flex-col gap-3 border-t border-rule-dark-soft pt-6">
              {contactLines.map((line) => (
                <p key={line} className="font-sans text-sm sm:text-base text-fg-muted">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
