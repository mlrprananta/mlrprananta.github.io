import { ReactNode } from "react";

interface Props {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  children: ReactNode;
}

export default function Position(props: Props) {
  return (
    <div className="border rounded-xl border-white/50 border-t my-4 px-4 py-4">
      <h3 className="text-sm">{props.title}</h3>
      <h2 className="text-xl font-semibold">{props.company}</h2>
      <p className="text-xs font-semibold opacity-50">{`${props.startDate} - ${props.endDate}`}</p>
      <div className="text-sm opacity-50 my-2">{props.children}</div>
    </div>
  );
}
