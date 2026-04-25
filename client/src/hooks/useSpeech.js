import { useRef, useCallback } from "react";

export function useSpeech() {
  const timerRef  = useRef(null);
  const synthRef  = useRef(typeof window !== "undefined" && window.speechSynthesis ? window.speechSynthesis : null);

  const speak = useCallback((text, lang = "th") => {
    const synth = synthRef.current;
    if (!synth) return;
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    synth.cancel();

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      if (synth.paused) synth.resume();

      const voices = synth.getVoices();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang   = lang === "th" ? "th-TH" : "en-US";
      utt.rate   = 0.88;
      utt.pitch  = 1.0;
      utt.volume = 1.0;

      const voice =
        voices.find(v => v.lang === utt.lang) ||
        voices.find(v => v.lang.startsWith(lang)) ||
        voices.find(v => v.default) ||
        voices[0] || null;

      if (voice) utt.voice = voice;
      synth.speak(utt);
    }, 80);
  }, []);

  return { speak };
}
