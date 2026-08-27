import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watchnest - Track Movies & TV Shows",
  description:
    "Your personal full-stack media tracker powered by Next.js and TMDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body
        className={`${inter.className} min-h-screen bg-gray-950 text-gray-100 antialiased flex flex-col`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
