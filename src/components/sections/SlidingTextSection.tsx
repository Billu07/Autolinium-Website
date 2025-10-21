import React, { useEffect, useRef } from "react";

const SlidingTextSection: React.FC = () => {
  const text = "Revolutionizing . Innovating . Automating . Scaling . ";
  const trackRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const span = spanRef.current;
    if (!track || !span) return;

    // Get the true width of the full text content
    const textWidth = span.offsetWidth;
    const speed = 120; // pixels per second (adjust for speed)
    const duration = textWidth / speed;

    // Set custom CSS properties
    track.style.setProperty("--text-width", `${textWidth}px`);
    track.style.setProperty("--marquee-duration", `${duration}s`);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#05070B] py-8">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee container */}
      <div className="relative overflow-hidden whitespace-nowrap">
        <div ref={trackRef} className="marquee-track">
          <span ref={spanRef} className="marquee-text">
            {text.repeat(10)}
          </span>
          <span className="marquee-text">{text.repeat(10)}</span>
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          animation: scroll var(--marquee-duration, 80s) linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-1 * var(--text-width)), 0, 0);
          }
        }

        .marquee-text {
          font-weight: 800;
          text-transform: uppercase;
          font-size: 10vw;
          letter-spacing: -0.03em;
          color: transparent;
          -webkit-text-stroke: 1px white;
          white-space: nowrap;
          padding-right: 4rem;
          user-select: none;
          transform: translateZ(0);
        }

        @media (max-width: 768px) {
          .marquee-text {
            font-size: 14vw;
          }
        }
      `}</style>
    </section>
  );
};

export default SlidingTextSection;
