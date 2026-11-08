import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StackVibe Next.js Example',
  description: 'A starter app for StackVibe components in Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
