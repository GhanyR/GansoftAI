import { useEffect, useRef } from "react";
import { useInView, useAnimation as useFramerAnimation } from "framer-motion";

export function useAnimation() {
  const controls = useFramerAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, isInView]);
  
  return { controls, ref };
}
