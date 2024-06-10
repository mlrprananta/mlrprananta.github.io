import { FaJava, FaNodeJs } from "react-icons/fa6";
import {
  SiAmazonaws,
  SiAmazonecs,
  SiCsharp,
  SiCucumber,
  SiDocker,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

const iconOnlySkills = ["C#", "TypeScript", "AWS", "JavaScript"];

function getIcon(name: string) {
  switch (name) {
    case "Java":
      return <FaJava></FaJava>;
    case "TypeScript":
      return <SiTypescript></SiTypescript>;
    case "MongoDB":
      return <SiMongodb></SiMongodb>;
    case "Spring":
      return <SiSpringboot />;
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
      return <TbBrandKotlin></TbBrandKotlin>;
    case "Tailwind":
      return <SiTailwindcss></SiTailwindcss>;
    case "Next.js":
      return <SiNextdotjs></SiNextdotjs>;
    case "JavaScript":
      return <SiJavascript></SiJavascript>;
    case "RabbitMQ":
      return <SiRabbitmq></SiRabbitmq>;
    case "Cucumber":
      return <SiCucumber></SiCucumber>;
    case "Amazon":
      return <SiAmazonecs />;
    default:
      return;
  }
}

function translateTextSize(textSize: string) {
  switch (textSize) {
    case "text-sm":
      return "text-xl";
    default:
      return "text-base";
  }
}

export default function Skill({
  name,
  textSize,
}: {
  name: string;
  textSize: "text-xs" | "text-sm";
}) {
  const basename = name.split(" ")[0];
  const iconOnly = iconOnlySkills.includes(basename);
  const icon = getIcon(basename);
  return (
    <span
      className={`inline-block transform hover:text-white transition ${textSize}`}
    >
      {iconOnly ? "" : name}
      <span
        className={`inline-block align-top ${translateTextSize(textSize)} ${
          !iconOnly && icon ? "ml-1" : ""
        }`}
      >
        {icon}
      </span>
    </span>
  );
}
