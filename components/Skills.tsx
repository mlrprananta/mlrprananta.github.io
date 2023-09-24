import { FaJava } from "react-icons/fa";
import { SiTypescript, SiSpring, SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <div>
      <div className="inline-flex gap-2 my-2">
        <SiTypescript className="inline-block text-xl">TypeScript</SiTypescript>
        <FaJava className="inline-block text-xl"></FaJava>
      </div>
      <ul className="list-inside space-y-1">
        <li>
          <SiTypescript className="mr-2 inline-block text-xl"></SiTypescript>
          TypeScript
        </li>
        <li>
          <FaJava className="mr-2 inline-block text-xl"></FaJava>
          Java 17
        </li>
        <li>
          <SiSpring className="mr-2 inline-block text-xl"></SiSpring>
          Spring Webflux
        </li>
      </ul>
    </div>
  );
}
