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

    const start = performance.now();
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const line = document.createElement('div');
        line.textContent = `${(performance.now() - start).toFixed(0)}ms: ${entry.name} — ${entry.duration.toFixed(0)}ms`;
        div.appendChild(line);
      }
    });
    observer.observe({ entryTypes: ['longtask'] });

    return () => observer.disconnect();
  }, []);

  return null;
}