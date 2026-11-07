import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function Watermark() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [-3.5, 3.5]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 flex select-none items-center justify-center overflow-hidden">
      <motion.span
        aria-hidden="true"
        style={reduce ? undefined : { rotate, y, x }}
        className="whitespace-nowrap text-center font-display text-[18vw] uppercase leading-none tracking-tighter text-foreground/[0.07] sm:text-[22vw]"
      >
        DHURANDER
      </motion.span>
    </div>
  );
}