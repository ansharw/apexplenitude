import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function IndexRow({
  index,
  title,
  description,
  href,
  light = false,
  meta,
}: {
  index: string;
  title: string;
  description?: string;
  href?: string;
  light?: boolean;
  meta?: string;
}) {
  const ruleColor = light ? "border-rule-light-soft" : "border-rule-dark-soft";
  const textColor = light ? "text-ink" : "text-fg";
  const mutedColor = light ? "text-ink-muted" : "text-fg-muted";

  const inner = (
    <div
      className={`group grid grid-cols-1 sm:grid-cols-[80px_1fr_auto] items-baseline gap-x-8 gap-y-2 border-t ${ruleColor} py-8 transition-colors duration-300`}
    >
      <span className="coordinate opacity-60">{index}</span>
      <div>
        {meta && <p className="coordinate mb-2 opacity-50">{meta}</p>}
        <h3 className={`font-serif text-2xl sm:text-3xl ${textColor}`}>{title}</h3>
        {description && (
          <p className={`mt-3 max-w-xl font-sans text-sm sm:text-base leading-relaxed ${mutedColor}`}>
            {description}
          </p>
        )}
      </div>
      {href && (
        <span
          className={`hidden sm:inline-block font-serif text-xl transition-transform duration-500 ease-[var(--ease-institutional)] group-hover:translate-x-2 ${textColor}`}
        >
          →
        </span>
      )}
    </div>
  );

  return (
    <Reveal>
      {href ? (
        <Link href={href} className="block">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </Reveal>
  );
}
