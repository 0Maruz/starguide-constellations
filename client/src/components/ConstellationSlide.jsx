import { useEffect, useRef } from "react";

const BADGE_H = 76;   // matches CSS .star-badge height
const HINT_H  = 76;   // matches CSS .speech-bar height
const PAD_X   = 60;   // side padding — clears nav buttons

export default function ConstellationSlide({ entry }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const build = () => {
      svg.innerHTML = "";
      if (!entry) return;

      const parent = svg.parentElement;
      const W = parent?.clientWidth  || window.innerWidth;
      const H = parent?.clientHeight || window.innerHeight;

      const isLandscape = W > H && H < 500;
      const topPad  = isLandscape ? 50 : (W >= 768 ? 90 : BADGE_H);
      const botPad  = isLandscape ? 44 : (W >= 768 ? 90 : HINT_H);
      const sidePad = isLandscape ? 16 : PAD_X;

      const areaW = W - sidePad * 2;
      const areaH = H - topPad - botPad;

      const xs = entry.stars.map(s => s[0]);
      const ys = entry.stars.map(s => s[1]);
      const minX = Math.min(...xs), maxX = Math.max(...xs);
      const minY = Math.min(...ys), maxY = Math.max(...ys);
      const spanX = maxX - minX || 1;
      const spanY = maxY - minY || 1;

      const MARGIN = 0.12;
      const scaleX = (areaW * (1 - MARGIN * 2)) / spanX;
      const scaleY = (areaH * (1 - MARGIN * 2)) / spanY;
      const s      = Math.min(scaleX, scaleY);

      const drawW = spanX * s;
      const drawH = spanY * s;
      const ox = sidePad + (areaW - drawW) / 2 - minX * s;
      const oy = topPad  + (areaH - drawH) / 2 - minY * s;

      const px = xi => ox + xi * s;
      const py = yi => oy + yi * s;
      const pts = entry.stars.map(([x, y]) => [px(x), py(y)]);

      const minDim    = Math.min(areaW, areaH);
      const dotScale  = Math.max(0.7, Math.min(minDim / 280, 2.4));
      const lineWidth = Math.max(1.0, 1.3 * dotScale);
      const labelOff  = Math.max(8, 10 * dotScale);

      const ns = "http://www.w3.org/2000/svg";

      (entry.lines || []).forEach(([a, b]) => {
        const el = document.createElementNS(ns, "line");
        el.setAttribute("x1", pts[a][0]); el.setAttribute("y1", pts[a][1]);
        el.setAttribute("x2", pts[b][0]); el.setAttribute("y2", pts[b][1]);
        el.setAttribute("stroke", "rgba(79,195,247,0.38)");
        el.setAttribute("stroke-width", lineWidth);
        el.setAttribute("stroke-linecap", "round");
        svg.appendChild(el);
      });

      pts.forEach(([x, y], i) => {
        const isNamed = entry.labels?.[i];
        const r       = (isNamed ? 5.5 : 3.5) * dotScale;

        const glow = document.createElementNS(ns, "circle");
        glow.setAttribute("cx", x); glow.setAttribute("cy", y);
        glow.setAttribute("r", r * 3);
        glow.setAttribute("fill", isNamed
          ? "rgba(79,195,247,0.09)" : "rgba(79,195,247,0.05)");
        svg.appendChild(glow);

        const inner = document.createElementNS(ns, "circle");
        inner.setAttribute("cx", x); inner.setAttribute("cy", y);
        inner.setAttribute("r", r * 1.8);
        inner.setAttribute("fill", isNamed
          ? "rgba(0,229,255,0.14)" : "rgba(79,195,247,0.07)");
        svg.appendChild(inner);

        const dot = document.createElementNS(ns, "circle");
        dot.setAttribute("cx", x); dot.setAttribute("cy", y);
        dot.setAttribute("r", r);
        dot.setAttribute("fill", isNamed
          ? "rgba(220,245,255,0.97)" : "rgba(140,205,255,0.82)");
        svg.appendChild(dot);

        if (isNamed) {
          const nearRight = x > W * 0.70;
          const nearTop   = y < topPad + areaH * 0.15;
          const lx     = nearRight ? x - labelOff : x + labelOff;
          const ly     = nearTop   ? y + labelOff + 5 : y - labelOff * 0.65;
          const anchor = nearRight ? "end" : "start";

          const txt = document.createElementNS(ns, "text");
          txt.setAttribute("x", lx);
          txt.setAttribute("y", ly);
          txt.setAttribute("text-anchor", anchor);
          txt.setAttribute("class", "star-label");
          txt.textContent = entry.labels[i];
          svg.appendChild(txt);
        }
      });
    };

    build();

    const parent = svg.parentElement;
    let t;
    const schedule = (delay) => { clearTimeout(t); t = setTimeout(build, delay); };

    const ro = parent ? new ResizeObserver(() => schedule(50)) : null;
    if (parent) ro.observe(parent);

    const onOrient = () => schedule(320);
    window.addEventListener("orientationchange", onOrient);

    return () => {
      window.removeEventListener("orientationchange", onOrient);
      ro?.disconnect();
      clearTimeout(t);
    };
  }, [entry]);

  return (
    <svg
      ref={svgRef}
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
