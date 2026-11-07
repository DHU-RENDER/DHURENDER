import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { target: 15, suffix: "K+", label: "Active members" },
  { target: 7.5, suffix: " Cr+", label: "Total payouts", decimals: 1, prefix: "₹" },
  { target: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { target: 10, suffix: " min", label: "Avg. withdrawal" },
];

function Counter({ target, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-4xl leading-none text-foreground sm:text-5xl">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-7 rounded-[2rem] border border-border bg-foreground/[0.03] px-6 py-7 sm:px-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i % 2 === 1 ? "border-l border-border pl-6 lg:pl-8" : "lg:border-l lg:border-border lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
              }
            >
              <Counter {...stat} />
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}