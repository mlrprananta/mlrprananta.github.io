import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main
      className="
    flex 
    min-h-screen
    mx-auto
    flex-col 
    items-center"
    >
      {children}
    </main>
  );
}
