import { useEffect, useRef } from "react";

const BADGE_H = 76;   // matches CSS .star-badge height
const HINT_H  = 76;   // matches CSS .speech-bar height
const PAD_X   = 60;   // side padding — clears nav buttons

export default function ConstellationSVG({ entry }) {
  const svgRef = useRef(null);

  useEffect(() => {
    function build() {
      const svg = svgRef.current;
      if (!svg || !entry) { if (svg) svg.innerHTML = ""; return; }
      svg.innerHTML = "";

      const W = window.innerWidth;
      const H = window.innerHeight;

      const isLandscape = W > H && H < 500;
      const topPad  = isLandscape ? 50  : (W >= 768 ? 90 : BADGE_H);
      const botPad  = isLandscape ? 44  : (W >= 768 ? 90 : HINT_H);
      const sidePad = isLandscape ? 16  : PAD_X;

      const areaW = W - sidePad * 2;
      const areaH = H - topPad - botPad;

      // star coords อยู่ใน 0–100 grid
      // หา bounding box ของ constellation นี้เพื่อ fit + center
      const xs = entry.stars.map(s => s[0]);
      const ys = entry.stars.map(s => s[1]);
      const minX = Math.min(...xs), maxX = Math.max(...xs);
      const minY = Math.min(...ys), maxY = Math.max(...ys);
      const spanX = maxX - minX || 1;
      const spanY = maxY - minY || 1;

      // uniform scale ให้พอดีกรอบโดยยังคง aspect ratio
      const MARGIN = 0.12;   // เว้นขอบ 12% ของ area
      const scaleX = (areaW * (1 - MARGIN * 2)) / spanX;
      const scaleY = (areaH * (1 - MARGIN * 2)) / spanY;
      const s      = Math.min(scaleX, scaleY);

      // center constellation
      const drawW = spanX * s;
      const drawH = spanY * s;
      const ox = sidePad + (areaW - drawW) / 2 - minX * s;
      const oy = topPad  + (areaH - drawH) / 2 - minY * s;

      const px = xi => ox + xi * s;
      const py = yi => oy + yi * s;
      const pts = entry.stars.map(([x, y]) => [px(x), py(y)]);

      // dot + line scale ตามพื้นที่จริง
      const minDim    = Math.min(areaW, areaH);
      const dotScale  = Math.max(0.7, Math.min(minDim / 280, 2.4));
      const lineWidth = Math.max(1.0, 1.3 * dotScale);
      const labelOff  = Math.max(8, 10 * dotScale);

      const ns = "http://www.w3.org/2000/svg";

      // ── เส้น ──
      (entry.lines || []).forEach(([a, b]) => {
        const el = document.createElementNS(ns, "line");
        el.setAttribute("x1", pts[a][0]); el.setAttribute("y1", pts[a][1]);
        el.setAttribute("x2", pts[b][0]); el.setAttribute("y2", pts[b][1]);
        el.setAttribute("stroke", "rgba(79,195,247,0.38)");
        el.setAttribute("stroke-width", lineWidth);
        el.setAttribute("stroke-linecap", "round");
        svg.appendChild(el);
      });

      // ── ดาว + label ──
      pts.forEach(([x, y], i) => {
        const isNamed = entry.labels?.[i];
        const r       = (isNamed ? 5.5 : 3.5) * dotScale;

        // outer glow
        const glow = document.createElementNS(ns, "circle");
        glow.setAttribute("cx", x); glow.setAttribute("cy", y);
        glow.setAttribute("r", r * 3);
        glow.setAttribute("fill", isNamed
          ? "rgba(79,195,247,0.09)" : "rgba(79,195,247,0.05)");
        svg.appendChild(glow);

        // inner glow
        const inner = document.createElementNS(ns, "circle");
        inner.setAttribute("cx", x); inner.setAttribute("cy", y);
        inner.setAttribute("r", r * 1.8);
        inner.setAttribute("fill", isNamed
          ? "rgba(0,229,255,0.14)" : "rgba(79,195,247,0.07)");
        svg.appendChild(inner);

        // จุดดาว
        const dot = document.createElementNS(ns, "circle");
        dot.setAttribute("cx", x); dot.setAttribute("cy", y);
        dot.setAttribute("r", r);
        dot.setAttribute("fill", isNamed
          ? "rgba(220,245,255,0.97)" : "rgba(140,205,255,0.82)");
        svg.appendChild(dot);

        // label — ป้องกันชนขอบจอ
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
    }

    build();
    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(build, 150); };
    const onOrient = () => { clearTimeout(t); t = setTimeout(build, 320); };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onOrient);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onOrient);
      clearTimeout(t);
    };
  }, [entry]);

  return (
    <svg
      ref={svgRef}
      style={{
        position: "fixed", inset: 0,
        width: "100%", height: "100%",
        zIndex: 2, pointerEvents: "none",
      }}
    />
  );
}