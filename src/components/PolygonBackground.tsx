import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Props {
  className?: string;
  nodeCount?: number;
  opacity?: number;
  parallaxFactor?: number;
}

export default function PolygonBackground({
  className = "",
  nodeCount = 28,
  opacity = 0.18,
  parallaxFactor = 0.06,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    pointsRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const MAX_DIST = 200;

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scroll = scrollRef.current;
      const pts = pointsRef.current;

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      const parallaxOffset = scroll * parallaxFactor;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = opacity * (1 - dist / MAX_DIST);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y + parallaxOffset * (i % 3 + 1));
            ctx.lineTo(pts[j].x, pts[j].y + parallaxOffset * (j % 3 + 1));
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      pts.forEach((p, i) => {
        const py = p.y + parallaxOffset * (i % 3 + 1);
        ctx.beginPath();
        ctx.arc(p.x, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity * 1.8})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [nodeCount, opacity, parallaxFactor]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ display: "block" }}
    />
  );
}
