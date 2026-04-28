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
    label:  "กลุ่มดาว",
    hint0:  "แตะหน้าจอเพื่อเริ่มต้น",
    hint1:  "กดสองครั้งเพื่อฟังคำอธิบาย",
    hint2:  "กดสองครั้งเพื่อหยุดเสียง",
    loading: "กำลังโหลดเสียง...",
  },
  en: {
    label:  "Constellation",
    hint0:  "Tap screen to begin",
    hint1:  "Double-tap to hear description",
    hint2:  "Double-tap to stop",
    loading: "Loading audio...",
  },
};

const params = new URLSearchParams(window.location.search);
const rawId  = params.get("star") ?? "01";
const starId = VALID_STAR_IDS.has(rawId) ? rawId : "01";

export default function App() {
  const canvasRef             = useRef(null);
  const audioUnlockedRef      = useRef(false);   // tracks whether audio context is unlocked
  const [lang, setLang]       = useState("th");
  const [started, setStarted] = useState(false);
  const [flash, setFlash]     = useState(null);

  useStarfield(canvasRef);

  // ── FIX 1: correct names — stop (not cancel) · isPlaying is boolean (not fn)
  const { speak, stop, isPlaying, isLoading, error, clearError } = useSpeech();

  const entry = constellations[starId];
  const ui    = UI_TEXT[lang];

  // ── FIX 2: drive hint from hook state, not local state
  const hint = !started
    ? ui.hint0
    : isLoading
      ? ui.loading
      : isPlaying
        ? ui.hint2
        : ui.hint1;

  const triggerFlash = useCallback((type) => {
    setFlash(type);
    setTimeout(() => setFlash(null), 800);
  }, []);

  // ── AUDIO UNLOCK ──────────────────────────────────────────────────────────
  // Called on the very first user tap — resumes AudioContext so that
  // subsequent audio.play() calls work even after async fetch operations.
  const unlockAudio = useCallback(() => {
    if (audioUnlockedRef.current) return;
    audioUnlockedRef.current = true;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) {
        const ctx = new Ctx();
        ctx.resume().then(() => ctx.close()).catch(() => {});
      }
    } catch {
      // AudioContext not available — the new Audio() pre-creation in
      // useSpeech.js still handles most browsers without it.
    }
  }, []);

  const handleSingleTap = useCallback(() => {
    unlockAudio(); // unlock on very first interaction
    if (!started) { setStarted(true); return; }
    triggerFlash("error");
  }, [started, unlockAudio, triggerFlash]);

  const handleDoubleTap = useCallback(() => {
    unlockAudio(); // also unlock here in case user skips single-tap
    if (!started) setStarted(true);

    // ── FIX 1 cont: isPlaying is boolean, stop() not cancel()
    if (isPlaying || isLoading) {
      stop();
      triggerFlash("error");                           // red = stopped
      if (navigator.vibrate) navigator.vibrate(60);
      return;
    }

    // Start speaking
    const text = entry?.[lang]?.text
      ?? (lang === "th" ? "ไม่พบข้อมูล" : "No data available");

    speak(text);

    triggerFlash("active");                            // green = started
    if (navigator.vibrate) navigator.vibrate([40, 30, 40]);

    // ── FIX 3: window.speechSynthesis polling removed entirely.
    //    isPlaying from the hook updates automatically when audio ends.
    //    No interval needed.

  }, [started, entry, lang, speak, stop, isPlaying, isLoading, unlockAudio, triggerFlash]);

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

      {/* ── FIX 4: show TTS errors so user knows what went wrong ─────────── */}
      {error && (
        <div
          role="alert"
          onClick={clearError}
          style={{
            position: "fixed",
            bottom: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
            background: "rgba(200,50,50,0.92)",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "10px",
            fontSize: "14px",
            maxWidth: "88vw",
            textAlign: "center",
            cursor: "pointer",
            lineHeight: 1.4,
          }}
        >
          ⚠️ {error}
          <br />
          <span style={{ fontSize: "12px", opacity: 0.8 }}>(แตะเพื่อปิด)</span>
        </div>
      )}

      <div className="instruction" aria-live="polite">
        <p className={isPlaying ? "hint-speaking" : ""}>{hint}</p>
      </div>
      <TapZone onSingleTap={handleSingleTap} onDoubleTap={handleDoubleTap} />
      <div className={`status-dot${flash ? ` ${flash}` : ""}`} aria-hidden="true" />
    </>
  );
}