'use client';
import { useEffect } from 'react';

export default function LongTaskLogger() {
  useEffect(() => {
    const div = document.createElement('div');
    div.style.cssText =
      'position:fixed;bottom:0;left:0;background:#000;color:#0f0;' +
      'font-size:10px;z-index:99999;max-height:200px;overflow:auto;' +
      'padding:4px;width:100%;font-family:monospace;';
    document.body.appendChild(div);

    function log(msg: string) {
      const line = document.createElement('div');
      line.textContent = msg;
      div.appendChild(line);
      div.scrollTop = div.scrollHeight;
    }

    const start = performance.now();

    // Try native Long Tasks API first (Chrome/Edge)
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          log(`[longtask] ${(performance.now() - start).toFixed(0)}ms: ${entry.name} — ${entry.duration.toFixed(0)}ms`);
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      log('[longtask API unsupported — falling back to frame-gap detection]');
    }

    // Frame-gap detection — works everywhere, including Safari
    let last = performance.now();
    let rafId: number;
    function tick() {
      const now = performance.now();
      const gap = now - last;
      if (gap > 50) {
        log(`[frame-gap] ${(now - start).toFixed(0)}ms: stall of ${gap.toFixed(0)}ms`);
      }
      last = now;
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return null;
}