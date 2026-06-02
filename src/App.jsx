import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Decorations from './components/Decorations';
import CatMascot from './components/CatMascot';
import AccessGate from './pages/AccessGate';
import Portfolio from './pages/Portfolio';
import { ACCESS_SESSION_KEY } from './config/access';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, themes, setThemeId } = useTheme();
  const [loading, setLoading] = useState(true);
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(ACCESS_SESSION_KEY) === 'true');

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const titleText = 'Private portfolio';
    let index = 0;
    let isDeleting = false;
    let pauseFrames = 0;

    const animateTitle = () => {
      if (pauseFrames > 0) {
        pauseFrames--;
        return setTimeout(animateTitle, 200);
      }

      const visibleText = titleText.substring(0, index);
      // Menggunakan karakter tak terlihat \u200E untuk memastikan title tidak pernah 
      // dianggap kosong, sehingga browser tidak menampilkan alamat website.
      document.title = (visibleText || '\u200E') + '\u200E';

      if (!isDeleting && index < titleText.length) {
        index++;
        if (index === titleText.length) pauseFrames = 15;
      } else if (isDeleting && index > 0) {
        index--;
        if (index === 0) pauseFrames = 8;
      } else {
        isDeleting = !isDeleting;
      }

      const speed = isDeleting ? 100 : 200;
      const timeout = setTimeout(animateTitle, speed);
      return timeout;
    };

    const timeoutId = animateTitle();
    return () => clearTimeout(timeoutId);
  }, []);

  function handleUnlock() {
    sessionStorage.setItem(ACCESS_SESSION_KEY, 'true');
    setUnlocked(true);
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 font-mono">
      <Decorations />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 grid place-items-center bg-[var(--bg)]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="text-center">
              <CatMascot size="lg" mood="happy" />
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Preparing portfolio</p>
            </div>
          </motion.div>
        ) : unlocked ? (
          <motion.div key="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Portfolio themes={themes} activeTheme={theme} onThemeChange={setThemeId} />
          </motion.div>
        ) : (
          <AccessGate
            key="access"
            onUnlock={handleUnlock}
            themes={themes}
            activeTheme={theme}
            onThemeChange={setThemeId}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
