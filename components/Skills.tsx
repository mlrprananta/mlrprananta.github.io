import Subheader from "./Subheader";
import SkillList from "./SkillList";

const skills = [
    "Java",
    "TypeScript",
    "Python",
    "JavaScript",
    "Spring",
    "JUnit",
    "Mockito",
    "React",
    "Node.js",
    "Docker",
    "Kubernetes",
    "RabbitMQ",
    "MongoDB",
    "REST API",
  ];

export default function Skills() {
  return (
    <section id="skills" className="w-full p-6">
        <Subheader>Relevant Skills</Subheader>
             <div className="md:max-w-lg font-medium tracking-normal text-blue-200/80 my-4">
        <SkillList skills={skills} scale="large"></SkillList>
      </div>
    </section>
  );
}
