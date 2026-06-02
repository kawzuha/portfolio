import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Lock, Sparkles } from 'lucide-react';
import CatMascot from '../components/CatMascot';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function AccessGate({ onUnlock, themes, activeTheme, onThemeChange }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [unlocking, setUnlocking] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (password === 'kazuha') {
      setError('');
      setUnlocking(true);
      window.setTimeout(onUnlock, 850);
      return;
    }
    setError('That password is not quite right.');
  }

  return (
    <main className="grid min-h-screen place-items-center px-8 pb-10 pt-24 sm:pt-10">
      <div className="fixed right-4 top-4 z-10">
        <ThemeSwitcher themes={themes} activeTheme={activeTheme} onChange={onThemeChange} />
      </div>

      <AnimatePresence mode="wait">
        <motion.form
          key={unlocking ? 'unlocking' : 'locked'}
          onSubmit={handleSubmit}
          className="glass relative w-full max-w-xl overflow-hidden rounded-[2rem] p-6 text-center shadow-soft sm:p-12"
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          animate={unlocking ? { opacity: 0, scale: 1.12, filter: 'blur(8px)' } : { opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-[var(--soft)] opacity-60 blur-2xl" />
          <div className="absolute -right-10 bottom-8 h-28 w-28 rounded-full bg-[var(--accent)] opacity-60 blur-2xl" />
          <span className="card-charm left-6 top-6">✦</span>
          <span className="card-charm right-6 top-6">♡</span>
          <span className="card-charm left-6 bottom-6">✿</span>
          <span className="card-charm right-6 bottom-6">⋆</span>

          <CatMascot size="lg" mood={unlocking ? 'happy' : 'calm'} className="mx-auto" />
          <div className="mx-auto mt-10 max-w-lg px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-sm">Private access</p>
            <h1 className="opening-title mt-5 text-[1.65rem] leading-tight text-[var(--text)] sm:text-4xl whitespace-nowrap font-cute">hello and welcome ♡</h1>
            <p className="mt-6 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-8 mx-auto max-w-[300px] sm:max-w-none">
              this portfolio contains my professional background, experience, and projects.
            </p>
          </div>

          <label className="mt-8 block text-left text-sm font-semibold text-[var(--text)]" htmlFor="portfolio-password">
            Password
          </label>
          <div className="mt-2 flex min-h-14 items-center gap-2 rounded-2xl border border-white/70 bg-white/70 px-4 shadow-inner focus-within:ring-4 focus-within:ring-[var(--ring)]">
            <Lock size={18} className="text-[var(--muted)]" />
            <input
              id="portfolio-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="password-input w-full bg-transparent text-[var(--text)] outline-none placeholder:text-[var(--muted)]"
              placeholder="Enter the secret password"
              autoComplete="current-password"
              aria-describedby={error ? 'password-error' : undefined}
            />
          </div>

          {error && (
            <motion.p id="password-error" className="mt-3 text-sm font-medium text-rose-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            className="button-primary mt-6 w-full"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={18} />
            Unlock portfolio
          </motion.button>
        </motion.form>
      </AnimatePresence>
    </main>
  );
}
