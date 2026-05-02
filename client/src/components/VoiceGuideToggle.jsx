const LABEL = {
  th: { on: "ปิดเสียงนำ", off: "เปิดเสียงนำ" },
  en: { on: "Disable voice guide", off: "Enable voice guide" },
};

export default function VoiceGuideToggle({ enabled, setEnabled, lang, announce }) {
  const t = LABEL[lang] ?? LABEL.en;
  const label = enabled ? t.on : t.off;

  const handleClick = () => {
    const next = !enabled;
    setEnabled(next);
    if (next) {
      requestAnimationFrame(() => announce?.("Voice guide enabled"));
    }
  };

  return (
    <button
      type="button"
      className={`voice-guide-toggle${enabled ? " is-on" : ""}`}
      onClick={handleClick}
      aria-label={label}
      aria-pressed={enabled}
      title={label}
    >
      <span aria-hidden="true">{enabled ? "🔊" : "🔈"}</span>
    </button>
  );
}
