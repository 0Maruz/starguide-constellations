import { useRef, useState, useCallback } from "react";

const DOUBLE_TAP_MS = 300;

export default function TapZone({ onSingleTap, onDoubleTap }) {
  const [ripples, setRipples] = useState([]);
  const lastTapRef     = useRef(0);
  const tapTimerRef    = useRef(null);
  const touchEndTime   = useRef(0);

  const addRipple = useCallback((x, y, type) => {
    const id = Date.now() + Math.random();
    setRipples(r => [...r, { id, x, y, type }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 650);
  }, []);

  const handleTap = useCallback((x, y) => {
    const now   = Date.now();
    const delta = now - lastTapRef.current;

    if (delta < DOUBLE_TAP_MS && delta > 0) {
      clearTimeout(tapTimerRef.current);
      tapTimerRef.current = null;
      lastTapRef.current  = 0;
      addRipple(x, y, "double");
      if (navigator.vibrate) navigator.vibrate([40, 30, 40]);
      onDoubleTap?.();
    } else {
      lastTapRef.current = now;
      addRipple(x, y, "single");
      tapTimerRef.current = setTimeout(() => {
        tapTimerRef.current = null;
        onSingleTap?.();
      }, DOUBLE_TAP_MS);
    }
  }, [addRipple, onSingleTap, onDoubleTap]);

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 15, touchAction: "none" }}
      onTouchEnd={e => {
        e.preventDefault();
        touchEndTime.current = Date.now();
        const t = e.changedTouches[0];
        handleTap(t.clientX, t.clientY);
      }}
      onClick={e => {
        if (Date.now() - touchEndTime.current < 500) return;
        handleTap(e.clientX, e.clientY);
      }}
    >
      {ripples.map(({ id, x, y, type }) => (
        <span
          key={id}
          className={`ripple ${type}`}
          style={{ left: x, top: y }}
        />
      ))}
    </div>
  );
}
