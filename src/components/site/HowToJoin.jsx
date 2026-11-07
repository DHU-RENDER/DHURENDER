import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, BadgeCheck, Wallet } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Message us",
    copy: "Tap any button. WhatsApp opens with your message ready — no forms.",
  },
  {
    icon: BadgeCheck,
    title: "Get your ID",
    copy: "Our desk verifies you in minutes and sends your ID and login.",
  },
  {
    icon: Wallet,
    title: "Deposit & play",
    copy: "Add funds from ₹300 and your welcome bonus lands instantly.",
  },
];

export default function HowToJoin() {
  const flow = useRef(null);
  const { scrollYProgress } = useScroll({
    target: flow,
    offset: ["start 88%", "end 65%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="join"
      className="relative scroll-mt-20 overflow-hidden border-y border-border py-12 sm:py-20"
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-brand/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get started"
          align="center"
          title={
            <>
              Three taps.
              <br />
              You&apos;re in.
            </>
          }
        />

        <div ref={flow} className="relative mx-auto mt-8 max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-6">
            <div className="relative flex flex-col">
              <div className="absolute bottom-16 left-5 top-5 w-px bg-border" />
              <motion.div
                style={{ scaleY: lineScale }}
                className="absolute bottom-16 left-5 top-5 w-px origin-top brand-gradient"
              />

              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex gap-4"
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full brand-gradient text-ink ring-4 ring-card">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2.3} />
                    </span>
                    <div className="pb-6 pt-1">
                      <span className="text-[9px] font-extrabold uppercase tracking-[0.26em] text-brand">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-0.5 font-display text-lg uppercase leading-none tracking-wide text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {step.copy}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              <div className="relative flex items-center gap-3 rounded-2xl border border-brand/30 bg-brand/10 px-3.5 py-3">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                  <span className="font-display text-lg leading-none">₹</span>
                </span>
                <p className="text-xs font-bold leading-snug text-foreground">
                  You&apos;re in — start from{" "}
                  <span className="text-brand">₹300</span> and withdraw in 10 minutes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}