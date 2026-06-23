'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

type Props = HTMLMotionProps<'div'> & { delay?: number };

/** Lightweight scroll-reveal wrapper. */
export function Reveal({ delay = 0, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
