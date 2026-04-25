import { useRef, useState, useCallback } from "react";
import { constellations, VALID_STAR_IDS } from "./data/constellations";
import { useStarfield } from "./hooks/useStarfield";
import { useSpeech } from "./hooks/useSpeech";
import ConstellationSVG from "./components/ConstellationSVG";
import TapZone from "./components/TapZone";
import LangToggle from "./components/LangToggle";
import StarBadge from "./components/StarBadge";
import "./App.css";

const UI_TEXT = {
  th: { label: "กลุ่มดาว", hint0: "แตะหน้าจอเพื่อเริ่มต้น", hint1: "กดสองครั้งเพื่อฟังคำอธิบาย" },
  en: { label: "Constellation", hint0: "Tap screen to begin", hint1: "Double-tap to hear description" },
};

const params = new URLSearchParams(window.location.search);
const rawId  = params.get("star") ?? "01";
const starId = VALID_STAR_IDS.has(rawId) ? rawId : "01";

export default function App() {
  const canvasRef             = useRef(null);
  const [lang, setLang]       = useState("th");
  const [started, setStarted] = useState(false);
  const [flash, setFlash]     = useState(null);

  useStarfield(canvasRef);
  const { speak } = useSpeech();

  const entry = constellations[starId];
  const ui    = UI_TEXT[lang];

  const triggerFlash = useCallback((type) => {
    setFlash(type);
    setTimeout(() => setFlash(null), 800);
  }, []);

  const handleSingleTap = useCallback(() => {
    if (!started) { setStarted(true); return; }
    triggerFlash("error");
  }, [started, triggerFlash]);

  const handleDoubleTap = useCallback(() => {
    if (!started) setStarted(true);
    triggerFlash("active");
    const text = entry?.[lang]?.text ?? (lang === "th" ? "ไม่พบข้อมูล" : "No data available");
    speak(text, lang);
  }, [started, entry, lang, speak, triggerFlash]);

  return (
    <>
      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0 }} />
      <ConstellationSVG entry={entry} />
      <LangToggle lang={lang} setLang={setLang} />
      <StarBadge
        starId={starId}
        name={entry?.[lang]?.name ?? (lang === "th" ? "ไม่พบข้อมูล" : "Not found")}
        label={ui.label}
      />
      <div className="instruction" aria-live="polite">
        <p>{started ? ui.hint1 : ui.hint0}</p>
      </div>
      <TapZone onSingleTap={handleSingleTap} onDoubleTap={handleDoubleTap} />
      <div className={`status-dot${flash ? ` ${flash}` : ""}`} aria-hidden="true" />
    </>
  );
}
