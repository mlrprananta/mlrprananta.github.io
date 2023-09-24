import { ReactNode } from "react";
import { HiLink, HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import SkillList from "./SkillList";

interface Props {
  title: string;
  url: string;
  skills: string[];
  children: ReactNode;
}

export default function Project(props: Props) {
  return (
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
                hover:text-blue-600
                "
      >
        {`${props.title.substring(0, props.title.lastIndexOf(" "))}`}
        <span className="inline-block">
          {props.title.split(" ").slice(-1)[0]}
          <HiMiniArrowTopRightOnSquare className="inline align-text-top text-base ml-1"></HiMiniArrowTopRightOnSquare>
        </span>
      </a>
      <div className="text-xs leading-relaxed text-white/90 my-2">
        {props.children}
        {/* <div>
            <HiLink className="inline align-middle mr-1"></HiLink>
            <a className="underline" href={props.url}>GitHub</a>
        </div> */}
      </div>
      <div className="font-medium tracking-normal text-blue-200/80 my-4">
        <SkillList skills={props.skills} scale="small"></SkillList>
      </div>
    </div>
  );
}
