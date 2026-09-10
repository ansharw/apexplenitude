import { ReactNode } from "react";

export function PeopleProfile({
  name,
  title,
  light = false,
  children,
}: {
  name: string;
  title: string;
  light?: boolean;
  children?: ReactNode;
}) {
  const ruleColor = light ? "border-rule-mineral-soft" : "border-rule-dark-soft";
  const textColor = light ? "text-ink" : "text-fg";
  const mutedColor = light ? "text-ink-muted" : "text-fg-muted";

  return (
    <div className={`flex flex-col gap-8 border ${ruleColor} p-8 sm:p-10 sm:flex-row sm:items-start`}>
      <span
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border ${ruleColor} ${textColor}`}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.3">
          <circle cx="12" cy="8.5" r="3.6" />
          <path d="M4.5 20c1.4-4 4-6 7.5-6s6.1 2 7.5 6" strokeLinecap="round" />
        </svg>
      </span>

      <div>
        <p className="coordinate opacity-50">{title}</p>
        <h3 className={`mt-3 font-serif text-2xl sm:text-3xl ${textColor}`}>{name}</h3>
        {children && <div className={`mt-4 font-sans text-sm sm:text-base leading-relaxed ${mutedColor}`}>{children}</div>}
      </div>
    </div>
  );
}
