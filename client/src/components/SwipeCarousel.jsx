import { useRef, useCallback, useEffect, useLayoutEffect } from "react";

const TAP_THRESHOLD_PX    = 8;
const SWIPE_DIST_RATIO    = 0.20;
const SWIPE_VELOCITY_PXMS = 0.4;
const SNAP_DURATION_MS    = 320;
const DOUBLE_TAP_MS       = 300;
const RIPPLE_LIFE_MS      = 650;

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export default function SwipeCarousel({
  items,
  currentIndex,
  onIndexChange,
  onSingleTap,
  onDoubleTap,
  renderItem,
  showDots = false,
}) {
  const containerRef    = useRef(null);
  const slideRefs       = useRef([]);
  const widthRef        = useRef(0);
  const offsetRef       = useRef(0);
  const dragRef         = useRef(null);
  const animRef         = useRef(null);
  const lastTapTimeRef  = useRef(0);
  const tapTimerRef     = useRef(null);
  const rippleLayerRef  = useRef(null);

  const applyOffsets = useCallback((dragX) => {
    offsetRef.current = dragX;
    const w = widthRef.current;
    if (!w) return;
    for (let k = 0; k < 3; k++) {
      const el = slideRefs.current[k];
      if (!el) continue;
      el.style.transform = `translate3d(${(k - 1) * w + dragX}px,0,0)`;
    }
  }, []);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      widthRef.current = el.clientWidth;
      if (!dragRef.current && !animRef.current) applyOffsets(0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyOffsets]);

  useLayoutEffect(() => {
    cancelAnimationFrame(animRef.current);
    animRef.current = null;
    applyOffsets(0);
  }, [currentIndex, applyOffsets]);

  const animateTo = useCallback((fromX, toX, indexDelta) => {
    cancelAnimationFrame(animRef.current);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / SNAP_DURATION_MS);
      const x = fromX + (toX - fromX) * easeOut(t);
      applyOffsets(x);
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        animRef.current = null;
        if (indexDelta !== 0) onIndexChange?.(currentIndex + indexDelta);
      }
    };
    animRef.current = requestAnimationFrame(tick);
  }, [applyOffsets, currentIndex, onIndexChange]);

  const spawnRipple = useCallback((x, y, kind) => {
    const layer = rippleLayerRef.current;
    if (!layer) return;
    const rect = layer.getBoundingClientRect();
    const dot  = document.createElement("span");
    dot.className   = `ripple ${kind}`;
    dot.style.left  = (x - rect.left) + "px";
    dot.style.top   = (y - rect.top)  + "px";
    layer.appendChild(dot);
    setTimeout(() => dot.remove(), RIPPLE_LIFE_MS);
  }, []);

  const onPointerDown = useCallback((e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    cancelAnimationFrame(animRef.current);
    animRef.current = null;
    const t = performance.now();
    dragRef.current = {
      sx: e.clientX, sy: e.clientY, st: t,
      lx: e.clientX, lt: t,
      v: 0, dx: 0, lock: null,
      base: offsetRef.current,
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    const d = dragRef.current;
    if (!d) return;
    const rawDx = e.clientX - d.sx;
    const rawDy = e.clientY - d.sy;

    if (d.lock === null) {
      const adx = Math.abs(rawDx), ady = Math.abs(rawDy);
      if (adx < TAP_THRESHOLD_PX && ady < TAP_THRESHOLD_PX) return;
      d.lock = adx > ady * 1.2 ? "h" : "v";
    }
    if (d.lock !== "h") return;

    const now = performance.now();
    const inst = (e.clientX - d.lx) / Math.max(1, now - d.lt);
    d.v  = d.v * 0.6 + inst * 0.4;
    d.lx = e.clientX;
    d.lt = now;

    d.dx = rawDx + d.base;
    applyOffsets(d.dx);
  }, [applyOffsets]);

  const onPointerUp = useCallback((e) => {
    const d = dragRef.current;
    if (!d) return;
    dragRef.current = null;

    const moved = Math.abs(e.clientX - d.sx) > TAP_THRESHOLD_PX
              ||  Math.abs(e.clientY - d.sy) > TAP_THRESHOLD_PX
              ||  Math.abs(d.base) > 0.5;

    if (!moved) {
      const t = Date.now();
      const since = t - lastTapTimeRef.current;
      if (since > 0 && since < DOUBLE_TAP_MS) {
        clearTimeout(tapTimerRef.current);
        tapTimerRef.current     = null;
        lastTapTimeRef.current  = 0;
        spawnRipple(e.clientX, e.clientY, "double");
        if (navigator.vibrate) navigator.vibrate([40, 30, 40]);
        onDoubleTap?.();
      } else {
        lastTapTimeRef.current = t;
        spawnRipple(e.clientX, e.clientY, "single");
        clearTimeout(tapTimerRef.current);
        tapTimerRef.current = setTimeout(() => {
          tapTimerRef.current = null;
          onSingleTap?.();
        }, DOUBLE_TAP_MS);
      }
      return;
    }

    if (d.lock !== "h") {
      animateTo(d.dx || 0, 0, 0);
      return;
    }

    const w        = widthRef.current;
    const distFrac = Math.abs(d.dx) / Math.max(1, w);
    const fast     = Math.abs(d.v) > SWIPE_VELOCITY_PXMS;
    const far      = distFrac > SWIPE_DIST_RATIO;

    let delta = 0;
    if (far || fast) {
      if (d.dx < 0)      delta = +1;
      else if (d.dx > 0) delta = -1;
    }
    const target = delta === 0 ? 0 : -delta * w;
    animateTo(d.dx, target, delta);
  }, [animateTo, onDoubleTap, onSingleTap, spawnRipple]);

  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onIndexChange?.(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onIndexChange?.(currentIndex + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, onIndexChange]);

  useEffect(() => () => {
    cancelAnimationFrame(animRef.current);
    clearTimeout(tapTimerRef.current);
  }, []);

  const len = items.length;
  const slots = [
    items[(currentIndex - 1 + len) % len],
    items[currentIndex],
    items[(currentIndex + 1) % len],
  ];

  return (
    <div
      ref={containerRef}
      className="swipe-carousel"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {[0, 1, 2].map((k) => (
        <div
          key={`slot-${k}`}
          ref={(el) => (slideRefs.current[k] = el)}
          className="swipe-slide"
          aria-hidden={k !== 1}
        >
          {slots[k] != null ? renderItem(slots[k], k - 1, k === 1) : null}
        </div>
      ))}

      <div ref={rippleLayerRef} className="swipe-ripples" aria-hidden="true" />

      {showDots && items.length > 1 && (
        <nav className="swipe-dots" aria-label="constellation pagination">
          {items.map((id, i) => (
            <span
              key={id}
              className={`swipe-dot ${i === currentIndex ? "active" : ""}`}
            />
          ))}
        </nav>
      )}
    </div>
  );
}
