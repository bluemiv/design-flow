'use client';

import { PointerEvent, useCallback, useEffect, useState } from 'react';
import { useMyPresence, useOthers } from '@liveblocks/react';
import LiveCursors from '@/features/cursor/components/LiveCursors';
import { CURSOR_MODE } from '@/features/cursor/constants';
import { TCursorState } from '@/features/cursor/types';
import CursorChat from '@/features/cursor/components/CursorChat';
import Cursor from '@/features/cursor/components/Cursor';

export default function LiveBoard() {
  const [cursorState, setCursorState] = useState<TCursorState>({
    mode: CURSOR_MODE.HIDDEN,
    message: '',
  });
  const others = useOthers();
  const [myPresence, updateMyPresence] = useMyPresence() as any;

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === '/') {
        setCursorState({ ...cursorState, mode: CURSOR_MODE.CHAT });
      } else if (e.key === 'Escape') {
        updateMyPresence({ message: '' });
        setCursorState({ ...cursorState, mode: CURSOR_MODE.HIDDEN });
      }
    };
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const onPointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.currentTarget as Element;
    const x = event.clientX - target.getBoundingClientRect().x;
    const y = event.clientY - target.getBoundingClientRect().y;
    updateMyPresence({ cursor: { x, y } });
  }, []);

  const onPointerLeave = useCallback((event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    updateMyPresence({ cursor: null, message: null });
  }, []);

  return (
    <div
      className="w-full h-full cursor-none"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerMove}
    >
      {myPresence?.cursor && (
        <CursorChat
          cursor={myPresence.cursor}
          cursorState={cursorState}
          onChangeMessage={(message) => {
            updateMyPresence({ message });
            setCursorState({ ...cursorState, message });
          }}
          onKeyDownInput={(key) => {
            if (key === 'Enter') {
              setCursorState({ ...cursorState, mode: CURSOR_MODE.HIDDEN });
            }
          }}
        />
      )}
      {myPresence?.cursor && (
        <Cursor color={'#DDDDDD'} x={myPresence?.cursor.x} y={myPresence?.cursor.y} />
      )}
      <LiveCursors others={others} />
    </div>
  );
}
