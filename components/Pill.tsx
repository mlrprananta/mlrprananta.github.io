import { FaJava, FaNodeJs } from "react-icons/fa6";
import {
  SiAmazonaws,
  SiCsharp,
  SiDocker,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiPython,
  SiReact,
  SiSpring,
  SiTypescript,
} from "react-icons/si";

function showName(name: string) {
  switch (name) {
    case "C#":
      return false;
    case "TypeScript":
      return false;
    case "AWS":
      return false;
    default:
      return true;
  }
}

function getIcon(name: string) {
  switch (name) {
    case "Java":
      return <FaJava></FaJava>;
    case "TypeScript":
      return <SiTypescript></SiTypescript>;
    case "MongoDB":
      return <SiMongodb></SiMongodb>;
    case "Spring":
      return <SiSpring></SiSpring>;
    case "Kubernetes":
      return <SiKubernetes></SiKubernetes>;
    case "React":
      return <SiReact></SiReact>;
    case "Python":
      return <SiPython></SiPython>;
    case "C#":
      return <SiCsharp></SiCsharp>;
    case "Node.js":
      return <FaNodeJs></FaNodeJs>;
    case "AWS":
      return <SiAmazonaws></SiAmazonaws>;
    case "Docker":
      return <SiDocker></SiDocker>;
    case "Kotlin":
      return <SiKotlin></SiKotlin>;
    default:
      return;
  }
}

export default function Pill({ name }: { name: string }) {
  return (
    <span className="inline-block text-white/50 text-xs">
      {showName(name) ? name : ""}
      <span
        className={`inline-block align-middle text-base ${
          showName(name) && getIcon(name.split(" ")[0]) !== undefined
            ? "ml-1"
            : ""
        }`}
      >
        {getIcon(name.split(" ")[0])}
      </span>

      {/* <span className="mx-1">-</span> */}
    </span>
  );
}
