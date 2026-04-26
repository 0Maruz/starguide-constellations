import { useRef, useCallback } from "react";

export function useSpeech() {
  const timerRef   = useRef(null);
  const speakingRef = useRef(false);  // track ว่ากำลังพูดอยู่ไหม
  const synthRef   = useRef(
    typeof window !== "undefined" && window.speechSynthesis
      ? window.speechSynthesis
      : null
  );

  // ตรวจว่ากำลังพูดอยู่ไหมตอนนี้
  const isSpeaking = useCallback(() => {
    const synth = synthRef.current;
    if (!synth) return false;
    return synth.speaking && !synth.paused;
  }, []);

  // หยุดพูด
  const cancel = useCallback(() => {
    const synth = synthRef.current;
    if (!synth) return;
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    synth.cancel();
    speakingRef.current = false;
  }, []);

  // เริ่มพูด
  const speak = useCallback((text, lang = "th") => {
    const synth = synthRef.current;
    if (!synth) return;

    // ถ้ากำลังพูดอยู่ → cancel แทน
    if (synth.speaking) {
      cancel();
      return false;  // return false = cancelled
    }

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

      utt.onstart = () => { speakingRef.current = true; };
      utt.onend   = () => { speakingRef.current = false; };
      utt.onerror = () => { speakingRef.current = false; };

      synth.speak(utt);
    }, 80);

    return true;  // return true = started speaking
  }, [cancel]);

  return { speak, cancel, isSpeaking };
}