import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import HeroSlideshow from "@/components/site/HeroSlideshow";
import { waLink } from "@/lib/whatsapp";

const STATS = [
  { value: "₹300", label: "Min deposit" },
  { value: "10 min", label: "Withdrawal" },
  { value: "24/7", label: "WhatsApp support" },
];

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-24 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={rise}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 backdrop-blur"
          >
            <Zap className="h-3.5 w-3.5 text-brand" strokeWidth={2.6} />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-foreground/80 sm:text-[11px]">
              India&apos;s fastest gaming exchange
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-6 font-display text-[17vw] uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-[5.4rem] xl:text-[6rem]"
          >
            Ride the
            <br />
            <span className="text-brand-gradient">Dhurander</span>
            <br />
            storm.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Cricket, casino and card games on one lightning-fast exchange. Get your ID on
            WhatsApp in minutes, withdraw in ten, and talk to a real person any hour of the day.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full brand-gradient px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-ink shadow-brand transition-transform duration-300 ease-silk hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-silk group-hover:translate-x-full" />
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.6} />
              Get ID on WhatsApp
            </a>
            <a
              href="#arenas"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-foreground/85 backdrop-blur transition-all duration-300 hover:border-brand/60 hover:text-brand"
            >
              Explore arenas
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl leading-none text-foreground sm:text-[28px]">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium text-muted-foreground"
          >
            <ShieldCheck className="h-4 w-4 text-brand" />
            Verified payouts · Encrypted transactions · 18+ players only
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSlideshow />
        </motion.div>
      </div>
    </section>
  );
}