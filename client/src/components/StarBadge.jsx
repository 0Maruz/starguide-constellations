export default function StarBadge({ starId, name, label }) {
  return (
    <div className="star-badge" aria-live="polite">
      <div className="star-number">{label} {starId}</div>
      <div className="star-name">{name}</div>
    </div>
  );
}