import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[1.75rem] brand-gradient px-5 py-6 text-ink sm:rounded-[2.5rem] sm:px-12 sm:py-14"
        >
          <span className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[26px] border-ink/10" />
          <span className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full border-[26px] border-ink/10" />
          <span className="pointer-events-none absolute inset-0 noise opacity-30" />

          <div className="relative flex flex-col items-start gap-4 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-ink/70 sm:text-[10px] sm:tracking-[0.34em]">
                Your table is ready
              </p>
              <h2 className="mt-2 font-display text-[11vw] uppercase leading-[0.88] tracking-tight sm:mt-4 sm:text-6xl sm:leading-[0.85] lg:text-7xl">
                Ready to
                <br />
                ride the storm?
              </h2>
              <p className="mt-2 max-w-md text-xs font-medium leading-snug text-ink/70 sm:mt-5 sm:text-base sm:leading-relaxed">
                One message is all it takes. Our desk replies in minutes and your ID is ready the
                same day.
              </p>
            </div>

            <div className="w-full shrink-0 lg:w-auto">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand transition-transform duration-300 ease-silk hover:-translate-y-1 sm:gap-3 sm:px-8 sm:py-5 sm:text-sm lg:w-auto"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12 sm:h-[18px] sm:w-[18px]" strokeWidth={2.6} />
                Chat on WhatsApp
              </a>
              <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-ink/80 sm:mt-3 sm:text-[10px] sm:tracking-[0.18em] lg:text-right">
                Avg. reply under 2 minutes · 24/7
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}