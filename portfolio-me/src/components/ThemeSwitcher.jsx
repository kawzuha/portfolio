export default function ThemeSwitcher({ themes, activeTheme, onChange }) {
  return (
    <div className="glass flex items-center gap-2 rounded-full p-1" aria-label="Theme switcher">
      {themes.map((theme) => (
        <button
          key={theme.id}
          type="button"
          className={`theme-dot ${activeTheme.id === theme.id ? 'is-active' : ''}`}
          style={{ backgroundColor: theme.swatch }}
          onClick={() => onChange(theme.id)}
          aria-label={`Use ${theme.name} theme`}
          title={theme.name}
        />
      ))}
    </div>
  );
}
