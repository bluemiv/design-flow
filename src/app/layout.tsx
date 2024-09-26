import type { Metadata } from 'next';
import localFont from 'next/font/local';
import LiveblocksRoomProvider from '@/provider/LiveblocksRoomProvider';
import './globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'Design Flow',
  description: '손 쉽게 화면 기획을 만들어보세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard} antialiased bg-primary text-secondary`}>
        <LiveblocksRoomProvider>{children}</LiveblocksRoomProvider>
      </body>
    </html>
  );
}
