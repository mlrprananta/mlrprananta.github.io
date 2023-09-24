import Skill from "./Skill";

export default function SkillList({
  skills,
  scale,
}: {
  skills: string[];
  scale: "small" | "large";
}) {
  return (
    <>
      {skills.map((skill, index) => {
        return (
          <span key={skill} className="inline-block select-none">
            <Skill name={skill} scale={scale}></Skill>
            {index !== skills.length - 1 ? <span className="mx-2">·</span> : ""}
          </span>
        );
      })}
    </>
  );
}
