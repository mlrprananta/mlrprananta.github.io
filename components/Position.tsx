import { ReactNode } from "react";

interface Props {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  url: string;
  children: ReactNode;
}

export default function Position(props: Props) {
  return (
    <div className="py-4 sm:grid sm:grid-cols-4 grid-flow-col-dense">
      <div>
        <p className="text-xs/6 font-medium uppercase text-white/50 mr-2">
          <span className="inline-block">{props.startDate}</span> -{" "}
          <span className="inline-block">{props.endDate}</span>
        </p>
      </div>
      <div className="col-span-3">
        <a
          href={props.url}
          className="
                items-center 
                text-sm 
                text-white/90
                font-medium 
                transition
                hover:text-blue-600"
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
        </a>
        {/* <h2 className="text-lg font-semibold">{props.company}</h2> */}
        {/* <div className="text-sm text-white/50 my-2">{props.children}</div> */}
        <div className="text-xs leading-relaxed text-white/60 my-2">
          {props.children}
        </div>
      </div>
    </div>
  );
}
