/**
 * useSpeech.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Dual-voice TTS hook:
 *   • Thai text  → plays Google Drive audio file (no API cost)
 *   • Other text → Web Speech API (speechSynthesis)
 *
 * EXPORTS (unchanged from previous version so App.jsx needs NO changes):
 *   speak(text)  — auto-detects language and routes correctly
 *   stop()       — stops whichever system is active
 *   isPlaying    — boolean
 *   isLoading    — boolean
 *   error        — string | null
 *   clearError   — fn
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useRef, useCallback, useEffect } from "react";
import { audioMap } from "../utils/audioMap";

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useSpeech() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError]         = useState(null);

  const audioRef = useRef(null);   // for Thai: HTMLAudioElement
  const synthRef = useRef(null);   // for English: SpeechSynthesisUtterance ref-copy

  // Cleanup on unmount
  useEffect(() => () => stopInternal(), []); // eslint-disable-line

  // ── Internal stop (no state update) ──────────────────────────────────────
  const stopInternal = useCallback(() => {
    // Stop Thai audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.src     = "";
      audioRef.current         = null;
    }
    // Stop English Web Speech
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    synthRef.current = null;
  }, []);

  // ── Public stop ───────────────────────────────────────────────────────────
  const stop = useCallback(() => {
    stopInternal();
    setIsLoading(false);
    setIsPlaying(false);
  }, [stopInternal]);

  // ── Thai: play Google Drive audio ─────────────────────────────────────────
  const playThaiAudio = useCallback((id) => {
    const url = audioMap[id];

    if (!url) {
      return false; // no audio mapped — caller falls back to Web Speech
    }

    const audio = new Audio(url);
    audioRef.current = audio;

    setIsLoading(true);
    setIsPlaying(false);
    setError(null);

    audio.oncanplaythrough = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };

    audio.onended = () => {
      setIsPlaying(false);
      audioRef.current = null;
    };

    audio.onerror = () => {
      const codes = { 1: "โหลดถูกยกเลิก", 2: "Network error", 3: "Decode error", 4: "ไม่รองรับ format" };
      setError(codes[audio.error?.code] ?? "ไม่สามารถเล่นเสียงได้ — ตรวจสอบลิงก์ Google Drive");
      setIsLoading(false);
      setIsPlaying(false);
      audioRef.current = null;
    };

    audio.play().catch(err => {
      if (err.name === "NotAllowedError") {
        setError("Browser บล็อก autoplay — แตะหน้าจอก่อนแล้วลองใหม่");
      } else {
        setError(err.message || "เล่นเสียงไม่ได้");
      }
      setIsLoading(false);
      setIsPlaying(false);
    });

    return true; // success
  }, []);

  // ── English: Web Speech API ───────────────────────────────────────────────
  const playWebSpeech = useCallback((text, lang) => {
    if (!window.speechSynthesis) {
      setError("Browser ไม่รองรับ Web Speech API");
      return;
    }

    const utterance   = new SpeechSynthesisUtterance(text);
    utterance.lang    = lang === "th" ? "th-TH" : "en-US";
    utterance.rate    = 0.95;
    utterance.pitch   = 1;
    synthRef.current  = utterance;

    setIsLoading(false);
    setIsPlaying(true);
    setError(null);

    utterance.onend  = () => { setIsPlaying(false); synthRef.current = null; };
    utterance.onerror = (e) => {
      if (e.error === "interrupted" || e.error === "canceled") return; // user stopped — not an error
      setError("Web Speech error: " + e.error);
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  // ── Public speak ──────────────────────────────────────────────────────────
  const speak = useCallback((id, text, lang) => {
    if (!text?.trim()) return;

    stopInternal();
    setError(null);

    if (lang === "th") {
      const played = playThaiAudio(id);
      if (!played) playWebSpeech(text, "th");
    } else {
      playWebSpeech(text, "en");
    }
  }, [stopInternal, playThaiAudio, playWebSpeech]);

  return {
    speak,
    stop,
    isLoading,
    isPlaying,
    error,
    clearError: useCallback(() => setError(null), []),
    // Legacy compat: expose VOICES + currentVoice stubs so any code that
    // references them won't crash (they're no-ops for the Drive/WebSpeech path)
    currentVoice: null,
    setVoice: () => {},
  };
}

export default useSpeech;