export default function StarBadge({ index, name, label, lang, total }) {
  return (
    <div className="star-badge" aria-live="polite">
      <div className="star-number">{label} · {index} / {total}</div>
      <div className={`star-name${lang === "en" ? " star-name--en" : ""}`}>{name}</div>
    </div>
  );
}
