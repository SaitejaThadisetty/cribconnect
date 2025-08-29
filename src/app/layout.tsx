import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";

import SessionWrapper from "@/components/SessionWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "UCM CribConnect",
  description: "Find Your Home at UCM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${merriweather.variable} antialiased`}>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
