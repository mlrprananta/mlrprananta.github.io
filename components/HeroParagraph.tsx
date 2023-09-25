import { ReactNode } from "react";

export default function HeroParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm leading-normal tracking-normal font-normal text-white/70 my-2 md:max-w-lg">
      {children}
    </p>
  );
}
