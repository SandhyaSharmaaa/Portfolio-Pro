import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute -inset-[10px] opacity-40 blur-[60px] animate-[aurora_12s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 40% 50% at 20% 50%, rgba(224,141,160,0.25), transparent)," +
            "radial-gradient(ellipse 40% 40% at 80% 30%, rgba(230,217,240,0.2), transparent)," +
            "radial-gradient(ellipse 30% 50% at 50% 80%, rgba(255,234,237,0.25), transparent)," +
            "radial-gradient(ellipse 50% 30% at 70% 60%, rgba(208,228,237,0.12), transparent)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute -inset-[10px] opacity-30 blur-[80px] animate-[aurora_16s_ease-in-out_infinite_alternate-reverse]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 35% 45% at 60% 40%, rgba(224,141,160,0.15), transparent)," +
            "radial-gradient(ellipse 45% 35% at 30% 70%, rgba(245,220,200,0.12), transparent)",
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
}
