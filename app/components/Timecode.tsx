"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

// "Time & sequence": a running production timecode at 24 fps.
export function Timecode({ className = "" }: { className?: string }) {
  const [tc, setTc] = useState("00:00:00:00");

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const t = (performance.now() - start) / 1000;
      const f = Math.floor((t % 1) * 24);
      const s = Math.floor(t) % 60;
      const m = Math.floor(t / 60) % 60;
      const h = Math.floor(t / 3600);
      setTc(`${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span className={className} aria-hidden="true">
      {tc}
    </span>
  );
}
