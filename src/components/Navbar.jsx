import { ArrowUp } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { useActiveSection } from '../hooks/useActiveSection';

const links = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#education', label: 'Education', id: 'education' },
  { href: '#contact', label: 'Contact', id: 'contact' }
];
const sectionIds = links.map((link) => link.id);

export default function Navbar({ themes, activeTheme, onThemeChange }) {
  const active = useActiveSection(sectionIds);

  return (
    <header className="sticky top-3 z-40 mx-auto w-[min(1120px,calc(100%-4rem))]">
      <nav className="glass grid grid-cols-[1fr_auto_1fr] min-h-16 items-center gap-2 rounded-full px-3 py-2 shadow-soft">
        {/* Left Spacer to keep links centered */}
        <div className="hidden md:block" />
        <div className="hidden items-center justify-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`nav-link text-lg ${active === link.id ? 'is-active' : ''}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2">
          <ThemeSwitcher themes={themes} activeTheme={activeTheme} onChange={onThemeChange} />
          <a href="#home" className="icon-button" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </nav>
      <div className="glass mt-2 flex items-center justify-center gap-1 overflow-x-auto rounded-full px-2 py-2 shadow-sm md:hidden">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={`nav-link text-base shrink-0 ${active === link.id ? 'is-active' : ''}`}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
