"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor inspired by jameserwin.xyz:
 *  - a small solid dot that tracks the pointer instantly
 *  - a larger ring that trails behind with eased easing
 *  - mix-blend-mode: difference so it inverts whatever is behind it
 *  - the ring grows when hovering interactive elements ([data-hover], a, button)
 * Hidden entirely on touch / coarse-pointer devices.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  // 1. Decide whether to show the custom cursor (fine pointer = mouse/trackpad)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  // 2. Once the elements are mounted, wire up the movement + hover behaviour
  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let raf;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        ring.classList.add("cursor-ring--active");
        dot.classList.add("cursor-dot--active");
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        ring.classList.remove("cursor-ring--active");
        dot.classList.remove("cursor-dot--active");
      }
    };
    const onDown = () => ring.classList.add("cursor-ring--down");
    const onUp = () => ring.classList.remove("cursor-ring--down");
    const onLeave = () => {
      ring.style.opacity = "0";
      dot.style.opacity = "0";
    };
    const onEnter = () => {
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="cursor-root">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
