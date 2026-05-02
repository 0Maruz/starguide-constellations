import { useEffect, useState, useRef, useMemo } from "react";
import { constellations } from "../data/constellations";
import "./StarSelector.css";

const ZODIAC_IDS = [
  "aries", "taurus", "gemini", "cancer",
  "leo", "virgo", "libra", "scorpius",
  "sagittarius", "capricornus", "aquarius", "pisces",
];

const TEXT = {
  th: {
    triggerLabel: "เลือกกลุ่มดาว",
    title: "เลือกกลุ่มดาว",
    zodiac: "จักรราศี",
    others: "กลุ่มดาวอื่น ๆ",
    close: "ปิด",
  },
  en: {
    triggerLabel: "Select Constellation",
    title: "Select Constellation",
    zodiac: "Zodiac",
    others: "Other Constellations",
    close: "Close",
  },
};

function MiniMap({ entry }) {
  const stars = entry?.stars ?? [];
  const lines = entry?.lines ?? [];

  const { minX, minY, w, h } = useMemo(() => {
    if (!stars.length) return { minX: 0, minY: 0, w: 100, h: 100 };
    let mnx = Infinity, mny = Infinity, mxx = -Infinity, mxy = -Infinity;
    for (const [x, y] of stars) {
      if (x < mnx) mnx = x;
      if (x > mxx) mxx = x;
      if (y < mny) mny = y;
      if (y > mxy) mxy = y;
    }
    const pad = 8;
    return {
      minX: mnx - pad,
      minY: mny - pad,
      w: Math.max(1, mxx - mnx) + pad * 2,
      h: Math.max(1, mxy - mny) + pad * 2,
    };
  }, [stars]);

  return (
    <svg
      className="star-selector__mini"
      viewBox={`${minX} ${minY} ${w} ${h}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {lines.map(([a, b], i) => {
        const sa = stars[a];
        const sb = stars[b];
        if (!sa || !sb) return null;
        return (
          <line
            key={i}
            x1={sa[0]} y1={sa[1]}
            x2={sb[0]} y2={sb[1]}
            stroke="rgba(79,195,247,0.55)"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
        );
      })}
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.4" fill="rgba(220,240,255,0.92)" />
      ))}
    </svg>
  );
}

function ConstellationCard({ id, lang, active, onSelect }) {
  const entry = constellations[id];
  const name = entry?.[lang]?.name ?? id;
  return (
    <button
      type="button"
      className={`star-selector__card${active ? " is-active" : ""}`}
      onClick={() => onSelect(id)}
      aria-pressed={active}
      aria-label={name}
    >
      <MiniMap entry={entry} />
      <span className="star-selector__name">{name}</span>
    </button>
  );
}

export default function StarSelector({ starId, setStarId, lang, onClose }) {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef(null);
  const t = TEXT[lang] ?? TEXT.en;

  const others = useMemo(
    () => Object.keys(constellations).filter((id) => !ZODIAC_IDS.includes(id)),
    []
  );

  const close = () => {
    setOpen(false);
    onClose?.();
  };

  const handleSelect = (id) => {
    setStarId(id);
    close();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sheetRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="star-selector__trigger"
        onClick={() => setOpen(true)}
        aria-label={t.title}
        title={t.title}
      >
        <span className="star-selector__trigger-icon" aria-hidden="true">☆</span>
        <span className="star-selector__trigger-text">{t.triggerLabel}</span>
      </button>

      <div
        className={`star-selector${open ? " star-selector--open" : ""}`}
        aria-hidden={!open}
        onClick={close}
      >
        <div
          ref={sheetRef}
          className="star-selector__sheet"
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="star-selector__handle" aria-hidden="true" />
          <button
            type="button"
            className="star-selector__close"
            onClick={close}
            aria-label={t.close}
          >
            ×
          </button>

          <header className="star-selector__header">
            <h2>{t.title}</h2>
          </header>

          <div className="star-selector__body">
            <section className="star-selector__section">
              <h3 className="star-selector__section-title">{t.zodiac}</h3>
              <div className="star-selector__grid">
                {ZODIAC_IDS.map((id) => (
                  <ConstellationCard
                    key={id}
                    id={id}
                    lang={lang}
                    active={id === starId}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </section>

            <section className="star-selector__section">
              <h3 className="star-selector__section-title">{t.others}</h3>
              <div className="star-selector__grid">
                {others.map((id) => (
                  <ConstellationCard
                    key={id}
                    id={id}
                    lang={lang}
                    active={id === starId}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </section>

            <p className="star-selector__credit">
              <a
                href="https://github.com/0Maruz"
                target="_blank"
                rel="noopener noreferrer"
              >
                dev · 0Maruz
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
