export default function Orb({ flash, isPlaying }) {
  const state = flash ?? (isPlaying ? "active" : null);
  return (
    <div className="orb-wrap" aria-hidden="true">
      <div className="orb-ring" />
      <div className="orb-ring" />
      <div className="orb-ring" />
      <div className={`orb${state ? ` ${state}` : ""}`} />
    </div>
  );
}
