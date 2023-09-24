import { ReactNode } from "react";
import SkillList from "./SkillList";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

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
    <div className="sm:flex">
      <div className="tracking-tighter text-xs/5 font-medium uppercase text-white/50 shrink-0 mr-6">
        <div className="inline-block">
          <span>{`${props.startDate} — ${props.endDate}`}</span>
        </div>
      </div>
      <div>
        <a
          href={props.url}
          className="
                block
                tracking-tight
                text-sm 
                text-white/90
                font-medium 
                transition
                hover:text-sky-600
                "
        >
          {`${props.title} @ ${props.company.substring(
            0,
            props.company.lastIndexOf(" "),
          )} `}
          <span className="inline-block">
            {props.company.split(" ").slice(-1)[0]}
            <HiMiniArrowTopRightOnSquare className="inline align-text-top text-base ml-1"></HiMiniArrowTopRightOnSquare>
          </span>
        </a>
        <div className="my-2">{props.children}</div>
        <div className="font-medium tracking-normal text-blue-200/80 my-4">
          <SkillList skills={props.skills} scale="small"></SkillList>
        </div>
      </div>
    </div>
  );
}
