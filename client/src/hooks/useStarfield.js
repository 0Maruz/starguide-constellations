import { useEffect, useRef } from "react";

export function useStarfield(canvasRef) {
  const animRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function init() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const W = canvas.width;
      const H = canvas.height;
      const count = Math.min(Math.floor((W * H) / 3000), 400);
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        speed: Math.random() * 0.12 + 0.04,
        opacity: Math.random() * 0.7 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, "#000005");
      grad.addColorStop(0.5, "#00010f");
      grad.addColorStop(1, "#000005");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      for (const s of starsRef.current) {
        s.twinkle += 0.015;
        s.y -= s.speed;
        if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; }
        const osc = Math.sin(s.twinkle) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,220,255,${s.opacity * osc})`;
        ctx.fill();
      }
      animRef.current = requestAnimationFrame(draw);
    }

    let resizeTimer;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { init(); }, 150);
    }

    init();
    animRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, [canvasRef]);
}
