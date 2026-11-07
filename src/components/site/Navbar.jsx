import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import ThemeToggle from "@/components/site/ThemeToggle";
import { Image } from "@/components/ui/image";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const LOGO =
  "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/d76852005_generated_2a3d0a8f.png";

const LINKS = [
  { label: "Arenas", href: "#arenas" },
  { label: "Why Us", href: "#trust" },
  { label: "How to Join", href: "#join" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-silk",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-brand/30 bg-ink shadow-brand transition-transform duration-500 ease-silk group-hover:rotate-[-8deg] sm:h-11 sm:w-11">
            <Image
              src={LOGO}
              alt="Dhurander logo"
              fittingType="fill"
              className="h-full w-full"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg uppercase tracking-[0.16em] text-foreground sm:text-xl">
              Dhurander
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.34em] text-muted-foreground">
              Gaming Exchange
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-brand transition-transform duration-300 ease-silk group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full brand-gradient px-5 py-2.5 text-sm font-bold text-ink shadow-brand transition-all duration-300 ease-silk hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-18px_hsl(47_100%_52%_/_0.9)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" strokeWidth={2.4} />
            Get ID
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand/60 hover:text-brand lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-500 ease-silk lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full brand-gradient px-5 py-3 text-sm font-bold uppercase tracking-wider text-ink"
          >
            <MessageCircle className="h-4 w-4" /> Get ID on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}