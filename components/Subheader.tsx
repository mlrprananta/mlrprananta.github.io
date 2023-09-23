import { ReactNode } from "react";

export default function Subheader({ children }: { children: ReactNode }) {
  return (
    <h1 className="tracking-tight text-xl my-4 text-white/90 font-semibold">
      {children}
    </h1>
  );
}
