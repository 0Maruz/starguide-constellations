import { useEffect, useRef } from "react";

export default function ConstellationSVG({ entry }) {
  const svgRef = useRef(null);

  useEffect(() => {
    function build() {
      const svg = svgRef.current;
      if (!svg || !entry) { svg && (svg.innerHTML = ""); return; }

      svg.innerHTML = "";
      const W = window.innerWidth;
      const H = window.innerHeight;
      const isSmall = W < 480;

      const padX   = isSmall ? 0.12 : 0.15;
      const padTop = isSmall ? 0.22 : 0.18;
      const padBot = isSmall ? 0.18 : 0.15;

      const usableW = W * (1 - padX * 2);
      const usableH = H * (1 - padTop - padBot);
      const offX    = W * padX;
      const offY    = H * padTop;

      const scale     = Math.max(0.6, Math.min(W, H) / 600);
      const lineWidth = Math.max(0.8, 1.2 * scale);

      const ns = "http://www.w3.org/2000/svg";
      const px = xi => offX + (xi / 100) * usableW;
      const py = yi => offY + (yi / 100) * usableH;
      const pts = entry.stars.map(([x, y]) => [px(x), py(y)]);

      // Lines
      (entry.lines || []).forEach(([a, b]) => {
        const line = document.createElementNS(ns, "line");
        line.setAttribute("x1", pts[a][0]); line.setAttribute("y1", pts[a][1]);
        line.setAttribute("x2", pts[b][0]); line.setAttribute("y2", pts[b][1]);
        line.setAttribute("stroke", "rgba(100,160,255,0.35)");
        line.setAttribute("stroke-width", lineWidth);
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);
      });

      // Stars + labels
      pts.forEach(([x, y], i) => {
        const isNamed = entry.labels?.[i];
        const r = (isNamed ? 5 : 3.5) * scale;

        const halo = document.createElementNS(ns, "circle");
        halo.setAttribute("cx", x); halo.setAttribute("cy", y);
        halo.setAttribute("r", r * 2.2);
        halo.setAttribute("fill", "rgba(100,160,255,0.08)");
        svg.appendChild(halo);

        const dot = document.createElementNS(ns, "circle");
        dot.setAttribute("cx", x); dot.setAttribute("cy", y);
        dot.setAttribute("r", r);
        dot.setAttribute("fill", isNamed ? "rgba(200,225,255,0.95)" : "rgba(140,180,255,0.8)");
        svg.appendChild(dot);

        if (isNamed) {
          const txt = document.createElementNS(ns, "text");
          txt.setAttribute("x", x + 8); txt.setAttribute("y", y - 8);
          txt.setAttribute("class", "star-label");
          txt.textContent = entry.labels[i];
          svg.appendChild(txt);
        }
      });
    }

    build();
    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(build, 150); };
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("resize", onResize); clearTimeout(t); };
  }, [entry]);

  return (
    <svg
      ref={svgRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none" }}
    />
  );
}
