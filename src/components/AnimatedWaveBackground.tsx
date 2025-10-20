import React, { useEffect, useRef } from "react";

/**
 * Animated wavy dots background (canvas).
 * - No dependencies
 * - GPU-friendly (2D canvas) and responsive
 * - Respects prefers-reduced-motion
 */
type Props = {
  className?: string;
  /** Pixel gap between dots (smaller = denser) */
  gap?: number;
  /** Wave amplitude in px */
  amplitude?: number;
  /** Speed multiplier */
  speed?: number;
  /** Color near (closer dots) */
  nearColor?: string;
  /** Color far (distant dots) */
  farColor?: string;
  /** Background fill */
  backdrop?: string;
};

const AnimatedWaveBackground: React.FC<Props> = ({
  className,
  gap,
  amplitude,
  speed,
  nearColor,
  farColor,
  backdrop,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: false })!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Tunables (good defaults for the look in your screenshot)
    const G = gap ?? 22; // dot spacing
    const AMP = amplitude ?? 26; // wave amplitude
    const SPEED = speed ?? 0.9; // animation speed
    const FREQ_X = 0.14; // wave frequency X
    const FREQ_Y = 0.18; // wave frequency Y
    const TILT_X = 1.15; // ~66° tilt
    const ROT_Z = 0.18; // slight diagonal
    const FOV = 900; // perspective focal length
    const CAM_PUSH = 1200; // push scene away from camera

    const NEAR = hexToRgb(nearColor ?? "#ff4b6e"); // neon pink/red
    const FAR = hexToRgb(farColor ?? "#a21f3c"); // deep crimson
    const BACK = backdrop ?? "#07090f"; // page background

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    function resize() {
      const { clientWidth, clientHeight } =
        canvas.parentElement || document.body;
      canvas.width = Math.max(1, Math.floor(clientWidth * dpr));
      canvas.height = Math.max(1, Math.floor(clientHeight * dpr));
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    function mixColor(t: number) {
      const r = Math.round(lerp(FAR.r, NEAR.r, t));
      const g = Math.round(lerp(FAR.g, NEAR.g, t));
      const b = Math.round(lerp(FAR.b, NEAR.b, t));
      return `rgba(${r},${g},${b},1)`;
    }

    function hexToRgb(hex: string) {
      const h = hex.replace("#", "");
      const n = parseInt(
        h.length === 3
          ? h
              .split("")
              .map((c) => c + c)
              .join("")
          : h,
        16
      );
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }

    function drawFrame(time: number) {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      // Background + top/bottom fades for the "infinite" look
      ctx.fillStyle = BACK;
      ctx.fillRect(0, 0, w, h);

      // Subtle vignette & top fade (matches screenshot mood)
      const gradTop = ctx.createLinearGradient(0, 0, 0, h);
      gradTop.addColorStop(0.0, "rgba(0,0,0,0.85)");
      gradTop.addColorStop(0.35, "rgba(0,0,0,0.2)");
      gradTop.addColorStop(1.0, "rgba(0,0,0,0.0)");
      ctx.fillStyle = gradTop;
      ctx.fillRect(0, 0, w, h);

      const centerX = w * 0.5;
      const baseY = h * 0.72; // push surface lower (like the screenshot)

      const rows = Math.ceil(h / G) + 10;
      const cols = Math.ceil(w / G) + 10;

      // Precompute rotations
      const cosX = Math.cos(TILT_X),
        sinX = Math.sin(TILT_X);
      const cosZ = Math.cos(ROT_Z),
        sinZ = Math.sin(ROT_Z);

      // time -> radians phase
      const t = time * 0.001 * SPEED;

      // Slight glow on all dots for that crisp neon look
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(255,90,120,0.45)";
      ctx.globalCompositeOperation = "lighter";

      for (let iy = -rows; iy <= rows; iy++) {
        for (let ix = -cols; ix <= cols; ix++) {
          // World position of the grid point (px units)
          const x = (ix - cols / 2) * G;
          const y = (iy - rows / 2) * G;

          // Wavy height using combined sine waves
          const zWave =
            Math.sin(ix * FREQ_X + t * 1.2) * AMP +
            Math.cos(iy * FREQ_Y - t * 0.9) * (AMP * 0.8);

          // Rotate around X to tilt, then around Z for diagonal orientation
          // Start with (x, y, zWave)
          const y1 = y * cosX - zWave * sinX;
          const z1 = y * sinX + zWave * cosX;
          const x1 = x;

          const x2 = x1 * cosZ - y1 * sinZ;
          const y2 = x1 * sinZ + y1 * cosZ;
          const z2 = z1;

          // Push scene away from camera, then perspective project
          const zCam = z2 + CAM_PUSH;
          const scale = FOV / zCam;

          const sx = centerX + x2 * scale;
          const sy = baseY + y2 * scale;

          // Dot size & color by depth (closer dots appear larger/brighter)
          const nearFactor = Math.max(
            0,
            Math.min(1, (CAM_PUSH + AMP - z2) / (CAM_PUSH + AMP))
          );
          const size = Math.max(1, 1.3 + 2.2 * nearFactor); // 1.3..3.5px

          // Extra fade near the horizon to mimic distance fog
          const horizonFade = Math.max(
            0,
            Math.min(1, (sy - h * 0.18) / (h * 0.75))
          );
          const c = mixColor(nearFactor * 0.85 + 0.15);
          ctx.fillStyle = c;
          ctx.globalAlpha = 0.35 * horizonFade + 0.25; // 0.25..0.6

          // Draw the dot
          ctx.beginPath();
          ctx.arc(sx, sy, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Bottom fade to blend into page background
      const gradBottom = ctx.createLinearGradient(0, h * 0.55, 0, h);
      gradBottom.addColorStop(0, "rgba(0,0,0,0)");
      gradBottom.addColorStop(0.8, "rgba(0,0,0,0.55)");
      gradBottom.addColorStop(1, "rgba(0,0,0,0.85)");
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = gradBottom;
      ctx.fillRect(0, 0, w, h);
    }

    function loop(t: number) {
      drawFrame(t);
      rafRef.current = requestAnimationFrame(loop);
    }

    function start() {
      resize();
      if (reduceMotion) {
        drawFrame(0); // static frame
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    }

    start();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [gap, amplitude, speed, nearColor, farColor, backdrop]);

  return (
    <div className={className ?? ""} aria-hidden="true">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* very subtle radial tint matching the design */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 40% at 50% 65%, rgba(255,75,110,0.20) 0%, rgba(255,75,110,0.06) 45%, rgba(0,0,0,0) 70%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};

export default AnimatedWaveBackground;
