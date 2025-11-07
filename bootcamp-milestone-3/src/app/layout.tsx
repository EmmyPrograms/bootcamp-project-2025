import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amelia's Personal Website",
  description: "A personal website for Amelia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.variable}antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
