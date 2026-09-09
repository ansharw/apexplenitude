export type EpistemicStatus =
  | "OBSERVED"
  | "INFERRED"
  | "THEORETICAL"
  | "SPECULATIVE"
  | "PHILOSOPHICAL"
  | "REVEALED";

const STYLES: Record<EpistemicStatus, string> = {
  OBSERVED: "opacity-95 border-solid",
  INFERRED: "opacity-75 border-solid",
  THEORETICAL: "opacity-65 border-dashed",
  SPECULATIVE: "opacity-50 border-dashed",
  PHILOSOPHICAL: "opacity-70 border-solid font-serif italic normal-case tracking-normal",
  REVEALED: "opacity-70 border-solid",
};

export function EpistemicMarker({
  status,
  light = false,
  className = "",
}: {
  status: EpistemicStatus;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`coordinate inline-block border px-2 py-1 leading-none ${
        light ? "border-ink/30 text-ink" : "border-fg/30 text-fg"
      } ${STYLES[status]} ${className}`}
    >
      {status === "REVEALED" ? "Revealed / Theological" : status}
    </span>
  );
}
