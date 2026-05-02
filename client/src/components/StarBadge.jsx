export default function StarBadge({ name, lang }) {
  return (
    <div className="star-badge" aria-live="polite">
      <div className={`star-name${lang === "en" ? " star-name--en" : ""}`}>{name}</div>
    </div>
  );
}
