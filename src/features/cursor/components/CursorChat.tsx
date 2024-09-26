import Icons from '@/components/Icons';
import { CURSOR_MODE } from '@/features/cursor/constants';
import { TCursorState } from '@/features/cursor/types';
import ChatBallon from '@/features/chat/components/ChatBallon';
import { useRef } from 'react';

interface TProps {
  cursor: { x: number; y: number };
  cursorState: TCursorState;
  onChangeMessage: (message: string) => void;
}

export default function CursorChat({ cursor, cursorState, onChangeMessage }: TProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    onChangeMessage(e.target.value);
  };

  return (
    <div
      className="absolute top-0 left-0"
      style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
    >
      {cursorState.mode === CURSOR_MODE.CHAT && (
        <>
          <Icons.Cursor style={{ color: '#DDDDDD' }} />
          <ChatBallon className="absolute left-2 top-5">
            <textarea
              ref={textareaRef}
              rows={1}
              autoFocus
              value={cursorState.message}
              onChange={onChange}
              className="border-none bg-transparent text-white outline-none w-full break-all resize-none h-auto overflow-hidden"
              placeholder="메시지 작성해보세요"
            />
          </ChatBallon>
        </>
      )}
    </div>
  );
}
