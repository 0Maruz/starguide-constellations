export default function LangToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle">
      {["th", "en"].map(l => (
        <button
          key={l}
          className={`lang-btn${lang === l ? " active" : ""}`}
          onClick={() => setLang(l)}
          aria-label={l === "th" ? "Switch to Thai" : "Switch to English"}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
