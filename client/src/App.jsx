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
  th: {
    label: "กลุ่มดาว",
    hint0: "แตะหน้าจอเพื่อเริ่มต้น",
    hint1: "กดสองครั้งเพื่อฟังคำอธิบาย",
    hint2: "กดสองครั้งเพื่อหยุดเสียง",   // hint ขณะพูดอยู่
  },
  en: {
    label: "Constellation",
    hint0: "Tap screen to begin",
    hint1: "Double-tap to hear description",
    hint2: "Double-tap to stop",
  },
};

const params = new URLSearchParams(window.location.search);
const rawId  = params.get("star") ?? "01";
const starId = VALID_STAR_IDS.has(rawId) ? rawId : "01";

export default function App() {
  const canvasRef              = useRef(null);
  const [lang, setLang]        = useState("th");
  const [started, setStarted]  = useState(false);
  const [speaking, setSpeaking] = useState(false);  // track สถานะเสียง
  const [flash, setFlash]      = useState(null);

  useStarfield(canvasRef);
  const { speak, cancel, isSpeaking } = useSpeech();

  const entry = constellations[starId];
  const ui    = UI_TEXT[lang];

  // hint เปลี่ยนตามสถานะ
  const hint = !started ? ui.hint0 : speaking ? ui.hint2 : ui.hint1;

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

    // ถ้ากำลังพูดอยู่ → cancel
    if (isSpeaking()) {
      cancel();
      setSpeaking(false);
      triggerFlash("error");   // flash สีแดง = หยุด
      if (navigator.vibrate) navigator.vibrate(60);
      return;
    }

    // ยังไม่พูด → เริ่มพูด
    const text = entry?.[lang]?.text ?? (lang === "th" ? "ไม่พบข้อมูล" : "No data available");
    const started_ = speak(text, lang);

    if (started_ !== false) {
      setSpeaking(true);
      triggerFlash("active");   // flash สีเขียว = เริ่มพูด
      if (navigator.vibrate) navigator.vibrate([40, 30, 40]);

      // reset speaking state เมื่อเสียงจบ
      const synth = window.speechSynthesis;
      const checkDone = setInterval(() => {
        if (!synth.speaking) {
          setSpeaking(false);
          clearInterval(checkDone);
        }
      }, 300);
    }
  }, [started, entry, lang, speak, cancel, isSpeaking, triggerFlash]);

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
        <p className={speaking ? "hint-speaking" : ""}>{hint}</p>
      </div>
      <TapZone onSingleTap={handleSingleTap} onDoubleTap={handleDoubleTap} />
      <div className={`status-dot${flash ? ` ${flash}` : ""}`} aria-hidden="true" />
    </>
  );
}