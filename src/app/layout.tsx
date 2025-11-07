import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@assets/css/globals.css";

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
      path: '../assets/fonts/ethnocentric.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ethnocentric',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cognivio",
  description: "Cognivio homepage",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
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
        className={`${geistSans.variable} ${geistMono.variable} ${ethnocentric.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
