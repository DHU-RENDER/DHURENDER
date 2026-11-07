import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { gameMessage, waLink } from "@/lib/whatsapp";

export default function ArenaCarousel({ games }) {
  const scroller = useRef(null);
  const [offsets, setOffsets] = useState(() => games.map(() => 1));

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const cards = Array.from(el.querySelectorAll("[data-arena-card]"));
      setOffsets(
        cards.map((card) => {
          const cardRect = card.getBoundingClientRect();
          const distance = (cardRect.left + cardRect.width / 2 - center) / (rect.width * 0.5);
          return Math.max(-1, Math.min(1, distance));
        })
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [games]);

  const nudge = (dir) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * 190, behavior: "smooth" });
  };

  const bounce = (event) => {
    const card = event.currentTarget;
    card.classList.remove("arena-tap");
    void card.offsetWidth;
    card.classList.add("arena-tap");
  };

  const clearBounce = (event) => event.currentTarget.classList.remove("arena-tap");

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="no-scrollbar flex snap-x snap-mandatory items-start gap-3 overflow-x-auto overflow-y-hidden px-[calc(50%_-_84px)] pb-10 pt-3 sm:gap-4 sm:px-[calc(50%_-_100px)]"
      >
        {games.map((game, i) => {
          const offset = offsets[i] ?? 1;
          const distance = Math.abs(offset);
          const isCenter = distance < 0.22;

          return (
            <a
              key={game.name}
              href={waLink(gameMessage(game.name))}
              target="_blank"
              rel="noopener noreferrer"
              data-arena-card
              onPointerDown={bounce}
              onAnimationEnd={clearBounce}
              style={{
                transform: `translateY(${distance * distance * 34}px) rotate(${offset * 7}deg) scale(${
                  1.04 - distance * 0.13
                })`,
                opacity: 1 - distance * 0.32,
                borderColor: isCenter ? "hsl(var(--brand) / 0.65)" : undefined,
                boxShadow: isCenter
                  ? "0 26px 60px -28px hsl(47 100% 52% / 0.65)"
                  : "0 10px 30px -24px rgba(0,0,0,0.6)",
              }}
              className="group w-[168px] shrink-0 snap-center overflow-hidden rounded-[1.6rem] border border-border bg-card transition-[opacity,border-color,box-shadow] duration-300 will-change-transform sm:w-[200px]"
            >
              <div className="relative h-[132px] w-full overflow-hidden sm:h-[158px]">
                <Image
                  src={game.image}
                  alt={game.name}
                  fittingType="fill"
                  className="h-full w-full object-cover transition-transform duration-700 ease-silk group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  Live
                </span>
                <h3 className="absolute inset-x-3 bottom-2.5 font-display text-xl uppercase leading-none text-white">
                  {game.name}
                </h3>
              </div>

              <div className="flex items-center justify-between gap-2 px-3 py-3">
                <span className="truncate text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-muted-foreground">
                  {game.meta}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-ink">
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-1 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Previous arena"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors duration-300 hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-muted-foreground">
          Swipe to explore
        </span>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Next arena"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors duration-300 hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}