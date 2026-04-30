import { useRef, useState, useCallback, useEffect } from "react";
import { constellations, VALID_STAR_IDS } from "./data/constellations";
import { useStarfield } from "./hooks/useStarfield";
import { useSpeech } from "./hooks/useSpeech";
import ConstellationSlide from "./components/ConstellationSlide";
import SwipeCarousel from "./components/SwipeCarousel";
import LangToggle from "./components/LangToggle";
import StarBadge from "./components/StarBadge";
import Orb from "./components/Orb";
import InfoModal from "./components/InfoModal";
import "./App.css";

const STAR_IDS = [
  "aquarius","aquila","aries","auriga","bootes",
  "cancer","canis-major","canis-minor","capricornus","cassiopeia",
  "cygnus","gemini","leo","libra","lyra",
  "orion","phoenix","pisces","sagittarius","scorpius",
  "taurus","ursa-major","ursa-minor","virgo",
];

const INTRO = {
  th: "สวัสดีครับ นี่คือคู่มือการ์ดสอนกลุ่มดาวสำหรับผู้พิการทางสายตา ใช้นิ้วสัมผัสพื้นผิวนูนบนการ์ดเพื่อรับรู้ตำแหน่งของดวงดาว กดปุ่มซ้ายหรือขวาเพื่อเปลี่ยนกลุ่มดาว กดสองครั้งบนหน้าจอเพื่อฟังคำบรรยายกลุ่มดาว",
  en: "Welcome to the Constellation Guide — designed for visually impaired learners. Touch the raised card surface to feel the star positions. Use the arrow buttons to navigate between the 24 constellations. Double-tap the screen to hear the constellation description.",
};

const UI_TEXT = {
  th: {
    label:   "กลุ่มดาว",
    hint0:   "แตะหน้าจอเพื่อเริ่มต้น",
    hint1:   "กดสองครั้งเพื่อฟังคำอธิบาย",
    hint2:   "กดสองครั้งเพื่อหยุดเสียง",
    loading: "กำลังโหลดเสียง...",
    prev:    "ก่อนหน้า",
    next:    "ถัดไป",
    info:    "ดูรายละเอียด",
  },
  en: {
    label:   "Constellation",
    hint0:   "Tap screen to begin",
    hint1:   "Double-tap to hear description",
    hint2:   "Double-tap to stop",
    loading: "Loading audio...",
    prev:    "Previous",
    next:    "Next",
    info:    "View details",
  },
};

function getInitialStarId() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("star") ?? "aquarius";
  return VALID_STAR_IDS.has(raw) ? raw : "aquarius";
}

export default function App() {
  const canvasRef        = useRef(null);
  const audioUnlockedRef = useRef(false);
  const hasPlayedIntro   = useRef(false);

  const [lang, setLang]     = useState("th");
  const [starId, setStarId] = useState(getInitialStarId);
  const [started, setStarted] = useState(false);
  const [flash, setFlash]   = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);

  useStarfield(canvasRef);

  const { speak, stop, isPlaying, isLoading, error, clearError } = useSpeech();

  const entry      = constellations[starId];
  const ui         = UI_TEXT[lang];
  const currentIdx = STAR_IDS.indexOf(starId);

  const hint = !started
    ? ui.hint0
    : isLoading
      ? ui.loading
      : isPlaying
        ? ui.hint2
        : ui.hint1;

  // Sync URL when starId changes
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("star", starId);
    window.history.replaceState(null, "", url.toString());
  }, [starId]);

  const triggerFlash = useCallback((type) => {
    setFlash(type);
    setTimeout(() => setFlash(null), 800);
  }, []);

  const unlockAudio = useCallback(() => {
    if (audioUnlockedRef.current) return;
    audioUnlockedRef.current = true;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) {
        const ctx = new Ctx();
        ctx.resume().then(() => ctx.close()).catch(() => {});
      }
    } catch {}
  }, []);

  const goTo = useCallback((id) => {
    stop();
    setStarId(id);
  }, [stop]);

  const goPrev = useCallback(() => {
    const len = STAR_IDS.length;
    goTo(STAR_IDS[(currentIdx - 1 + len) % len]);
  }, [currentIdx, goTo]);

  const goNext = useCallback(() => {
    goTo(STAR_IDS[(currentIdx + 1) % STAR_IDS.length]);
  }, [currentIdx, goTo]);

  const handleIndexChange = useCallback((newIdx) => {
    const len = STAR_IDS.length;
    const wrapped = ((newIdx % len) + len) % len;
    goTo(STAR_IDS[wrapped]);
  }, [goTo]);

  const renderSlide = useCallback((id) => (
    <ConstellationSlide entry={constellations[id]} />
  ), []);

  const handleSingleTap = useCallback(() => {
    unlockAudio();
    if (!started) {
      setStarted(true);
      if (!hasPlayedIntro.current) {
        hasPlayedIntro.current = true;
        speak("intro", INTRO[lang], lang);
        triggerFlash("active");
        if (navigator.vibrate) navigator.vibrate([40, 30, 40]);
      }
      return;
    }
    triggerFlash("error");
  }, [started, lang, speak, unlockAudio, triggerFlash]);

  const handleDoubleTap = useCallback(() => {
    unlockAudio();
    if (!started) setStarted(true);

    if (isPlaying || isLoading) {
      stop();
      triggerFlash("error");
      if (navigator.vibrate) navigator.vibrate(60);
      return;
    }

    const text = entry?.[lang]?.text ?? (lang === "th" ? "ไม่พบข้อมูล" : "No data available");
    speak(starId, text, lang);
    triggerFlash("active");
    if (navigator.vibrate) navigator.vibrate([40, 30, 40]);
  }, [started, entry, lang, speak, stop, isPlaying, isLoading, unlockAudio, triggerFlash, starId]);

  return (
    <>
      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0 }} />

      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      <div className="planet-deco" />

      <SwipeCarousel
        items={STAR_IDS}
        currentIndex={currentIdx}
        onIndexChange={handleIndexChange}
        onSingleTap={handleSingleTap}
        onDoubleTap={handleDoubleTap}
        renderItem={renderSlide}
      />

      <StarBadge
        index={currentIdx + 1}
        name={entry?.[lang]?.name ?? (lang === "th" ? "ไม่พบข้อมูล" : "Not found")}
        label={ui.label}
        lang={lang}
        total={STAR_IDS.length}
      />

      <button
        className="nav-btn nav-btn--prev"
        onClick={goPrev}
        aria-label={ui.prev}
      >
        &#8249;
      </button>
      <button
        className="nav-btn nav-btn--next"
        onClick={goNext}
        aria-label={ui.next}
      >
        &#8250;
      </button>

      <LangToggle lang={lang} setLang={setLang} />

      <button
        className="info-btn"
        onClick={() => { stop(); setInfoOpen(true); }}
        aria-label={ui.info}
        title={ui.info}
      >
        i
      </button>

      <InfoModal
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        id={starId}
        lang={lang}
      />

      <div className="app-footer">Developed by 0Maruz</div>

      {error && (
        <div role="alert" onClick={clearError} className="error-toast">
          ⚠️ {error}
          <br />
          <span style={{ fontSize: "11px", opacity: 0.75 }}>(แตะเพื่อปิด)</span>
        </div>
      )}

      <Orb flash={flash} isPlaying={isPlaying} />

      <div className="speech-bar" aria-live="polite">
        <div className={`speech-bar-inner${isPlaying ? " speaking" : ""}`}>
          <p className={isPlaying ? "hint-speaking" : ""}>{hint}</p>
        </div>
      </div>
    </>
  );
}
