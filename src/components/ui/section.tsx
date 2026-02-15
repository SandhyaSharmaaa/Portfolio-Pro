import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  pattern?: React.ReactNode;
  tintClassName?: string;
  blendTop?: boolean;
  blendBottom?: boolean;
  offscreen?: boolean;
}

export function Section({
  id,
  children,
  className,
  pattern,
  tintClassName,
  blendTop = true,
  blendBottom = true,
  offscreen = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative -mt-16 overflow-hidden py-24 lg:py-32",
        offscreen && "section-offscreen",
        className,
      )}
    >
      {pattern}
      {tintClassName && (
        <div
          className={cn("pointer-events-none absolute inset-0", tintClassName)}
        />
      )}
      {blendTop && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      )}
      {blendBottom && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      )}
      {children}
    </section>
  );
}
