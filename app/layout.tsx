import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeCSES",
  description: "A Solution Page for CSES Problem set",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#f8fefd]")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
