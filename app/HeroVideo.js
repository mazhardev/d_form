"use client";

import { useRef, useState } from "react";
import { asset } from "@/lib/config";

export default function HeroVideo() {
  const ref = useRef(null);
  const [withSound, setWithSound] = useState(false);

  const playWithSound = () => {
    const v = ref.current;
    if (!v || withSound) return;
    v.src = asset("/media/ghee-process.mp4");
    v.muted = false;
    v.loop = false;
    v.controls = true;
    v.currentTime = 0;
    v.play().catch(() => {});
    setWithSound(true);
  };

  return (
    <div className="hero-media">
      <div className="video-frame">
        <video
          ref={ref}
          src={asset("/media/ghee-loop.mp4")}
          poster={asset("/media/poster.jpg")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video: fresh cream being churned into makhan and slow-cooked into desi ghee"
        />
        {!withSound && (
          <button className="video-play" onClick={playWithSound}>
            <span className="video-play-icon" aria-hidden="true">▶</span>
            Watch the full process
          </button>
        )}
      </div>
      <div className="hero-seal" aria-hidden="true">
        <svg viewBox="0 0 120 120" width="120" height="120">
          <defs>
            <path id="seal-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
          </defs>
          <circle cx="60" cy="60" r="58" fill="#c9a24a" />
          <circle cx="60" cy="60" r="52" fill="none" stroke="#1b2618" strokeWidth="0.8" />
          <text fontSize="10.5" letterSpacing="2.6" fill="#1b2618" fontFamily="Manrope, sans-serif" fontWeight="700">
            <textPath href="#seal-circle">MUHAMMAD DAIRY · PURE DESI GHEE ·</textPath>
          </text>
          <text x="60" y="56" textAnchor="middle" fontSize="11" fill="#1b2618" fontFamily="Manrope, sans-serif" fontWeight="700" letterSpacing="2">EST.</text>
          <text x="60" y="78" textAnchor="middle" fontSize="24" fill="#1b2618" fontFamily="'Cormorant Garamond', serif" fontWeight="700">1975</text>
        </svg>
      </div>
    </div>
  );
}
