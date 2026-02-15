import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";

interface SectionHeaderProps {
  number: string;
  label: string;
  heading: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  number,
  label,
  heading,
  centered,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <BlurFade delay={0.1}>
        <p className="font-mono text-xs uppercase tracking-widest text-pink-400">
          {number} &mdash;&mdash; {label}
        </p>
      </BlurFade>
      <BlurFade delay={0.2}>
        <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight tracking-[-0.02em] text-text-primary">
          {heading}
        </h2>
      </BlurFade>
    </div>
  );
}
