import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Curzy Cloud',
  description: 'END',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0c]">{children}</body>
    </html>
  )
}
