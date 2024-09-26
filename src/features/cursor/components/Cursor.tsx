import Icons from '@/components/Icons';

interface TProps {
  color: string;
  x: number;
  y: number;
  message: string;
}

export default function Cursor({ color, x, y, message }: TProps) {
  console.log(color);
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <Icons.Cursor style={{ color }} />
    </div>
  );
}
