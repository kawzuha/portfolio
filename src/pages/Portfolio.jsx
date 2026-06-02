import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { Brain, ExternalLink, GraduationCap, Headphones, Mail, MapPin, Palette, Phone, X } from 'lucide-react';
import CatMascot from '../components/CatMascot';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { contact, education, experiences, profile, projects } from '../config/portfolio';
import { fadeUp, stagger } from '../animations/variants';

const iconMap = {
  Email: Mail,
  Phone,
  Instagram: InstagramIcon,
  Location: MapPin
};

const experienceIconMap = {
  uiux: Palette,
  ai: Brain,
  csr: Headphones
};

export default function Portfolio({ themes, activeTheme, onThemeChange }) {
  const [activeExperience, setActiveExperience] = useState(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 2, damping: 12, mass: 1.5 });
  const springY = useSpring(mouseY, { stiffness: 2, damping: 12, mass: 1.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <Navbar themes={themes} activeTheme={activeTheme} onThemeChange={onThemeChange} />
      <main className="mx-auto w-[min(1120px,calc(100%-4rem))] pb-20 pt-8">
        <Section id="home" className="min-h-[calc(100vh-7rem)] pt-8 md:pt-14">
          <div className="grid items-center gap-8 lg:grid-cols-[0.32fr_1fr]">
            <motion.div className="hidden justify-self-center lg:block" variants={fadeUp}>
              <CatMascot size="lg" mood="happy" />
            </motion.div>

            <motion.div variants={stagger} initial="hidden" animate="visible" className="relative">
              <span className="hero-charm -left-8 top-0">✦</span>
              <span className="hero-charm -right-8 top-12">♡</span>
              <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Private portfolio
              </motion.p>
              <motion.h1 variants={fadeUp} className="mono-heading mt-4 text-4xl leading-tight text-[var(--text)] md:text-6xl">
                {profile.name}
              </motion.h1>
              <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
                {profile.titles.map((title) => (
                  <span key={title} className="pill">
                    {title}
                  </span>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
                {profile.intro}
              </motion.p>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
                {profile.summary}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-3">
                {profile.years.map((item, index) => (
                  <motion.div 
                    key={item.label} 
                    className="metric"
                    whileHover={{ y: -5, scale: 1.02, backgroundColor: "var(--surface)" }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience hub" title="Choose an experience to open" titleClassName="mono-heading">
          <div className="grid gap-5 md:grid-cols-3">
            {experiences.map((experience, index) => (
              <motion.button
                type="button"
                key={experience.id}
                className="experience-card group text-left"
                onClick={() => setActiveExperience(experience)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {(() => {
                  const Icon = experienceIconMap[experience.id] || Brain;
                  return (
                    <span className="icon-orb">
                      <Icon size={24} />
                    </span>
                  );
                })()}
                <h3>{experience.title}</h3>
                <p>{experience.overview}</p>
                <span className="mt-5 inline-flex text-sm font-bold text-[var(--text)]">View details</span>
              </motion.button>
            ))}
          </div>
          <CatMascot size="sm" className="ml-auto mt-5" />
        </Section>

        <Section id="projects" eyebrow="My Portfolio" title="Featured Projects" titleClassName="mono-heading">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                title={`Visit ${project.link}`}
                className="experience-card block group"
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-[var(--text)]">{project.title}</h3>
                  <ExternalLink size={20} className="text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors" />
                </div>
                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  {project.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                  Visit website
                </span>
              </motion.a>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Education background" title="Learning timeline" titleClassName="mono-heading">
          <div className="timeline">
            {education.map((item) => (
              <motion.article 
                key={`${item.institution}-${item.year}`} 
                className="timeline-item"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="timeline-dot">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--muted)]">{item.year}</p>
                  <h3 className="mt-1 text-2xl font-bold text-[var(--text)]">{item.institution}</h3>
                  <p className="mt-2 text-[var(--muted)]">{item.degree}</p>
                  <p className="mt-3 font-semibold text-[var(--text)]">{item.gpa}</p>
                  <p className="mt-2 text-[var(--muted)]">{item.achievements}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact me" title="Let’s keep in touch" titleClassName="mono-heading">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contact.map((item) => {
              const Icon = iconMap[item.label] || Mail;
              return (
                <motion.article 
                  key={item.label} 
                  className="contact-card" 
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Icon size={24} />
                  <h3>{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </motion.article>
              );
            })}
          </div>
        </Section>
      </main>

      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:flex items-center gap-1"
      >
        <CatMascot size="nav" className="drop-shadow-md" />
        <motion.div 
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-[1.5rem] bg-[var(--surface)] px-4 py-2 text-[14px] font-cute font-bold text-[var(--muted)] shadow-soft ring-1 ring-[var(--soft)] backdrop-blur-sm"
        >
          hire me :>
          <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[var(--surface)] ring-b-1 ring-l-1 ring-[var(--soft)]" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeExperience && <ExperienceModal experience={activeExperience} onClose={() => setActiveExperience(null)} />}
      </AnimatePresence>
    </>
  );
}

function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.4" r="1.1" fill="currentColor" />
    </svg>
  );
}

function ExperienceModal({ experience, onClose }) {
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.article
        className="modal-panel"
        initial={{ opacity: 0, y: 34, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Experience</p>
            <h2 className="mt-2 mono-heading text-4xl text-[var(--text)]">{experience.title}</h2>
          </div>
          <button type="button" className="icon-button shrink-0" onClick={onClose} aria-label="Close experience details">
            <X size={18} />
          </button>
        </div>
        {experience.image && (
          <img src={experience.image} alt={experience.title} className="mt-6 w-full rounded-2xl object-cover aspect-video shadow-sm" />
        )}
        <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">{experience.overview}</p>
        <DetailList title="Responsibilities" items={experience.responsibilities} />
        <DetailList title="Skills" items={experience.skills} />
        <DetailList title="Tools" items={experience.tools} />
      </motion.article>
    </motion.div>
  );
}

function DetailList({ title, items }) {
  return (
    <div className="mt-7">
      <h3 className="text-lg font-bold text-[var(--text)]">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span className="pill" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
