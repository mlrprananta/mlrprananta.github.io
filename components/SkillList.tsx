import Skill from "./Skill";

export default function SkillList({ skills }: { skills: string[] }) {
  return (
    <div>
      {skills.map((skill, index) => {
        return (
          <span key={skill} className="inline-block">
            <Skill name={skill}></Skill>
            {index !== skills.length - 1 ? (
              <span className="text-white/50 text-xs font-bold mx-2">·</span>
            ) : (
              ""
            )}
          </span>
        );
      })}
    </div>
  );
}
