import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ChevronLeft, ChevronRight, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/411498a22_generated_image.png",
    kicker: "Live exchange",
    title: "Cricket, ball by ball",
    meta: "IPL · International · Domestic",
  },
  {
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/1dece9d1d_generated_image.png",
    kicker: "200+ tables",
    title: "Casino & card games",
    meta: "Teen Patti · Andar Bahar · Roulette",
  },
  {
    image:
      "https://media.base44.com/images/public/6ae9f8379f7c47e28faab415/213537eb4_generated_image.png",
    kicker: "Built for speed",
    title: "Payouts in 10 minutes",
    meta: "UPI · Paytm · Bank transfer",
  },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  const slide = SLIDES[index];

  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl sm:rounded-[2.5rem]">
        <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
          <AnimatePresence mode="sync">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fittingType="fill"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/40" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              {slide.kicker}
            </span>
            <span className="rounded-full border border-brand/40 bg-brand/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand backdrop-blur-md">
              18+ only
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                  {slide.meta}
                </p>
                <h3 className="mt-2 font-display text-2xl uppercase leading-none tracking-wide text-white sm:text-3xl">
                  {slide.title}
                </h3>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {SLIDES.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Show ${item.title}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500 ease-silk",
                      i === index ? "w-8 bg-brand" : "w-1.5 bg-white/40 hover:bg-white/70"
                    )}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => go(-1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-brand hover:bg-brand hover:text-ink"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => go(1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-brand hover:bg-brand hover:text-ink"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-float absolute -left-3 top-16 hidden items-center gap-2.5 rounded-2xl border border-border bg-card/95 px-3.5 py-3 shadow-xl backdrop-blur-xl sm:flex lg:-left-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand/15 text-brand">
          <Radio className="h-4 w-4" />
        </span>
        <span className="leading-tight">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Withdrawal credited
          </span>
          <span className="block text-sm font-extrabold text-foreground">₹1,20,000 · 8 min</span>
        </span>
      </div>

      <div className="absolute -bottom-5 -right-2 hidden rotate-[-6deg] rounded-2xl brand-gradient px-4 py-3 text-ink shadow-brand sm:block lg:-right-6">
        <span className="block text-[9px] font-extrabold uppercase tracking-[0.2em]">
          Welcome bonus
        </span>
        <span className="block font-display text-2xl leading-none">10% Extra</span>
      </div>
    </div>
  );
}