import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-1.5 px-6 text-center text-xs text-text-muted sm:text-sm">
        <span>Designed & Built by Sandhya Sharma</span>
        <Heart className="h-3.5 w-3.5 fill-pink-400 text-pink-400" />
        <span>2025</span>
      </div>
    </footer>
  );
}
