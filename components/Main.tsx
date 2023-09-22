import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main
      className="
    flex 
    min-h-screen 
    flex-col 
    items-center  
    dark:bg-slate-950"
    >
      {children}
    </main>
  );
}
