import { useEffect, useState } from "react";
import { Home, Dices, ShieldCheck, Zap, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const ITEMS = [
  { id: "top", label: "Home", href: "#top", icon: Home },
  { id: "arenas", label: "Arenas", href: "#arenas", icon: Dices },
  { id: "trust", label: "Vault", href: "#trust", icon: ShieldCheck },
  { id: "join", label: "Join", href: "#join", icon: Zap },
];

export default function BottomNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      let current = "top";
      ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.42) {
          current = item.id;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-end justify-between px-2">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className="group flex min-w-[46px] flex-col items-center gap-1 rounded-xl px-1.5 py-1"
              aria-current={isActive ? "true" : undefined}
            >
              <Icon
                className={cn(
                  "h-[19px] w-[19px] transition-all duration-300",
                  isActive ? "text-brand" : "text-muted-foreground group-active:scale-90"
                )}
                strokeWidth={isActive ? 2.5 : 1.9}
              />
              <span
                className={cn(
                  "text-[8.5px] font-bold uppercase tracking-[0.1em] transition-colors duration-300",
                  isActive ? "text-brand" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </a>
          );
        })}

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[54px] flex-col items-center gap-1"
        >
          <span className="-mt-5 flex h-11 w-11 items-center justify-center rounded-full brand-gradient text-ink shadow-brand transition-transform duration-300 active:scale-95">
            <MessageCircle className="h-5 w-5" strokeWidth={2.6} />
          </span>
          <span className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-brand">Chat</span>
        </a>
      </div>
    </nav>
  );
}