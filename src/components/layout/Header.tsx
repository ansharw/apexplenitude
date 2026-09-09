"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { primaryNav, indexColumns } from "@/content/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "bg-void/90 backdrop-blur-sm border-b border-rule-dark-soft"
            : "border-b border-transparent"
        }`}
      >
        <Container wide>
          <div className="flex h-[72px] items-center justify-between">
            <Link
              href="/"
              className="font-sans text-[12px] sm:text-[13px] font-medium tracking-[0.24em] text-fg"
              onClick={() => setOpen(false)}
            >
              APEX PLENITUDE
            </Link>

            <nav className="hidden xl:flex items-center gap-7">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-[11.5px] tracking-[0.06em] uppercase text-fg-muted transition-colors duration-300 hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="coordinate text-fg"
              aria-expanded={open}
              aria-controls="institution-index"
            >
              {open ? "Close" : "Explore"}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="institution-index"
            className="fixed inset-0 z-40 overflow-y-auto bg-void text-fg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <Container wide className="flex min-h-full flex-col justify-center py-28">
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-14">
                {indexColumns.map((column, ci) => (
                  <motion.div
                    key={column.heading}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.05 + ci * 0.05,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                  >
                    <p className="coordinate mb-6 opacity-50">
                      {String(ci + 1).padStart(2, "0")}
                    </p>
                    <nav className="flex flex-col gap-4">
                      {column.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="font-serif text-xl sm:text-2xl leading-tight text-fg/90 transition-colors duration-300 hover:text-fg"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
