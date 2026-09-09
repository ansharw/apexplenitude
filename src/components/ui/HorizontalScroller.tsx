"use client";

import { ReactNode, useRef } from "react";

export function HorizontalScroller({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="no-scrollbar flex snap-x snap-mandatory gap-0 overflow-x-auto overscroll-x-contain pb-4"
      role="group"
      aria-label="Horizontally explorable sequence"
    >
      {children}
    </div>
  );
}
