import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/content/nav";

export function Footer() {
  return (
    <footer className="bg-void text-fg border-t border-rule-dark-soft">
      <Container wide className="py-20 sm:py-28">
        <Link href="/" className="block">
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95]">
            APEX
            <br />
            PLENITUDE
          </h2>
        </Link>
        <p className="mt-6 font-sans text-sm sm:text-base text-fg-muted max-w-md">
          Mapping reality. Expanding possibility.
        </p>

        <nav className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-rule-dark-soft pt-10">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[12px] uppercase tracking-[0.1em] text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="mt-14 max-w-2xl font-sans text-sm leading-relaxed text-fg-muted">
          Apex Plenitude is a multidisciplinary institution dedicated to mapping
          reality and expanding possibility across science, technology, human
          life, civilization, culture, capital, and the frontier of knowledge.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="coordinate opacity-50">
            {String(new Date().getFullYear())} / Apex Plenitude
          </p>
          <p className="font-sans text-xs text-fg-muted">
            © {new Date().getFullYear()} Apex Plenitude. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
