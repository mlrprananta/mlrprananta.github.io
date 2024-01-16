import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@next/third-parties"
import Script from "next/script";

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XJ72ZYCPR2"></Script>
      <Script id="gtag">
        {
          `  
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-XJ72ZYCPR2');
          `
        }
      </Script>
      <body className={`${inter.className} bg-slate-950`}>
        <div className="absolute lg:fixed mix-blend-normal -top-1/2 w-full h-full rounded-b-full lg:rounded-none bg-gradient-to-r from-slate-800/60 via-emerald-800/60 via-60% to-indigo-800/40 -z-30 blur-3xl"></div>
        <div className="absolute lg:fixed mix-blend-normal -top-1/4 inset-0 w-full h-full rounded-b-full bg-gradient-to-t from-slate-900/50 to-indigo-800/50 -z-40 blur-3xl"></div>
        {children}
      </body>
    </html>
  );
}
