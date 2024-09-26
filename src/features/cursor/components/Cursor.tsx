import Icons from '@/components/Icons';
import ChatBallon from '@/features/chat/components/ChatBallon';
import { TPropsWithClassName } from '@/types';

interface TProps {
  color: string;
  x: number;
  y: number;
  message?: string;
}

export default function Cursor({ color, x, y, message, className }: TPropsWithClassName<TProps>) {
  return (
    <div className={`absolute ${className}`} style={{ top: `${y}px`, left: `${x}px` }}>
      <Icons.Cursor style={{ color }} />
      {message && (
        <ChatBallon className="absolute left-2 top-5" style={{ background: color }}>
          {message}
        </ChatBallon>
      )}
    </div>
  );
}
