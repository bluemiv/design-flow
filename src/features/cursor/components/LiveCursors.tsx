'use client';

import Cursor from '@/features/cursor/components/Cursor';
import { TLiveCursorProps } from '@/features/cursor/types';
import { CURSOR_COLORS } from '@/features/cursor/constants';

export default function LiveCursors({ others }: TLiveCursorProps) {
  return others.map((other) => {
    const { connectionId, presence } = other;
    if (!presence?.cursor) return null;
    return (
      <Cursor
        key={connectionId}
        color={CURSOR_COLORS[Number(connectionId) % CURSOR_COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.cursor.message}
      />
    );
  });
}
