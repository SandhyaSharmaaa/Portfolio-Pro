import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  rounded?: "xl" | "2xl";
}

const roundedMap = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
} as const;

export function Card({
  hover = true,
  rounded = "xl",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        roundedMap[rounded],
        "border border-border/60 bg-gradient-to-br from-white to-surface/30 shadow-card backdrop-blur-sm transition-all duration-300",
        hover && "hover:border-pink-200 hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
