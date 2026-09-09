export function RelationshipMap({
  nodes,
  light = false,
}: {
  nodes: string[];
  light?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-3 font-sans text-xs sm:text-sm uppercase tracking-[0.1em] ${
        light ? "text-ink-muted" : "text-fg-muted"
      }`}
    >
      {nodes.map((node, i) => (
        <span key={node} className="flex items-center gap-4">
          <span className={light ? "text-ink" : "text-fg"}>{node}</span>
          {i < nodes.length - 1 && <span className="opacity-40">↔</span>}
        </span>
      ))}
    </div>
  );
}
