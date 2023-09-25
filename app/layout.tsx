import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Prananta",
  description: "My personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth antialiased select-none static" lang="en">
      <body className={`${inter.className} bg-slate-900 `}>
        {/* <div className="fixed mix-blend-normal -top-2/3 -left-1/3 w-2/3 h-full rounded-full bg-gradient-to-r from-emerald-800 to-indigo-800 -z-30 blur-3xl"></div> */}
        <div className="fixed mix-blend-normal -top-3/4 -left-1/4 w-full h-full rounded-full bg-gradient-to-l from-emerald-800 from-20% to-slate-700 -z-30 blur-3xl"></div>
        <div className="fixed mix-blend-normal -top-3/4 left-1/2 w-2/3 h-full rounded-full bg-gradient-to-r from-emerald-800 from-30% to-indigo-800 -z-30 blur-3xl"></div>
        {children}
      </body>
    </html>
  );
}
