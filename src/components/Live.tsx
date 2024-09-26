'use client';

import { PointerEvent, useCallback } from 'react';
import { useMyPresence, useOthers } from '@liveblocks/react';
import LiveCursors from '@/features/cursor/components/LiveCursors';

export default function Live() {
  const others = useOthers();
  const [myPresence, setMyPresence] = useMyPresence();

  const onPointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.target as Element;
    const x = event.clientX - target.getBoundingClientRect().x;
    const y = event.clientY - target.getBoundingClientRect().y;
    setMyPresence({ cursor: { x, y } });
  }, []);

  const onPointerLeave = useCallback((event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    setMyPresence({ cursor: null, message: null });
  }, []);

  return (
    <div
      className="w-full h-full"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerMove}
    >
      <LiveCursors others={others} />
    </div>
  );
}
