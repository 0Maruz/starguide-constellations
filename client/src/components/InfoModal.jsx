import { useEffect, useRef } from "react";
import { useConstellationReference } from "../hooks/useReference";

const LABELS = {
  th: { close: "ปิด", loading: "กำลังโหลด...", error: "โหลดข้อมูลไม่สำเร็จ" },
  en: { close: "Close", loading: "Loading...", error: "Failed to load info" },
};

export default function InfoModal({ open, onClose, id, lang }) {
  const panelRef = useRef(null);
  const { html, loading, error } = useConstellationReference(id, lang, open);
  const t = LABELS[lang] ?? LABELS.en;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <div
      className={`info-modal${open ? " info-modal--open" : ""}`}
      aria-hidden={!open}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="info-modal__panel"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="info-modal__handle" aria-hidden="true" />
        <button
          className="info-modal__close"
          onClick={onClose}
          aria-label={t.close}
        >
          ×
        </button>
        <div className="info-modal__body">
          {loading && <p className="info-modal__status">{t.loading}</p>}
          {error && <p className="info-modal__status info-modal__status--error">{t.error}</p>}
          {!loading && !error && (
            <div
              className="info-modal__content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
