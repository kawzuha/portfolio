const items = ['✦', '♡', '✿', '•', '✧', '♡', '✦', '✿', '⋆', '❀', '♡', '✧', '˚', '✦', '✿', '♡'];

export default function Decorations() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--primary),transparent_30%),radial-gradient(circle_at_bottom_right,var(--soft),transparent_35%)] opacity-45" />
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="float-charm"
          style={{
            left: `${8 + index * 12}%`,
            top: `${12 + ((index * 17) % 70)}%`,
            animationDelay: `${index * 0.45}s`
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
