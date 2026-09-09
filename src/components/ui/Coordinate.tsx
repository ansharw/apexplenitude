export function Coordinate({
  children,
  index,
  muted = true,
  className = "",
}: {
  children: React.ReactNode;
  index?: string;
  muted?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`coordinate flex items-center gap-3 ${
        muted ? "opacity-60" : "opacity-90"
      } ${className}`}
    >
      {index && <span>{index}</span>}
      <span>{children}</span>
    </p>
  );
}
