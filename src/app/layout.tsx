import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SharedHeader } from "@/components/shared-header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const generateMetadata = (): Metadata => {
  return {
    title: "Carbon Infinity | Next Gen Carbon Management",
    description: "A Carbon Tech Company",
    icons: {
      icon: "/favicon.ico",
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SharedHeader />
        {children}
      </body>
    </html>
  );
}
