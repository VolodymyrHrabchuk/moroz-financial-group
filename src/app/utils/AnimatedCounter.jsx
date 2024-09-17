"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const AnimatedCounter = ({ value, suffix }) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    const num = Math.floor(latest).toLocaleString();
    return suffix ? `${num}${suffix}` : num;
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        type: "spring",
        stiffness: 100,
        damping: 80,
      });

      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <motion.div ref={ref} className="text-4xl font-bold text-center">
      {rounded}
    </motion.div>
  );
};

export default AnimatedCounter;
