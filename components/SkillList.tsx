import Skill from "./Skill";

export default function SkillList({ skills }: { skills: string[] }) {
  return (
    <div>
      {skills.map((skill, index) => {
        return (
          <span key={skill} className="inline-block select-none">
            <Skill name={skill}></Skill>
            {index !== skills.length - 1 ? (
              <span className="text-white/50 text-xs font-bold mx-1">·</span>
            ) : (
              ""
            )}
          </span>
        );
      })}
    </div>
  );
}
