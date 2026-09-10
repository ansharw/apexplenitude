import Link from "next/link";

type Node = string | { label: string; href: string };

export function RelationshipMap({
  nodes,
  light = false,
}: {
  nodes: Node[];
  light?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-3 font-sans text-xs sm:text-sm uppercase tracking-[0.1em] ${
        light ? "text-ink-muted" : "text-fg-muted"
      }`}
    >
      {nodes.map((node, i) => {
        const label = typeof node === "string" ? node : node.label;
        const href = typeof node === "string" ? undefined : node.href;
        return (
          <span key={label} className="flex items-center gap-4">
            {href ? (
              <Link
                href={href}
                className={`transition-colors duration-300 ${
                  light ? "text-ink hover:text-ink/70" : "text-fg hover:text-fg/70"
                }`}
              >
                {label}
              </Link>
            ) : (
              <span className={light ? "text-ink" : "text-fg"}>{label}</span>
            )}
            {i < nodes.length - 1 && <span className="opacity-40">↔</span>}
          </span>
        );
      })}
    </div>
  );
}
