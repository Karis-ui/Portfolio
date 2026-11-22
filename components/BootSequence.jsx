"use client";

import { useEffect, useRef, useState } from "react";

const bootMessages = [
  "Powering secure interface...",
  "Verifying local simulation environment...",
  "Negotiating encrypted session...",
  "Mapping enterprise system pathways...",
  "Loading security and engineering modules...",
  "Session ready. Welcome, operator.",
];

export default function BootSequence({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef(null);
  const timersRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bootDuration = prefersReducedMotion ? 1200 : 4500;
    const exitDuration = prefersReducedMotion ? 80 : 320;
    dialogRef.current?.focus({ preventScroll: true });

    timersRef.current = [
      window.setTimeout(() => setIsClosing(true), bootDuration - exitDuration),
      window.setTimeout(() => setIsVisible(false), bootDuration),
    ];

    return () => timersRef.current.forEach(window.clearTimeout);
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  function skipBoot() {
    timersRef.current.forEach(window.clearTimeout);
    setIsClosing(true);
    timersRef.current = [window.setTimeout(() => setIsVisible(false), 180)];
  }

  return (
      <>
        <div inert={isVisible}>{children}</div>
        {isVisible && (
          <div
            ref={dialogRef}
            className={`boot-overlay${isClosing ? " is-closing" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="boot-title"
            tabIndex={-1}
            onKeyDown={(event) => {
              if (event.key === "Escape") skipBoot();
            }}
          >
            <div className="boot-grid" aria-hidden="true" />
            <div className="boot-scanline" aria-hidden="true" />
            <section className="boot-terminal">
              <header className="boot-terminal-header">
                <div className="boot-brand"><span>◆</span> CMK // SECURE SYSTEMS</div>
                <span className="boot-simulation-label"><i /> SIMULATION ONLY</span>
              </header>

              <div className="boot-terminal-content">
                <p className="boot-overline">PORTFOLIO ENVIRONMENT ·....</p>
                <h1 id="boot-title">SYSTEM <span>BOOT</span></h1>
                <p className="boot-description">Initializing secure access interface...</p>

                <div className="boot-connection">
                  <span>REMOTE NODE</span>
                  <b>ENTERPRISE CORE <i>·</i> SIMULATED</b>
                  <span className="boot-connection-state">LINK ESTABLISHED</span>
                </div>

                <div className="boot-log" aria-hidden="true">
                  {bootMessages.map((message, index) => (
                    <p key={message} style={{ "--line-index": index }}>
                      <span>[{String(index + 1).padStart(2, "0")}]</span> {message}
                    </p>
                  ))}
                </div>

                <div className="boot-progress" aria-hidden="true">
                  <span />
                </div>
                <div className="boot-progress-caption">
                  <span>ESTABLISHING SESSION</span>
                  <span>LOCAL SIMULATION</span>
                </div>
              </div>

              <footer className="boot-terminal-footer">
                <span><i /> SECURE SHELL READY</span>
                <button type="button" onClick={skipBoot}>Skip boot sequence <kbd>ESC</kbd></button>
              </footer>
            </section>
            <p className="boot-disclaimer">CINEMATIC INTRO · NO EXTERNAL SYSTEMS ARE ACCESSED</p>
            <span className="boot-screen-reader-status" role="status">Portfolio startup simulation in progress. Skip the intro to continue now.</span>
          </div>
        )}
      </>
  );
}
