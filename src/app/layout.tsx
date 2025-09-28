import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ethnocentric = localFont({
  src: [
    {
      path: './ethnocentric.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ethnocentric',
  display: 'swap',
});

const montserrat  = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Cognivio",
  description: "Cognivio homepage",
  icons: {
    icon: '/brand/cognivio-eagle.svg',
    shortcut: '/brand/cognivio-eagle.svg',
    apple: '/brand/cognivio-eagle.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ethnocentric.variable} antialiased bg-honey-light`}
      >
        {children}
      </body>
    </html>
  );
}
