import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
export const CircleCount = ({ value }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
    useEffect(() => {
      const animation = animate(count, Number(value), { duration: 2 });
  
      return animation.stop;
    }, []);
    return <motion.div className="text-4xl font-bold">{rounded}</motion.div>;
}