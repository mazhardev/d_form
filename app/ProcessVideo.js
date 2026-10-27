"use client";

import { useEffect, useRef, useState } from "react";
import { STEPS, asset } from "@/lib/config";

const FALLBACK_DURATION = 71.8;
const clock = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

// The process video as a silent, chaptered "story": it plays while on screen, the bars on top
// track each step, and the step list beside it jumps straight to that part of the video.
export default function ProcessVideo({ children }) {
  const videoRef = useRef(null);
  const listRef = useRef(null);
  const userPaused = useRef(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(FALLBACK_DURATION);
  const [playing, setPlaying] = useState(false);

  const ends = STEPS.map((s, i) => (i + 1 < STEPS.length ? STEPS[i + 1].at : duration));
  const active = STEPS.reduce((a, s, i) => (time >= s.at ? i : a), 0);

  // Play while on screen, pause when scrolled away. Never autoplay for reduced-motion users.
  useEffect(() => {
    const v = videoRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) v.pause();
        else if (!reduce && !userPaused.current) v.play().catch(() => {});
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // timeupdate only fires a few times a second; follow the frame clock while playing so the bars move smoothly.
  useEffect(() => {
    if (!playing) return;
    let raf;
    const tick = () => {
      setTime(videoRef.current.currentTime);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  // On phones the step list scrolls sideways; keep the current step in view.
  useEffect(() => {
    const list = listRef.current;
    const el = list?.children[active];
    if (!el || list.scrollWidth <= list.clientWidth) return;
    const offset = el.getBoundingClientRect().left - list.getBoundingClientRect().left;
    list.scrollTo({ left: list.scrollLeft + offset - (list.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  }, [active]);

  const seek = (i) => {
    const v = videoRef.current;
    v.currentTime = STEPS[i].at;
    setTime(STEPS[i].at);
    userPaused.current = false;
    v.play().catch(() => {});
  };

  const toggle = () => {
    const v = videoRef.current;
    userPaused.current = !v.paused;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="film">
      <div className="film-player">
        <video
          ref={videoRef}
          src={asset("/media/ghee-loop.mp4")}
          poster={asset("/media/poster.jpg")}
          muted
          loop
          playsInline
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || FALLBACK_DURATION)}
          aria-label="Video: fresh cream being churned into makhan and slow-cooked into desi ghee"
        />
        <div className="film-bars" aria-hidden="true">
          {STEPS.map((s, i) => {
            const p = Math.min(1, Math.max(0, (time - s.at) / (ends[i] - s.at)));
            return (
              <span key={s.title} style={{ flexGrow: ends[i] - s.at }}>
                <i style={{ transform: `scaleX(${p})` }} />
              </span>
            );
          })}
        </div>
        <button className={`film-toggle ${playing ? "" : "paused"}`} onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}>
          <span className="film-play" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z" /></svg>
          </span>
        </button>
        <div className="film-caption" aria-live="polite">
          <span>Step {active + 1} of {STEPS.length}</span>
          <strong>{STEPS[active].title}</strong>
        </div>
      </div>

      <div className="film-side">
        {children}
        <ol className="chapters" ref={listRef}>
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <button
                className={`chapter${i === active ? " on" : ""}`}
                onClick={() => seek(i)}
                aria-current={i === active ? "step" : undefined}
              >
                <img src={asset(s.img)} alt="" width="52" height="60" loading="lazy" />
                <span className="chapter-text">
                  <span className="chapter-meta">
                    Step {i + 1} · {clock(s.at)}
                  </span>
                  <strong>{s.title}</strong>
                  <span className="chapter-desc">{s.text}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
