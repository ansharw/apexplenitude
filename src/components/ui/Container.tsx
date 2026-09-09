import { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
  reading = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
  reading?: boolean;
}) {
  const max = reading
    ? "max-w-[var(--container-reading)]"
    : wide
      ? "max-w-[var(--container-wide)]"
      : "max-w-[var(--container-content)]";

  return (
    <div className={`mx-auto w-full px-6 sm:px-10 lg:px-16 ${max} ${className}`}>
      {children}
    </div>
  );
}
