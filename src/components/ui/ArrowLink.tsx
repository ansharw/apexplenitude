import Link from "next/link";

export function ArrowLink({
  href,
  children,
  light = false,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  external?: boolean;
  className?: string;
}) {
  const classes = `group inline-flex items-center gap-2 font-sans text-sm tracking-[0.02em] border-b pb-1 transition-colors duration-300 ${
    light
      ? "border-ink/30 text-ink hover:border-ink"
      : "border-fg/30 text-fg hover:border-fg"
  } ${className}`;

  const arrow = (
    <span className="inline-block transition-transform duration-300 ease-[var(--ease-institutional)] group-hover:translate-x-1">
      {external ? "↗" : "→"}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
