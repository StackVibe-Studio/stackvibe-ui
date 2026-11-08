import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StackVibe UI',
  description: 'Design beyond the ordinary.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
