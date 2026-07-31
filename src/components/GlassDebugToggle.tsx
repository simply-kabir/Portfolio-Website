'use client';
import { useEffect, useState } from 'react';

export default function GlassDebugToggle() {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(localStorage.getItem('disableGlass') === 'true');
  }, []);

  function toggle() {
    const next = !disabled;
    localStorage.setItem('disableGlass', String(next));
    window.location.reload();
  }

  return (
    <button
      onClick={toggle}
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 9999,
        padding: '8px 12px',
        background: '#000',
        color: '#0f0',
        fontSize: 12,
        borderRadius: 8,
        border: 'none',
      }}
    >
      Glass: {disabled ? 'OFF' : 'ON'}
    </button>
  );
}