import { ReactNode } from "react";

export default function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="my-2 text-xs leading-normal tracking-normal font-normal text-white/70 max-w-sm">
      {children}
    </p>
  );
}
