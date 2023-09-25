import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main
      className="
      static
    flex 
    min-h-screen
    mx-auto
    flex-col 
    items-center"
    >
      <div className="fixed mix-blend-screen -top-1/2 -left-1/2 w-3/4 aspect-square rounded-full bg-slate-800 -z-20 blur-[240px]"></div>
      <div className="fixed mix-blend-screen -top-1/2 -right-1/2 w-2/3 aspect-square rounded-full bg-indigo-800 -z-30 blur-[240px]"></div>
      <div className="fixed mix-blend-screen -top-1/2 h-5/6 aspect-square rounded-full bg-emerald-800 -z-40 blur-[240px]"></div>
      <div className="fixed w-full h-full bg-slate-950 -z-50"></div>
      {children}
    </main>
  );
}
