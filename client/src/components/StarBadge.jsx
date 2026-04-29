export default function StarBadge({ starId, name, label, lang, total }) {
  return (
    <div className="star-badge" aria-live="polite">
      <div className="star-number">{label} · {parseInt(starId, 10)} / {total}</div>
      <div className={`star-name${lang === "en" ? " star-name--en" : ""}`}>{name}</div>
    </div>
  );
}
