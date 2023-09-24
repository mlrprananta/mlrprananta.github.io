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
    <a href={props.url} className="group sm:flex">
      <div className="tracking-tighter text-xs/5 font-medium uppercase text-white/50 shrink-0 mr-6">
        <div className="inline-block">{props.startDate}</div>
        <div className="inline">{" — "}</div>
        <div className="inline-block">{props.endDate}</div>
      </div>
      <div>
        <div
          className="
          tracking-tight
                text-sm 
                text-white/90
                font-medium 
                transition
                group-hover:text-blue-600
                "
        >
          {`${props.title} @ ${props.company.substring(
            0,
            props.company.lastIndexOf(" "),
          )} `}
          <span className="inline-block">
            {props.company.split(" ").slice(-1)[0]}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block align-text-top w-4 h-4 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="text-xs leading-relaxed text-white/70 my-2">
          {props.children}
        </div>
        <div className="">
          {props.skills.map((skill, index) => {
            return (
              <>
                <Pill key={skill} name={skill}></Pill>
                {index !== props.skills.length - 1 ? (
                  <span className="text-white/50 text-xs mx-2">·</span>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </a>
  );
}
