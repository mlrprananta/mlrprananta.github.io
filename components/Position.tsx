import { ReactNode } from "react";
import Pill from "./Pill";

interface Props {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  url: string;
  skills: string[];
  children: ReactNode;
}

export default function Position(props: Props) {
  return (
    <a href={props.url} className="group py-4 grid grid-cols-1 sm:grid-cols-4">
      <div className="col-span-1">
        <p className="text-xs/5 font-medium uppercase text-white/50 mr-2">
          <span className="inline-block">{props.startDate}</span> -{" "}
          <span className="inline-block">{props.endDate}</span>
        </p>
      </div>
      <div className="col-span-3 transition group-hover:translate-x-2">
        <p
          className="
                text-sm 
                text-white/90
                font-medium 
                transition
                group-hover:text-blue-600"
        >
          {`${props.title} @ ${props.company}`}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </p>
        <div className="text-xs leading-relaxed text-white/70 my-2">
          {props.children}
        </div>
        <div className="leading-loose">
          {props.skills.map((skill) => (
            <Pill key={skill} name={skill}></Pill>
          ))}
        </div>
      </div>
    </a>
  );
}
