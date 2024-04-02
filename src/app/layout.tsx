import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Parent from './Parent';

const Manrop = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Manrop.className}>
        <Parent>{children}</Parent>
      </body>
    </html>
  );
}
