import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function Section({ id, eyebrow, title, children, className = '', titleClassName = 'mono-heading' }) {
  return (
    <motion.section
      id={id}
      className={`section-shell scroll-mt-28 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      {(eyebrow || title) && (
        <div className="mb-9 max-w-3xl">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{eyebrow}</p>}
          {title && <h2 className={`mt-3 text-3xl text-[var(--text)] md:text-5xl ${titleClassName}`}>{title}</h2>}
        </div>
      )}
      {children}
    </motion.section>
  );
}
