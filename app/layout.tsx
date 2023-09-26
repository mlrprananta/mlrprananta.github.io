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
    <html className="scroll-smooth antialiased select-none" lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <div className="absolute lg:fixed mix-blend-normal -top-1/4 lg:left-0 left-1/4 w-1/2 lg:w-2/3 h-2/3 rounded-b-full bg-gradient-to-t from-emerald-800/40 to-emerald-800/60 -z-30 blur-3xl"></div>
        <div className="absolute lg:fixed mix-blend-normal -top-1/4 inset-0 w-full h-full rounded-b-full lg:rounded-none bg-gradient-to-t from-slate-800/50 to-indigo-800/50 -z-40 blur-3xl"></div>
        {children}
      </body>
    </html>
  );
}
