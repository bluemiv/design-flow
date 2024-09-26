import { TPropsWithComponent } from '@/types';

export default function ChatBallon({ children, className, style }: TPropsWithComponent) {
  return (
    <div
      className={`bg-indigo-600 text-white px-4 py-2 rounded-3xl w-[240px] break-all ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
