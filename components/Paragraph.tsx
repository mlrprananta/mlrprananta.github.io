import { ReactNode } from "react";

export default function Paragraph({ children }: { children: ReactNode }) {
  return <p className="my-2 text-white/70">{children}</p>;
}
