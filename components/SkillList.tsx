import Skill from "./Skill";

export default function SkillList({ skills }: { skills: string[] }) {
  return (
    <div className="my-4">
      {skills.map((skill, index) => {
        return (
          <span key={skill} className="inline-block select-none">
            <Skill name={skill}></Skill>
            {index !== skills.length - 1 ? <span className="mx-2"></span> : ""}
          </span>
        );
      })}
    </div>
  );
}
