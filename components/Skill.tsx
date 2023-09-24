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

const iconOnlySkills = ["C#", "TypeScript", "AWS"];

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

export default function Skill({ name }: { name: string }) {
  const basename = name.split(" ")[0];
  const iconOnly = iconOnlySkills.includes(basename);
  const icon = getIcon(basename);
  return (
    <span className="inline-block text-white/50 text-xs transform hover:text-white">
      {iconOnly ? "" : name}
      <span
        className={`inline-block align-top text-base ${
          !iconOnly && icon ? "ml-1" : ""
        }`}
      >
        {icon}
      </span>
    </span>
  );
}
