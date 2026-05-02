import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "starguide:voiceGuide";

function readStored() {
  if (typeof window === "undefined") return false;
  try { return window.localStorage.getItem(STORAGE_KEY) === "1"; }
  catch { return false; }
}

export function useVoiceGuide() {
  const [enabled, setEnabledState] = useState(readStored);
  const enabledRef = useRef(enabled);

  useEffect(() => { enabledRef.current = enabled; }, [enabled]);

  const setEnabled = useCallback((value) => {
    const v = typeof value === "function" ? value(enabledRef.current) : !!value;
    enabledRef.current = v;
    setEnabledState(v);
    try { window.localStorage.setItem(STORAGE_KEY, v ? "1" : "0"); } catch {}
    if (!v && typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, []);

  // Demo: English-only for now (Thai TTS unreliable across browsers)
  const announce = useCallback((text) => {
    if (!enabledRef.current || !text) return;
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 1.05;
    u.pitch = 1;
    u.volume = 1;
    window.speechSynthesis.speak(u);
  }, []);

  return { enabled, setEnabled, announce };
}

export default useVoiceGuide;
