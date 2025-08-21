// src/components/ParticlesBackground.jsx
import { useEffect, useRef } from "react";
import { useTheme } from "/src/components/ThemeContext";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const { theme } = useTheme(); // get current theme directly

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Initialize particles
    const initParticles = () => {
      const count = Math.floor(window.innerWidth / 12);
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + (window.innerWidth < 600 ? 1 : 2),
      }));
    };

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", resize);
    resize();

    // Mouse tracking
    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const handleLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use the latest theme for color
      const particleColor = theme === "dark" ? "#4c507aff" : "#566d8aff";
      const lineColor =
        theme === "dark" ? "rgba(83, 78, 104, 0.2)" : "rgba(15,28,46,0.2)";

      particles.current.forEach((p, i) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Hover repulsion
        if (mouse.current.x && mouse.current.y) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 80;
          if (dist < radius) {
            p.x += (dx / dist) * 2;
            p.y += (dy / dist) * 2;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [theme]); // re-run if theme changes

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />;
}
