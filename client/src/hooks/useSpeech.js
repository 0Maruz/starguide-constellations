/**
 * useSpeech.js
 * ─────────────────────────────────────────────────────────────────────────────
 * AI-powered Text-to-Speech hook using ElevenLabs API
 *
 * KEY FIX (v2): Audio element is created BEFORE any await so it stays within
 * the browser's user-gesture activation window → bypasses autoplay policy.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useRef, useCallback, useEffect } from "react";

const ELEVENLABS_API_BASE = "https://api.elevenlabs.io/v1";

export const VOICES = {
  FEMALE_ARIA: {
    id: "9BWtsMINqrJLrRacOk9x",
    name: "Aria",
    gender: "female",
    description: "Warm, clear — excellent Thai tones",
  },
  FEMALE_SARAH: {
    id: "EXAVITQu4vr4xnSDxMaL",
    name: "Sarah",
    gender: "female",
    description: "Soft, natural cadence",
  },
  MALE_ROGER: {
    id: "CwhRBWXzGAHq8TQ4Fs17",
    name: "Roger",
    gender: "male",
    description: "Authoritative, articulate",
  },
  MALE_GEORGE: {
    id: "JBFqnCBsd6RMkjVDRZzb",
    name: "George",
    gender: "male",
    description: "Deep, calm — good for long text",
  },
};

const DEFAULT_VOICE    = VOICES.FEMALE_ARIA;
const VOICE_SETTINGS   = { stability: 0.55, similarity_boost: 0.85, style: 0.3, use_speaker_boost: true };
const MODEL_ID         = "eleven_multilingual_v2";
const MAX_CACHE        = 80;
const MAX_CHUNK_CHARS  = 1000;
const TIMEOUT_MS       = 15_000;

// ─── LRU Audio Cache ──────────────────────────────────────────────────────────

class AudioCache {
  constructor(max = MAX_CACHE) { this._map = new Map(); this._max = max; }
  get(key) {
    if (!this._map.has(key)) return null;
    const v = this._map.get(key);
    this._map.delete(key); this._map.set(key, v);
    return v;
  }
  set(key, url) {
    if (this._map.has(key)) this._map.delete(key);
    else if (this._map.size >= this._max) {
      const k = this._map.keys().next().value;
      URL.revokeObjectURL(this._map.get(k)); this._map.delete(k);
    }
    this._map.set(key, url);
  }
  clear() { this._map.forEach(u => URL.revokeObjectURL(u)); this._map.clear(); }
}

const audioCache = new AudioCache();

// ─── Helpers ──────────────────────────────────────────────────────────────────

function splitIntoChunks(text, max = MAX_CHUNK_CHARS) {
  if (text.length <= max) return [text];
  const chunks = [];
  const sentences = text.split(/(?<=[.!?。\n])\s*/u);
  let cur = "";
  for (const s of sentences) {
    if ((cur + s).length > max && cur.length > 0) { chunks.push(cur.trim()); cur = s; }
    else cur += (cur ? " " : "") + s;
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

async function fetchAudio(text, voiceId, apiKey, signal) {
  const res = await fetch(`${ELEVENLABS_API_BASE}/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "xi-api-key": apiKey },
    body: JSON.stringify({ text, model_id: MODEL_ID, voice_settings: VOICE_SETTINGS }),
    signal,
  });

  if (!res.ok) {
    let detail = "";
    try { const e = await res.json(); detail = e?.detail?.message || e?.detail || JSON.stringify(e); }
    catch { detail = await res.text().catch(() => ""); }
    if (res.status === 401) throw new Error("API key ไม่ถูกต้อง — ตรวจสอบ VITE_ELEVENLABS_API_KEY ใน .env");
    if (res.status === 429) throw new Error("เกิน quota — รอสักครู่แล้วลองใหม่");
    throw new Error(`ElevenLabs ${res.status}: ${detail}`);
  }

  return URL.createObjectURL(await res.blob());
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useSpeech(options = {}) {
  const { voice: initVoice = DEFAULT_VOICE, playbackRate = 1.0 } = options;

  const [isLoading, setIsLoading]       = useState(false);
  const [isPlaying, setIsPlaying]       = useState(false);
  const [error, setError]               = useState(null);
  const [currentVoice, setCurrentVoice] = useState(initVoice);

  const audioRef   = useRef(null);
  const abortRef   = useRef(null);
  const rateRef    = useRef(playbackRate);
  const voiceRef   = useRef(currentVoice);

  useEffect(() => { rateRef.current = playbackRate; }, [playbackRate]);
  useEffect(() => { voiceRef.current = currentVoice; }, [currentVoice]);
  useEffect(() => () => { stopInternal(); audioCache.clear(); }, []); // eslint-disable-line

  const stopInternal = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.src     = "";
      audioRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    stopInternal();
    setIsLoading(false);
    setIsPlaying(false);
  }, [stopInternal]);

  const speak = useCallback(async (text) => {
    if (!text?.trim()) return;

    // ── API key check ─────────────────────────────────────────────────────
    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
    if (!apiKey) {
      const msg = "ไม่พบ API key — เพิ่ม VITE_ELEVENLABS_API_KEY ใน .env แล้ว restart";
      setError(msg);
      console.error("[useSpeech]", msg);
      return;
    }

    stopInternal();
    setError(null);
    setIsLoading(true);
    setIsPlaying(false);

    const voiceId    = voiceRef.current.id;
    const chunks     = splitIntoChunks(text.trim());
    const controller = new AbortController();
    abortRef.current = controller;
    const timeoutId  = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      for (let i = 0; i < chunks.length; i++) {
        if (controller.signal.aborted) break;

        // ── AUTOPLAY POLICY FIX ──────────────────────────────────────────
        // new Audio() MUST happen here — synchronously, before any await.
        //
        // Browsers allow audio.play() only within a "user activation" window.
        // The activation is consumed at the first macrotask boundary (i.e. the
        // await fetch below). By creating the Audio element NOW — still in the
        // synchronous execution frame — the browser registers it as
        // activation-blessed. Assigning .src later and calling .play() after
        // the fetch still works because the *element* was created in time.
        // ─────────────────────────────────────────────────────────────────
        const audio       = new Audio();
        audio.playbackRate = rateRef.current;
        audioRef.current  = audio;  // ref assigned before any await

        // Resolve URL (cache → fetch)
        let audioURL = audioCache.get(`${voiceId}::${chunks[i]}`);
        if (!audioURL) {
          audioURL = await fetchAudio(chunks[i], voiceId, apiKey, controller.signal);
          audioCache.set(`${voiceId}::${chunks[i]}`, audioURL);
        }

        if (i === 0) clearTimeout(timeoutId);
        if (controller.signal.aborted) break;

        audio.src = audioURL;  // assign src after fetch — still works

        await new Promise((resolve, reject) => {
          audio.oncanplaythrough = () => { setIsLoading(false); setIsPlaying(true); };
          audio.onended  = () => { setIsPlaying(false); audioRef.current = null; resolve(); };
          audio.onerror  = () => {
            const codes = { 1: "โหลดถูกยกเลิก", 2: "Network error", 3: "Decode error", 4: "Format ไม่รองรับ" };
            reject(new Error(codes[audio.error?.code] ?? "Audio playback error"));
          };
          controller.signal.addEventListener("abort", () => { audio.pause(); resolve(); });

          audio.play().catch(err => {
            if (err.name === "NotAllowedError") {
              reject(new Error("Browser บล็อก autoplay — แตะหน้าจอก่อนแล้วลองใหม่"));
            } else {
              reject(err);
            }
          });
        });
      }
    } catch (err) {
      clearTimeout(timeoutId);
      if (err.name === "AbortError") return;
      console.error("[useSpeech]", err);
      setError(err.message || "เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
      setIsPlaying(false);
      if (abortRef.current === controller) abortRef.current = null;
    }
  }, [stopInternal]);

  return {
    speak, stop,
    isLoading, isPlaying,
    error, clearError: useCallback(() => setError(null), []),
    currentVoice, setVoice: setCurrentVoice,
  };
}

export default useSpeech;