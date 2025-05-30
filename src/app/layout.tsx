import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const humaneFont = localFont({
  src: "./fonts/Humane-Bold.woff2",
  variable: "--font-humane",
});

const enigmaFont = localFont({
  src: "./fonts/enigma.otf",
  variable: "--font-enigma",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "WELCOME TO MY WORLD",
  description: "Victor Roe's Website",
  keywords: ["Victor Roe", "Victor Rangel", "Victor Jose Rangel Romero", "Victor Rangel Romero Portfolio", "Victor Rangel Romero Projects", "Victor Rangel Romero About me", "Victor Rangel Romero Contact", "Victor Rangel Romero GitHub", "Victor Rangel Romero LinkedIn", "Victor Rangel Romero Email"],
  authors: [{ name: "Victor Jose Rangel Romero", url: "https://www.victorroe.com" }],
  openGraph: {
    title: "WELCOME TO MY WORLD",
    description: "Victor Roe's Website",
    url: "https://www.victorroe.com",
    siteName: "Victor Roe's Website",
    images: "/graph.png",
  },
  metadataBase: new URL('https://www.victorroe.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${humaneFont.variable} ${enigmaFont.variable} ${openSans.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
